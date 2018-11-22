import 'dotenv/config';
import 'cross-fetch/polyfill'; // imported after install 'npm i cross-fetch --save'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.GITHUB_PERSONAL_ACCESS_TOKEN
        }`,
      },
    });
  },
});

console.log(client);

console.log(process.env.SOME_ENV_VARIABLE);
