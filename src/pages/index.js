export default function Home({ DATA }) {
   console.log(DATA);

   return DATA.map(element => <p>{element.name}</p>);
}

export async function getStaticProps() {
   const API = process.env.API;

   const DATA = await fetch(API).then((response) => {
      return response.json();
   });

   return {
      props: {
         DATA,
      },
   };
}
