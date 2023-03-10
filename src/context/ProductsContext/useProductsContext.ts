import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';

export const useProductsContext = () => {
	const ctx = useContext(ProductsContext);
	if (!ctx) throw new Error('useCartPopupContext can only be used inside ContextProvider');
	return ctx;
};
