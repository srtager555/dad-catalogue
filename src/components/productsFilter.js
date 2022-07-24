import { useState, useRef } from "react";

import { MenuNavbar } from "./menuNavbar";

import styles from "@sass/filterHome.module.sass";

export function ProductsFilter({ productsList }) {
  const [products, setProducts] = useState(productsList);
  const [filterTitle, setFilterTitle] = useState("Filtro");
  const [emptyFilter, setEmptyFilter] = useState(true);
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

  return (
    <div className={styles["filter"]}>
      <MenuNavbar
        filterTitle={filterTitle}
        toggleMenu={toggleMenu}
        emptyFilter={emptyFilter}
        productsList={productsList}
        searchProduct={searchProduct}
        openMenuFilter={openMenuFilter}
        clearFilter={clearFilter}
        refArray={refArray}
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
