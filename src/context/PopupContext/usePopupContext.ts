import { useContext } from 'react';
import { PopupConext } from './PopupContext';

export const usePopupConext = () => {
	const ctx = useContext(PopupConext);
	if (!ctx) throw new Error('usePopupConext can only be used inside ContextProvider');
	return ctx;
};
