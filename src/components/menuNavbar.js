import { useState, useRef, useEffect } from "react";

import styles from "@sass/filterHome.module.sass";

export function MenuNavbar({
	emptyFilter,
	setEmptyFilter,
	productsList,
	setProducts,
}) {
	const [filterTitle, setFilterTitle] = useState("Filtro");
	const [openMenuFilter, setOpenMenuFilter] = useState("");

	const norteno = useRef(null);
	const sanAntonio = useRef(null);
	const delicia = useRef(null);
	const elPorteno = useRef(null);
	const franks = useRef(null);
	const polloRey = useRef(null);
	const toledo = useRef(null);

	const refArray = [
		norteno,
		sanAntonio,
		delicia,
		elPorteno,
		franks,
		polloRey,
		toledo,
	];

	function clearFilter() {
		window.scrollTo(0, window.innerHeight);
		setEmptyFilter(true);
		setFilterTitle("Filtro");
		setProducts(productsList);

		setTimeout(() => toggleMenu(), 100);
	}

	function searchProduct(product) {
		setEmptyFilter(false);
		setFilterTitle(product);
		setProducts(productsList.filter((element) => element.marca === product));
		window.scrollTo(0, window.innerHeight);

		setTimeout(() => toggleMenu(), 100);
	}

	function toggleMenu() {
		setOpenMenuFilter(!openMenuFilter);
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.screenY < window.innerHeight && openMenuFilter === true)
				toggleMenu();
		});

		return () =>
			window.removeEventListener("scroll", () => {
				if (window.screenY < window.innerHeight && openMenuFilter === true)
					toggleMenu();
			});
	});

	return (
		<>
			<div className={styles["filter--navbar"]}>
				<span className={styles["filter--title"]}>{filterTitle}</span>

				<button
					onClick={toggleMenu}
					className={`${styles["filter--buttonMenu"]} ${
						openMenuFilter ? styles["open"] : ""
					}`}
				></button>
			</div>
			<div
				className={`${styles["filter--menu"]} ${
					openMenuFilter ? styles["open"] : ""
				}`}
			>
				{productsList.map((element, index) => {
					return (
						<button
							key={`${element.marca} -- ${index}`}
							className={styles["filter--btn"]}
							ref={refArray[index]}
							onClick={() => searchProduct(element.marca)}
						>
							{element.marca}
						</button>
					);
				})}
				{!emptyFilter ? (
					<button
						className={`${styles["filter--btn"]} ${styles["clear-filter"]}`}
						onClick={clearFilter}
					>
						Limpiar filtro
					</button>
				) : (
					<></>
				)}
			</div>
		</>
	);
}
