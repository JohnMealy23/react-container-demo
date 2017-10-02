import React, { Component } from 'react';

class ResponseForm extends Component {
    render() {
        return (
            <div>
                <input type="text" onMouseUp={(e) => { this.setState({input: e.value})}}/>
                <button onClick={this.props.addResponse}></button>
            </div>
        );
    }
}

export default ResponseForm;