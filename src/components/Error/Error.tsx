import { ErrorProps } from './Error.types';

import './Error.sass';

export const Error = ({ text }: ErrorProps) => {
	return (
		<div className='error'>
			<p className='error__text'>{text}</p>
		</div>
	);
};
