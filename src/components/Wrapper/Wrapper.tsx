import { WrapperProps } from './Wrapper.types';

import './Wrapper.sass';

export const Wrapper = ({ children }: WrapperProps) => {
	return <div className='wrapper'>{children}</div>;
};
