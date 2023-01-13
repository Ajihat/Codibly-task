export interface PopupProviderProps {
	children: React.ReactNode;
}

export interface IPopupContext {
	productId: number | null;
	setProductId: React.Dispatch<React.SetStateAction<number | null>>;
}
