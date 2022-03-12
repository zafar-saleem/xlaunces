import ApolloClient from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
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
