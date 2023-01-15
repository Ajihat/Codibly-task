import { useEffect, useRef } from 'react';

import { ListItemProps } from './ListItem.types';

import { usePopupConext } from 'context/PopupContext/usePopupContext';

import './ListItem.sass';

export const ListItem = ({ id, name, year, color, index }: ListItemProps) => {
	const { setProductId } = usePopupConext();
	const listItemRef = useRef<null | HTMLLIElement>(null);
	const delay = (index + 1) * 100;

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			listItemRef.current?.classList.remove('moved');
		}, delay);
		return () => clearTimeout(timeoutId);
	}, [index, delay]);
	return (
		<li
			ref={listItemRef}
			onClick={() => setProductId(id)}
			className='listitem moved'
			style={{
				backgroundColor: color,
			}}
		>
			<p className='listitem__id'>ID: {id}</p>
			<p className='listitem__name'>Name: {name}</p>
			<p className='listitem__year'>Year: {year}</p>
		</li>
	);
};
