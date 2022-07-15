import { useState, useRef } from "react";
import Image from "next/image";

import styles from "@sass/filterHome.module.sass";

export function ProductsFilter({ productsList }) {
   const [products, setProducts] = useState(productsList);
   const [filterTitle, setFilterTitle] = useState("Filtro");
   const [emptyFilter, setEmptyFilter] = useState(true);
   const [openMenuFilter, setOpenMenuFilter] = useState("");

   const norteno = useRef(null)
   const sanAntonio = useRef(null)
   const delicia = useRef(null)
   const elPorteno = useRef(null)
   const franks = useRef(null)
   const polloRey = useRef(null)
   const toledo = useRef(null)

   const refArray = [norteno, sanAntonio, delicia, elPorteno, franks, polloRey, toledo]

   function MenuFilter({ filterTitle }) {
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
                  if (element.marca === "") return;

                  return (
                     <button
                        className={styles["filter--btn"]}
                        ref={refArray[index]}
                        key={`${element} - ${index}`}
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

   function clearFilter() {
      setEmptyFilter(true);
      setFilterTitle("Filtro");
      setProducts(productsList);
   }

   function searchProduct(product) {
      setEmptyFilter(false);
      setFilterTitle(product);
      setProducts(productsList.filter((element) => element.marca === product));

      setTimeout(() => toggleMenu(), 100);
   }

   function toggleMenu() {
      setOpenMenuFilter(!openMenuFilter);
   }

   return (
      <div className={styles["filter"]}>
         <MenuFilter filterTitle={filterTitle} />
         <div className={styles["filter__content"]}>
            {products.map((element) => {
               return (
                  <>
                     {emptyFilter ? <h2>{element.marca}</h2> : <></>}
                     {element.products.map((prd, index) => {
                        return (
                           <>
                              <div
                                 className={styles["filter__content--element"]}
                                 key={`${element} - ${index}`}
                              >
                                 <p>
                                    <span>{prd.name}</span>{" "}
                                    <span>{prd.peso}</span>
                                 </p>
                                 <Image
                                    src={prd.img}
                                    alt={prd.name}
                                    width="64"
                                    height="64"
                                 />
                              </div>
                           </>
                        );
                     })}
                  </>
               );
            })}
         </div>
      </div>
   );
}
