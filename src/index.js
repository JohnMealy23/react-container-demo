import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';

import response from './reducers/response';
import ResponsesContainer from './containers/app';
import './index.css';

/**
 * We won't get too much into `combineReducers`, except to say that it's a helpful helper that creates a single hashed
 * object, containing all of your reducers in one.
 */
const reducer = combineReducers({
    response
    /* Go ahead and throw your new reducer here */
});
/**
 * Here is where Redux wraps your reducer(s) so that it can manage the state the reducers pass out:
 */
const store = createStore(reducer);

/**
 * Finally, we fire up React, wrapped in Redux's Provider and we pass in the Redux store, so that all levels of the
 * React app can (magically) have access to the state.
 */
ReactDOM.render(
    <Provider store={ store }>
        <ResponsesContainer />
    </Provider>,
    document.getElementById('root')
);

/**
 * Pay no mind to this.  It's just a helper to facilitate development, and not necessary to the functioning of the app:
 */
registerServiceWorker();
