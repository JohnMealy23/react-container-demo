import { connect } from 'react-redux';
import { addResponse, removeResponse } from '../actions';
import App from '../components/App.js';

/**
 * mapStateToProps
 */
const mapStateToProps = (state = []) => {
    return {
        responses: state.response
    };
};

const mapDispatchToProps = {
    addResponse,
    removeResponse
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
