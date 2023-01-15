import { createContext, useState } from 'react';

import { useGetProducts } from './useGetProducts';

import { ProductsProviderProps, IProductsContext } from './ProductsContext.types';

export const ProductsContext = createContext<null | IProductsContext>(null);

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
	const [productsPage, setProductsPage] = useState(1);
	const { isLoading, apiErrorText, apiResponse } = useGetProducts(productsPage);
	return (
		<ProductsContext.Provider
			value={{
				isLoading,
				apiErrorText,
				apiResponse,
				productsPage,
				setProductsPage,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
