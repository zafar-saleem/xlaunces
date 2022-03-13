import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { HomePage } from 'pages/Home/';

const client = new ApolloClient({
	uri: process.env.REACT_APP_URI,
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div>
			<ApolloProvider client={client}>
				<HomePage />
			</ApolloProvider>
		</div>
	);
}

export default App;
