import { useState, useEffect } from 'react';
import axios from 'axios';

import { ProductsState } from './useGetProducts.types';

export const useGetProducts = (productsPage: number) => {
	const [productsState, setProductsState] = useState<ProductsState>({
		isLoading: false,
		apiErrorText: '',
		apiResponse: null,
	});

	useEffect(() => {
		const getData = async () => {
			setProductsState({
				isLoading: true,
				apiErrorText: '',
				apiResponse: null,
			});
			try {
				const response = await axios({
					method: 'GET',
					url: `https://reqres.in/api/products/?per_page=5&page=${productsPage}`,
				});
				if (response.status === 200) {
					setProductsState({
						isLoading: false,
						apiErrorText: '',
						apiResponse: response.data,
					});
				}
			} catch (e) {
				if (axios.isAxiosError(e)) {
					setProductsState({
						isLoading: false,
						apiErrorText: `Error: ${e.response?.status}`,
						apiResponse: null,
					});
				} else {
					setProductsState({
						isLoading: false,
						apiErrorText: 'We are sorry, something went wrong',
						apiResponse: null,
					});
				}
			}
		};
		getData();
	}, [productsPage]);
	return productsState;
};
