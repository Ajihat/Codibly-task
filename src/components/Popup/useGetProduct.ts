import { useState, useEffect } from 'react';
import axios from 'axios';

import { usePopupConext } from 'context/PopupContext/usePopupContext';

import { ProductsState } from './useGetProduct.types';

export const useGetProduct = () => {
	const [productState, setProductState] = useState<ProductsState>({
		isLoading: false,
		apiErrorText: '',
		apiResponse: null,
	});
	const { productId } = usePopupConext();

	useEffect(() => {
		if (!productId) return;
		const getData = async () => {
			setProductState({
				isLoading: true,
				apiErrorText: '',
				apiResponse: null,
			});
			try {
				const response = await axios({
					method: 'GET',
					url: `https://reqres.in/api/products/?id=${productId}`,
				});
				if (response.status === 200) {
					setProductState({
						isLoading: false,
						apiErrorText: '',
						apiResponse: response.data,
					});
				}
			} catch {
				//tutaj error
			}
		};
		getData();
	}, [productId]);
	return productState;
};
