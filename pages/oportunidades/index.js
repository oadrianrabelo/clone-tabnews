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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Alianca
            imgSrc="img/aliancas/par-1/par-1.webp"
            nome="Aliança 2"
            detalhes="public/img/aliancas/par-1/detalhes-1.webp"
          />
          <Alianca
            imgSrc="img/aliancas/par-2/par-2.webp"
            nome="Aliança 2"
            detalhes="Detalhes da aliança"
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "16px",
              padding: "10px 20px",
              border: "1px solid #000",
              borderRadius: "4px",
              transition: "background-color 0.3s, color 0.3s",
              backgroundColor: "transparent",
              display: "inline-block",
            }}
          >
            Voltar para a página inicial
          </Link>
        </div>
      </main>
    </>
  );
}
