import Head from "next/head";
import { useState, useEffect } from "react";

import { HomeHeader } from "@components/HomeHeader";
import { ProductsFilter } from "@components/productsFilter";
import { BtnToTop } from "@components/toTop";

import styles from "@sass/index.module.sass";

export default function Home({ DATA }) {
	const [printMode, setPrintMode] = useState(false);

	useEffect(() => {
		window.addEventListener("beforeprint", () => {
			setPrintMode(true);
		});
		window.addEventListener("afterprint", () => {
			setPrintMode(false);
		});

		return () => {
			window.removeEventListener("beforeprint", () => {
				setPrintMode(true);
			});
			window.removeEventListener("afterprint", () => {
				setPrintMode(false);
			});
		};
	}, []);

	return (
		<div className={styles["content-container"]}>
			<Head>
				<title>🍗 Pollo The One 🍗 | Catálogo</title>
			</Head>

			{!printMode ? <HomeHeader /> : null}
			<ProductsFilter productsList={DATA} printMode={printMode} />
			{!printMode ? <BtnToTop /> : null}
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
