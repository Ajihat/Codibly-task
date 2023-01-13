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
	apiResponse: {
		data: {
			id: number;
			name: string;
			year: number;
			color: string;
			pantone_value: string;
		};
		support: {
			url: string;
			text: string;
		};
	};
};

type Error = {
	isLoading: false;
	apiErrorText: string;
	apiResponse: null;
};

export type ProductsState = Idle | Loading | Success | Error;
