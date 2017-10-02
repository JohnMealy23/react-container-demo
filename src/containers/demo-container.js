import { connect } from 'react-redux';
import { addResponse, removeResonse, getResonses } from '../reducers/actions';
import App from '../App.js';

const mapStateToProps = (state, ownProps) => {
    return {
        responses: state
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addResponse: (correspondent) => {
            dispatch(addResponse(correspondent));
        },
        removeResonse: (id) => {
            dispatch(removeResonse(id));
        },
        getResonses: () => {
            dispatch(getResonses());
        }
    };
};

const CorrespondenceManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default CorrespondenceManager;
