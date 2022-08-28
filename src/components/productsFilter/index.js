import { FilterWeb } from "./website";

export function ProductsFilter({ productsList, printMode }) {
	return printMode ? null : <FilterWeb productsList={productsList} />;
}
