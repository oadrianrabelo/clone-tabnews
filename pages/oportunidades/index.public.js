import Head from "next/head";
import Link from "next/link";
import Alianca from "pages/interface/components/AliancaComponente";

export default function Oportunidades() {
  return (
    <>
      <Head>
        <title>Carta aberta - Oportunidade</title>
      </Head>
      <main>
        <div className="aliancas-container">
          <Alianca
            imgSrc="/img/aliancas/par-1/par-1.webp"
            nome="Aliança 1"
            detalhesImgSrc="/img/aliancas/par-1/detalhes-1.webp"
            textoOpcional="Essa é para ambos"
          />
          <Alianca
            imgSrc="/img/aliancas/par-2/par-2.webp"
            nome="Aliança 2"
            detalhesImgSrc="/img/aliancas/par-2/detalhes-2.webp"
            outrasImagens={["/img/aliancas/par-2/detalhes-2-2.webp"]}
            textoOpcional="Aqui, uma é diferente da outra, um para cada. E poderemos escrever algo no interior delas"
          />
          <Alianca
            imgSrc="/img/aliancas/par-3/par-3.png"
            nome="Aliança 3"
            detalhesImgSrc="/img/aliancas/par-3/par-3.png"
            textoOpcional="Essa é para ambos"
          />
          <Alianca
            imgSrc="/img/aliancas/par-4/par-4.png"
            nome="Aliança 4"
            detalhesImgSrc="/img/aliancas/par-4/par-4.png"
            outrasImagens={["/img/aliancas/par-4/detalhes-4.jpg"]}
            textoOpcional="Essa é para ambos"
          />
          <Alianca
            imgSrc="/img/aliancas/par-5/par-5.png"
            nome="Aliança 5"
            detalhesImgSrc="/img/aliancas/par-5/par-5.png"
            outrasImagens={["/img/aliancas/par-5/detalhes-5.png"]}
            textoOpcional="Essa é para ambos"
          />
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "DM Sans, sans-serif",
            fontOpticalSizing: "auto",
            fontSize: "18px",
          }}
        >
          Se preferir outra, pode sugerir. Gostei de todas essas e também estou
          aberto para novas escolhas.
        </p>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#000",
              marginBottom: "20px",
              fontSize: "16px",
              padding: "10px 20px",
              border: "1px solid #000",
              borderRadius: "4px",
              display: "inline-block",
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
            }}
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>

      <style jsx>{`
        .aliancas-container {
          display: flex;
          justify-content: center;
          gap: 10px; /* Espaçamento entre as alianças */
          flex-wrap: wrap; /* Permitir que as alianças quebrem linha quando não couberem na largura */
        }

        .aliancas-container > :last-child {
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .aliancas-container {
            flex-direction: column; /* Exibir em coluna em dispositivos móveis */
            align-items: center; /* Centralizar itens na coluna */
          }
          .aliancas-container > :last-child {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  );
}
