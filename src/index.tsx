import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ProductsProvider } from 'context/ProductsContext/ProductsContext';
import { PopupProvider } from 'context/PopupContext/PopupContext';
import { FilterProvider } from 'context/FilterContext/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ProductsProvider>
			<PopupProvider>
				<FilterProvider>
					<App />
				</FilterProvider>
			</PopupProvider>
		</ProductsProvider>
	</React.StrictMode>
);
