import { createContext, useState } from 'react';

import { PopupProviderProps, IPopupContext } from './PopupContext.types';

export const PopupConext = createContext<null | IPopupContext>(null);

export const PopupProvider = ({ children }: PopupProviderProps) => {
	const [productId, setProductId] = useState<null | number>(null);

	return (
		<PopupConext.Provider
			value={{
				productId,
				setProductId,
			}}
		>
			{children}
		</PopupConext.Provider>
	);
};
