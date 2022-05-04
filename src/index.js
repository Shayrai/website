import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildRoutes from './ChildRoutes';
import { getLanguage } from './utils';
import './index.scss';

const locale = navigator.language;

const language = getLanguage(locale);

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  link: from([
    onError(({ graphQLErrors, networkError, forward, operation }) => {
      if (graphQLErrors) {
        logger.error(graphQLErrors)
      }
      if (networkError) {
        logger.warn(networkError)
      }
      forward(operation)
    }),
    new HttpLink({
      uri: 'https://beta.pokeapi.co/graphql/v1beta'
    })
  ]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemon_v2_pokemonspecies: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

const Renderable = () => (
  <React.StrictMode>
    <IntlProvider locale={locale} messages={language}>
      <ApolloProvider client={client}>
        <ChildRoutes />
      </ApolloProvider>
    </IntlProvider>
  </React.StrictMode>
)


ReactDOM.render(<Renderable />, document.getElementById('root'));
