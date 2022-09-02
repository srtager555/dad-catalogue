import { useState, useEffect } from "react";

import style from "@sass/home.module.sass";

export function HomeHeader() {
	const [printMode, setPrintMode] = useState(false);

	useEffect(() => {
		window.addEventListener("beforeprint", () => setPrintMode(true));
		window.addEventListener("afterprint", () => setPrintMode(false));

		return function () {
			window.removeEventListener("beforeprint", () => setPrintMode(true));
			window.removeEventListener("afterprint", () => setPrintMode(false));
		};
	}, []);

	return (
		<div className={style["container"]}>
			{!printMode ? (
				<div className={style["simple__BG"]}></div>
			) : (
				<div className={style["simple__BG"]}>
					<img src="/image/logo_temporal.png" alt="" />
				</div>
			)}
			<div className={style["content"]}>
				<div className={style["Introduction"]}>
					<h1 className={style["Introduction-title"]}>The One</h1>
					<p className={style["Introduction-description"]}>
						Calidad, buenos precios y atencio<span>´</span>n personalizada.
					</p>
				</div>
				<p className={style["catalogue"]}>Catálogo</p>
			</div>
		</div>
	);
}
