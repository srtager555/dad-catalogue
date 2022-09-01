import { useState, useEffect } from "react";

import styles from "@sass/filterHome.module.sass";

export function FilterPrint({ productsList }) {
	const [newProductsArray, setNewProductsArray] = useState([]);

	const newStructureArray = productsList
		.map((element) => {
			return element.products;
		})
		.flat();

	useEffect(() => {
		const arrayMaker = (param) => {
			return newStructureArray
				.map((el) => {
					if (el.sausage === param) return el;
				})
				.filter((el) => typeof el === "object")
				.map((prd, index, thisArray) => {
					let quesoConQueso = thisArray.slice(index, index + 2);

					thisArray.splice(index + 1, 1);

					return quesoConQueso;
				})
				.filter((el) => Array.isArray(el));
		};

		let notSausageProduct = arrayMaker(false);

		let sausageProducts = arrayMaker(true);

		setNewProductsArray([notSausageProduct, sausageProducts].flat());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles["filter"]}>
			<div className={styles["filter__content"]}>
				{newProductsArray.map((element, index) => {
					return (
						<div
							key={`${element.marca} - ${index}`}
							className={styles["filter__contet--container"]}
						>
							{/* <div className={styles["brand__name"]}>
								<h2>The One</h2>
							</div>
							<div className={styles["bottom__lane--catalogue"]}>
								<p>Catalogo</p>
							</div> */}
							{element.map((prd, index) => {
								let peso;

								if (prd.weight === "c/u") peso = "paquete";
								else if (prd.weight === 0.5) peso = "media libra";
								else if (prd.weight < 2) peso = "libra";
								else peso = `${prd.weight} libras`;

								return (
									<div
										className={styles["filter__content--element"]}
										key={`${prd.name} --- ${index}`}
									>
										<div className={styles["product-information"]}>
											{prd.brand != "" && (
												<span className={styles["product__brand--name"]}>
													{prd.brand}
												</span>
											)}
											<h3>{prd.name}</h3>
											<p>{peso}</p>
										</div>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src={prd.img} alt={prd.name} />
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}
