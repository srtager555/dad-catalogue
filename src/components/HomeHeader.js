import style from "@sass/home.module.sass";

export function HomeHeader() {
   return (
      <div className={style["container__Home"]}>
         <div className={style["container__Home--simple__BG"]}></div>
         <div className={style["container__Home_content"]}>
            <div className={style["container__Home--Introduction"]}>
               <h1 className={style["container__Home--Introduction-title"]}>
                  The One
               </h1>
               <p
                  className={style["container__Home--Introduction-description"]}
               >
                  Carnes y mas...
               </p>
            </div>
            <p className={style["container__Home--catalogue"]}>Catálogo</p>
         </div>
      </div>
   );
}
