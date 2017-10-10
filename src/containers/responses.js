import { connect } from 'react-redux';
import { addResponse, removeResponse } from '../actions';
import App from '../components/App.js';

const mapStateToProps = (state = [], ownProps) => {
    return {
        responses: state.response
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addResponse: (text) => {
            dispatch(addResponse(text));
        },
        removeResponse: (id) => {
            dispatch(removeResponse(id));
        }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
