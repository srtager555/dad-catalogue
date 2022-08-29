import { useState } from "react";

import { MenuNavbar } from "../../menuNavbar";

import styles from "@sass/filterHome.module.sass";

export function FilterWeb({ productsList }) {
	const [products, setProducts] = useState(productsList);
	const [emptyFilter, setEmptyFilter] = useState(true);

	return (
		<div className={styles["filter"]}>
			<MenuNavbar
				setEmptyFilter={setEmptyFilter}
				emptyFilter={emptyFilter}
				productsList={productsList}
				setProducts={setProducts}
			/>
			<div className={styles["filter__content"]}>
				{products.map((element, index) => {
					return (
						<div
							key={`${element.marca} - ${index}`}
							className={styles["filter__contet--container"]}
						>
							{emptyFilter ? <h2>{element.marca}</h2> : <></>}
							{element.products.map((prd, index) => {
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
