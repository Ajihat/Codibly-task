import { Wrapper } from 'components/Wrapper/Wrapper';
import { Filter } from 'components/Filter/Filter';
import { List } from 'components/List/List';
import { Pagination } from 'components/Pagination/Pagination';
import { Popup } from 'components/Popup/Popup';
import { Result } from 'components/Result/Result';

import { usePopupConext } from 'context/PopupContext/usePopupContext';
import { useFilterContext } from 'context/FilterContext/useFilterContext';

import './App.css';

function App() {
	const { productId } = usePopupConext();
	const { inputText } = useFilterContext();
	return (
		<Wrapper>
			<Filter />
			{!inputText && <List />}
			{inputText && <Result />}
			<Pagination />
			{productId && <Popup />}
		</Wrapper>
	);
}

export default App;
