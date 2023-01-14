export interface FilterProviderProps {
	children: React.ReactNode;
}

export interface IFilterContext {
	inputText: string;
	changeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
