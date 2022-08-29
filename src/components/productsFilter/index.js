import { FilterWeb } from "./website";
import { FilterPrint } from "./print";

export function ProductsFilter({ productsList, printMode }) {
	return printMode ? (
		<FilterPrint productsList={productsList} />
	) : (
		<FilterWeb productsList={productsList} />
	);
}
