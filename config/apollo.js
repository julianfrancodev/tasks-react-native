import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink(
        { uri: 'http://172.16.238.1:4000/' }
    )
});

export default client;
