import React, { Component } from 'react';

class ResponseForm extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        this.setState({input: e.target.value})
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