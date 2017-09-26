import { connect } from 'react-redux';
import { addMessage, addCorrespondent, registerUser } from '../reducers/actions';
import Mailbox from '../components/mailbox';

const mapStateToProps = (state, ownProps) => {
    const correspondents = state.correspondents;
    return {
        correspondents
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCorrespondent: (correspondent) => {
            dispatch(addCorrespondent(correspondent));
        },
        addMessage: (messageData) => {
            dispatch(addMessage(messageData.id, messageData.message));
        },
        registerUser: (user) => {
            dispatch(registerUser(user));
        }
    };
};

const CorrespondenceManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(Mailbox);

export default CorrespondenceManager;
