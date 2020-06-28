import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import client from './config/apollo';
import { ApolloProvider } from '@apollo/client';

const upTaskApp = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => upTaskApp);
