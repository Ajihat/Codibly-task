import ReactDom from 'react-dom';

import { GrFormClose } from 'react-icons/gr';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { usePopupConext } from 'context/PopupContext/usePopupContext';
import { useGetProduct } from './useGetProduct';

import './Popup.sass';

export const Popup = () => {
	const { setProductId, productId } = usePopupConext();
	const { isLoading, apiErrorText, apiResponse: product } = useGetProduct(productId);
	return ReactDom.createPortal(
		<div className='popup'>
			<div onClick={() => setProductId(null)} className='popup__layer'></div>
			<div className='popup__content'>
				<GrFormClose onClick={() => setProductId(null)} className='popup__close' />
				<div className='popup__inner'>
					{product && (
						<>
							<p className='popup__text'>ID: {product.data.id}</p>
							<p className='popup__text'>Color: {product.data.color}</p>
							<p className='popup__text'>Pantone value: {product.data.pantone_value}</p>
							<p className='popup__text'>Year: {product.data.year}</p>
						</>
					)}
				</div>
				<div
					style={{
						backgroundColor: product?.data.color,
					}}
					className='popup__inner'
				>
					<p className='popup__text'>{product?.data.name}</p>
				</div>
				{isLoading && <Loader />}
				{apiErrorText && <Error text={apiErrorText} />}
			</div>
		</div>,
		document.getElementById('portal')!
	);
};
