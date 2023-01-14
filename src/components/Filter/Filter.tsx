import { useFilterContext } from 'context/FilterContext/useFilterContext';

import './Filter.sass';

export const Filter = () => {
	const { changeInputValue, inputText } = useFilterContext();

	return (
		<div className='filter'>
			<h2 className='filter__text'>Filter by ID:</h2>
			<input value={inputText} onChange={changeInputValue} type='text' className='filter__input' />
		</div>
	);
};
