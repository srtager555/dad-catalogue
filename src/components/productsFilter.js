import { useState, useEffect } from "react";
import Image from "next/image"

export function ProductsFilter({ productsList }) {
   const [products, setProducts] = useState(productsList);
   const [filterTitle, setFilterTitle] = useState("Filtro");
   const [emptyFilter, setEmptyFilter] = useState(true);

   function MenuFilter({ filterTitle }) {
      return (
         <>
            <div>
               <span>{filterTitle}</span>

               <div></div>
            </div>
            <div>
               {productsList.map((element, index) => {
                  if (element.marca === "") return;

                  return (
                     <button
                        key={`${element} - ${index}`}
                        onClick={() => searchProduct(element.marca)}
                     >
                        {element.marca}
                     </button>
                  );
               })}
               {!emptyFilter ? <button onClick={clearFilter}>Limpiar filtro</button> : <></>}
            </div>
         </>
      );
   }

   function clearFilter() {
      setEmptyFilter(true);
      setFilterTitle("Filtro")
      setProducts(productsList);
   }

   function searchProduct(product) {
      setEmptyFilter(false);
      setFilterTitle(product);
      setProducts(productsList.filter((element) => element.marca === product));
   }

   return (
      <>
         <MenuFilter filterTitle={filterTitle} />
         <div>
            {products.map((element) => {
               return (
                  <>
                     {emptyFilter ? <h2>{element.marca}</h2> : <></>}
                     {element.products.map((prd, index) => {
                        return (
                           <>
                              <div key={`${element} - ${index}`}>
                                 <p>
                                    <span>{prd.name}</span>{" "}
                                    <span>{prd.peso}</span>
                                 </p>
                                 <Image src={prd.img} alt={prd.name} width="64" height="64" />
                              </div>
                           </>
                        );
                     })}
                  </>
               );
            })}
         </div>
      </>
   );
}
