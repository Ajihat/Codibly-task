import { ListItemProps } from './ListItem.types';

import './ListItem.sass';

export const ListItem = ({ id, name, year, color }: ListItemProps) => {
	return (
		<li
			className='listitem'
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
