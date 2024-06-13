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
          />
          <Alianca
            imgSrc="/img/aliancas/par-2/par-2.webp"
            nome="Aliança 2"
            detalhesImgSrc="/img/aliancas/par-2/detalhes-2.webp"
          />
        </div>
        <div
          style={{
            alignSelf: "center",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
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
