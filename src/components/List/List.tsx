import { ListItem } from 'components/ListItem/ListItem';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { useProductsContext } from 'context/ProductsContext/useProductsContext';

import './List.sass';

export const List = () => {
	const { isLoading, apiErrorText, apiResponse } = useProductsContext();
	return (
		<ul className='list'>
			{apiResponse &&
				apiResponse.data.map((product, index) => (
					<ListItem
						key={product.id}
						id={product.id}
						index={index}
						name={product.name}
						color={product.color}
						year={product.year}
					/>
				))}
			{isLoading && <Loader />}
			{apiErrorText && <Error text={apiErrorText} />}
		</ul>
	);
};
