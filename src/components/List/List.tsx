import { ListItem } from 'components/ListItem/ListItem';
import { Loader } from 'components/Loader/Loader';

import { useProductsContext } from 'context/ProductsContext/useProductsContext';

import './List.sass';

export const List = () => {
	const { isLoading, apiErrorText, apiResponse } = useProductsContext();
	console.log(apiResponse);
	return (
		<ul className='list'>
			{apiResponse &&
				apiResponse.data.map((product) => (
					<ListItem
						key={product.id}
						id={product.id}
						name={product.name}
						color={product.color}
						year={product.year}
					/>
				))}
			{isLoading && <Loader />}
		</ul>
	);
};
