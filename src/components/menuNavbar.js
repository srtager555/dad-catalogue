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
	const [showMenu, setShowMenu] = useState("");

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
		window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" });
		setEmptyFilter(true);
		setTimeout(() => setFilterTitle("Filtro"), 1000);
		setProducts(productsList);

		setTimeout(() => toggleMenu(), 100);
	}

	function searchProduct(product) {
		setEmptyFilter(false);
		setFilterTitle(product);
		setProducts(productsList.filter((element) => element.marca === product));
		setTimeout(
			() =>
				window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" }),
			100
		);

		setTimeout(() => toggleMenu(), 100);
	}

	function toggleMenu() {
		if (window.scrollY * 1.05 >= window.innerHeight) {
			setOpenMenuFilter(!openMenuFilter);
		}
	}

	function handleScroll() {
		if (openMenuFilter === true) toggleMenu();

		if (window.innerHeight * 0.95 <= window.scrollY) setShowMenu(true);
		else setShowMenu(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<>
			<div
				className={`${styles["filter--navbar"]}${
					showMenu ? ` ${styles["show--nav"]}` : ""
				}`}
			>
				<div
					className={`${styles["filter__container--title"]}${
						!emptyFilter ? ` ${styles["filter--added"]}` : ""
					}`}
				>
					<h1>The One</h1>
					<span className={styles["filter--name"]}>{filterTitle}</span>
				</div>

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
				<h3 className={styles["filter--title"]}>
					Selecciona una marca a filtrar
				</h3>
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
