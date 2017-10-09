import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';


import response from './reducers/demo-reducer';
import AppContainer from './containers/demo-container';
import './index.css';

const store = createStore(response);

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
