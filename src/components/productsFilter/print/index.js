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
		let a = newStructureArray.map((prd, index) => {
			let quesoConQueso = newStructureArray.slice(index, index + 2);

			newStructureArray.splice(index + 1, 1);

			return quesoConQueso;
		});

		setNewProductsArray(a);

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
							<div className={styles["brand__name"]}>
								<h2>The One</h2>
								<span className={styles["brands__name--line"]}></span>
							</div>
							<span className={styles["border__line--down"]}></span>
							{element.map((prd, index) => {
								return (
									<div
										className={styles["filter__content--element"]}
										key={`${prd.name} --- ${index}`}
									>
										<h3>
											<span className={styles["filter__content-product_title"]}>
												{prd.name}
												{prd.peso != "" ? "/ " : ""}
											</span>

											<span>{prd.peso}</span>
										</h3>
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
