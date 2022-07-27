import { useState, useEffect } from "react";

import styles from "@sass/BtnToTop.module.sass";

export function BtnToTop() {
	const [show, setShow] = useState(false);

	function handleClick() {
		window.scroll({ top: window.innerHeight, left: 0, behavior: "smooth" });
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
