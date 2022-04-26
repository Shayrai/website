import React from 'react';
import ReactDOM from 'react-dom';
import ChildRoutes from './ChildRoutes';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

const Renderable = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChildRoutes />
    </ApolloProvider>
  </React.StrictMode>
)


ReactDOM.render(<Renderable />, document.getElementById('root'));
