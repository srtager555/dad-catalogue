import Head from "next/head";

import { HomeHeader } from "@components/HomeHeader";
import { ProductsFilter } from "@components/productsFilter";

export default function Home({ DATA }) {
   return (
      <>
         <Head>
            <title>🍗 Pollo The One 🍗 | Catálogo</title>
         </Head>
         <HomeHeader />
         <ProductsFilter productsList={DATA} />
      </>
   );
}

export async function getStaticProps() {
   const API = process.env.API;

   const DATA = await fetch(API)
      .then((response) => {
         return response.json();
      })
      .catch((error) => {
         console.log("No se pudo acceder a la API");
         console.log(error);
         return []
      });

   return {
      props: {
         DATA,
      },
   };
}
