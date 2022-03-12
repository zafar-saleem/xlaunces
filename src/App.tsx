import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Testing } from './pages/TestingPage';

const client = new ApolloClient({
	uri: 'https://api.spacex.land/graphql/',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<div>
			<ApolloProvider client={client}>
				<Testing />
			</ApolloProvider>
		</div>
	);
}

export default App;
