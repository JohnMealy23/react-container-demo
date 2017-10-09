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
            <div>
                <input type="text" onKeyUp={this.updateState}/>
                <button onClick={() => { this.props.addResponse(this.state.input) }}></button>
            </div>
        );
    }
}

export default ResponseForm;