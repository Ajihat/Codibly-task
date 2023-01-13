import { useProductsContext } from 'context/ProductsContext/useProductsContext';

import './Pagination.sass';

export const Pagination = () => {
	const { apiResponse, productsPage, setProductsPage, isLoading } = useProductsContext();
	console.log(apiResponse);
	return (
		<div className='pagination'>
			<div className='pagination__holder'>
				<button
					onClick={() => setProductsPage((prevPage) => prevPage - 1)}
					className='pagination__btn'
					disabled={apiResponse?.page === 1 || isLoading}
				>
					Prev
				</button>
				<button
					onClick={() => setProductsPage((prevPage) => prevPage + 1)}
					className='pagination__btn'
					disabled={productsPage === apiResponse?.total_pages || isLoading}
				>
					Next
				</button>
			</div>
		</div>
	);
};
