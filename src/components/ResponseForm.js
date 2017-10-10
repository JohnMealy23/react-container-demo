import React, { PureComponent } from 'react';

class ResponseForm extends PureComponent {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        // Not interested in keeping every keystroke in the redux store,
        // so we'll keep it in the React state, until the user sees fit
        // to submit it.
        this.setState({input: e.target.value});
    }
    render() {
        return (
            <div style={{
                margin: '10px'
            }}>
                <input type="text" onKeyUp={this.updateState}/>
                &nbsp;
                <button onClick={() => { this.props.addResponse(this.state.input) }}>Submit</button>
            </div>
        );
    }
}

export default ResponseForm;