import React from 'react'   
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import confStore from './src/confStore';
import App from './src/App';

const store = confStore();

const rnredux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent('rnredux', () => rnredux);
