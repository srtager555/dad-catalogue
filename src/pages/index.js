import Head from "next/head";

import { HomeHeader } from "@components/HomeHeader";
import { ProductsFilter } from "@components/productsFilter";
import { BtnToTop } from "@components/toTop";

import styles from "@sass/index.module.sass";

export default function Home({ DATA }) {
	return (
		<div className={styles["content-container"]}>
			<Head>
				<title>🍗 Pollo The One 🍗 | Catálogo</title>
			</Head>
			<HomeHeader />
			<ProductsFilter productsList={DATA} />
			<BtnToTop />
		</div>
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
			return [];
		});

	return {
		props: {
			DATA,
		},
	};
}
