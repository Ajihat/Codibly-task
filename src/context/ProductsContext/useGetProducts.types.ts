import { ApiResponse } from './ProductsContext.types';

type Idle = {
	isLoading: false;
	apiErrorText: '';
	apiResponse: null;
};

type Loading = {
	isLoading: true;
	apiErrorText: '';
	apiResponse: null;
};

type Success = {
	isLoading: false;
	apiErrorText: '';
	apiResponse: ApiResponse;
};

type Error = {
	isLoading: false;
	apiErrorText: string;
	apiResponse: null;
};

export type ProductsState = Idle | Loading | Success | Error;
