import { ListItem } from 'components/ListItem/ListItem';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { useFilterContext } from 'context/FilterContext/useFilterContext';

import './Result.sass';

export const Result = () => {
	const { isLoading, apiErrorText, apiResponse: product } = useFilterContext();
	return (
		<div className='result'>
			Search result:
			{product && (
				<ListItem
					id={product.data.id}
					name={product.data.name}
					year={product.data.year}
					color={product.data.color}
					index={0}
				/>
			)}
			{isLoading && <Loader />}
			{apiErrorText.length > 0 && <Error text={apiErrorText} />}
		</div>
	);
};
