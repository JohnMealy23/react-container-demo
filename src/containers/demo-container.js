import { connect } from 'react-redux';
import { addResponse, removeResonse, getResonses } from '../reducers/actions';
import App from '../App.js';

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
        getResonses: () => {
            dispatch(getResonses());
        },
        removeResonse: (id) => {
            dispatch(removeResonse(id));
        }
    };
};

const CorrespondenceManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default CorrespondenceManager;
