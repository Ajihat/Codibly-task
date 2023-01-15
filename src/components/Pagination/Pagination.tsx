import { useProductsContext } from 'context/ProductsContext/useProductsContext';
import { useFilterContext } from 'context/FilterContext/useFilterContext';

import './Pagination.sass';

export const Pagination = () => {
	const { apiResponse, productsPage, setProductsPage, isLoading } = useProductsContext();
	const { inputText } = useFilterContext();
	return (
		<div className='pagination'>
			<div className='pagination__holder'>
				<button
					onClick={() => setProductsPage((prevPage) => prevPage - 1)}
					className='pagination__btn'
					disabled={apiResponse?.page === 1 || isLoading || inputText.length > 0}
				>
					Prev
				</button>
				<button
					onClick={() => setProductsPage((prevPage) => prevPage + 1)}
					className='pagination__btn'
					disabled={productsPage === apiResponse?.total_pages || isLoading || inputText.length > 0}
				>
					Next
				</button>
			</div>
			<div className='pagination__holder'>
				{apiResponse && !inputText && (
					<p>
						Page {apiResponse.page} of {apiResponse.total_pages}
					</p>
				)}
			</div>
		</div>
	);
};
