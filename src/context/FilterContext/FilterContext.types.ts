export interface FilterProviderProps {
	children: React.ReactNode;
}

export interface IFilterContext {
	inputText: string;
	changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
	apiErrorText: string;
	apiResponse: null | {
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
}
