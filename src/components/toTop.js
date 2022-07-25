import { useState, useEffect } from "react";

import styles from "@sass/btnToTop.module.sass";

export function BtnToTop() {
	const [show, setShow] = useState(false);

	function handleClick() {
		window.scroll({ top: 0, left: window.innerHeight, behavior: "smooth" });
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > window.innerHeight * 2) setShow(true);
			else setShow(false);
		});

		return () =>
			window.removeEventListener("scroll", () => {
				if (window.scrollY > window.innerHeight * 2) setShow(true);
				else setShow(false);
			});
	}, []);

	return (
		<button
			className={`${styles.btn__container}${show ? ` ${styles.show}` : ""}`}
			onClick={handleClick}
		>
			^
		</button>
	);
}
