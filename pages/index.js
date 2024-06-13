import Head from "next/head";
import { CartaAberta } from "./carta-aberta";
function Home() {
  return (
    <>
      <Head>
        <title>Carta aberta</title>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          `}
        </style>
      </Head>
      <CartaAberta />
    </>
  );
}

export default Home;
