import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';

import response from './reducers/demo-reducer';
import ResponsesContainer from './containers/responses';
import './index.css';

const reducer = combineReducers({
    response
    /* Go ahead and throw your new reducer here */
});
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={ store }>
        <ResponsesContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
