import ReactDom from 'react-dom';

import { GrFormClose } from 'react-icons/gr';
import { Loader } from 'components/Loader/Loader';

import { usePopupConext } from 'context/PopupContext/usePopupContext';
import { useGetProduct } from './useGetProduct';

import './Popup.sass';

export const Popup = () => {
	const { setProductId } = usePopupConext();
	const { isLoading, apiErrorText, apiResponse } = useGetProduct();
	console.log(apiResponse);
	return ReactDom.createPortal(
		<div className='popup'>
			<div onClick={() => setProductId(null)} className='popup__layer'></div>
			<div className='popup__content'>
				<GrFormClose onClick={() => setProductId(null)} className='popup__close' />
				<div className='popup__inner'>
					<p className='popup__text'>ID: {apiResponse?.data.id}</p>
					<p className='popup__text'>Color: {apiResponse?.data.color}</p>
					<p className='popup__text'>Pantone value: {apiResponse?.data.pantone_value}</p>
					<p className='popup__text'>Year: {apiResponse?.data.year}</p>
				</div>
				<div
					style={{
						backgroundColor: apiResponse?.data.color,
					}}
					className='popup__inner'
				>
					<p className='popup__text'>{apiResponse?.data.name}</p>
				</div>
				{isLoading && <Loader />}
			</div>
		</div>,
		document.getElementById('portal')!
	);
};
