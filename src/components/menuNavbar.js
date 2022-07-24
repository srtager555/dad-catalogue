import styles from "@sass/filterHome.module.sass";

export function MenuNavbar({
  filterTitle,
  toggleMenu,
  emptyFilter,
  productsList,
  openMenuFilter,
  refArray
}) {
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
