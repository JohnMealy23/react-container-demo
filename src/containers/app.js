// The `connect` function is the thing that wraps your component, wiring it to Redux
import { connect } from 'react-redux';

// Here we'll pull the actions that pertain to this component's portion of the state:
import { addResponse, removeResponse } from '../actions';

// We'll also need to pull in the React component module, so we can wrap it:
import App from '../components/App.js';

/**
 * mapStateToProps is a function that returns the portion or portions of the state your React component will have access to:
 */
const mapStateToProps = (state = []) => {
    return {
        responses: state.response
    };
};

/**
 * mapDispatchToProps is an object that the actions your React component will have access to dispatch:
 */
const mapDispatchToProps = {
    addResponse,
    removeResponse
};

/**
 * Here's where the magic happens.  The `connect` function takes your component and the state interfaces,
 * and packages 'em up for seamless communication between Redux and your React component:
 */
const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
