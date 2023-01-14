import { useContext } from 'react';
import { FilterContext } from './FilterContext';

export const useFilterContext = () => {
	const ctx = useContext(FilterContext);
	if (!ctx) throw new Error('useFilterContext  can only be used inside ContextProvider');
	return ctx;
};
