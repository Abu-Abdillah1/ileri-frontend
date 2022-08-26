import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';
import { QueryClientProvider,  } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import client from './react-query-client';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ReactQueryDevtools/>
			<ChakraProvider>
				<HashRouter>
					<App />
				</HashRouter>
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
