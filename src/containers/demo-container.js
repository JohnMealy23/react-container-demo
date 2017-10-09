import { connect } from 'react-redux';
import { addResponse, removeResponse } from '../actions';
import App from '../components/App.js';

const mapStateToProps = (state = [], ownProps) => {
    return {
        responses: state
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addResponse: (correspondent) => {
            dispatch(addResponse(correspondent));
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
