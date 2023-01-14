import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { ProductsState } from './useGetProduct.types';

export const useGetProduct = (productId: number | null) => {
	const [productState, setProductState] = useState<ProductsState>({
		isLoading: false,
		apiErrorText: '',
		apiResponse: null,
	});
	const abortControler = useRef<AbortController>();

	useEffect(() => {
		if (!productId) return;
		const getData = async () => {
			abortControler.current = new AbortController();
			setProductState({
				isLoading: true,
				apiErrorText: '',
				apiResponse: null,
			});
			try {
				const response = await axios({
					method: 'GET',
					url: `https://reqres.in/api/products/?id=${productId}`,
					signal: abortControler.current.signal,
				});
				if (response.status === 200) {
					setProductState({
						isLoading: false,
						apiErrorText: '',
						apiResponse: response.data,
					});
				}
			} catch (e) {
				if (axios.isAxiosError(e)) {
					setProductState({
						isLoading: false,
						apiErrorText: `Error: ${e.response?.status}`,
						apiResponse: null,
					});
				} else {
					setProductState({
						isLoading: false,
						apiErrorText: 'We are sorry, something went wrong',
						apiResponse: null,
					});
				}
			}
		};
		getData();
		return () => abortControler.current?.abort();
	}, [productId]);
	return productState;
};
