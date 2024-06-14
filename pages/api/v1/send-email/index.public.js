import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { aliancaEscolhida } = req.body;
    console.log("Aliança escolhida:", aliancaEscolhida);

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: "587",
      secureConnection: "false",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
    const recipients = [
      {
        email: process.env.GMAIL_TO,
        text: `Ela escolheu a aliança: ${aliancaEscolhida}`,
      },
      {
        email: process.env.GMAIL_HER,
        text: `Meu amor, você acabou de escolher a ${aliancaEscolhida}.\nEla é linda!\n Vou amar vê-la na sua mão\n Eu amo você! ❤️`,
      },
    ];
    const sendMailPromises = recipients.map(async (recipient) => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: recipient.email,
        subject: "Aliança Escolhida",
        text: recipient.text,
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email enviado para ${recipient.email}:`, info);
        return { email: recipient.email, message: "Email enviado com sucesso" };
      } catch (error) {
        console.error(`Erro ao enviar email para ${recipient.email}:`, error);
        throw error; // Lança o erro para ser capturado depois
      }
    });

    try {
      // Executa todas as promessas de envio de email em paralelo
      const results = await Promise.all(sendMailPromises);
      res.status(200).json(results);
    } catch (error) {
      console.error("Erro ao enviar os emails:", error);
      res.status(500).json({ message: "Falha ao enviar os emails", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
