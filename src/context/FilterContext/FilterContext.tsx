import { createContext, useState } from 'react';

import { FilterProviderProps, IFilterContext } from './FilterContext.types';

export const FilterContext = createContext<IFilterContext | null>(null);

export const FilterProvider = ({ children }: FilterProviderProps) => {
	const [inputText, setInputText] = useState('');

	const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (!/^[0-9]*$/.test(e.target.value)) return;
		setInputText(e.target.value);
	};

	return (
		<FilterContext.Provider
			value={{
				inputText,
				changeInputValue,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
