import Head from "next/head";
import Alianca from "./alianca";
import Link from "next/link";

export default function Oportunidades() {
  return (
    <>
      <Head>
        <title>Carta aberta - Oportunidade</title>
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "DM Sans, sans-serif",
            fontOpticalSizing: "auto",
            fontSize: "18px",
          }}
        >
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
            textoOpcional="Essa é para ambos"
            outrasImagens={["/img/aliancas/par-4/par-4-detalhes.png"]}
          />
          <Alianca
            imgSrc="/img/aliancas/par-5/par-5.png"
            nome="Aliança 5"
            detalhesImgSrc="/img/aliancas/par-5/par-5.png"
            outrasImagens={["/img/aliancas/par-5/detalhes-5.png"]}
            textoOpcional="Essa é para ambos"
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#000",
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
    </>
  );
}
