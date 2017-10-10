import React, { Component } from 'react';

class Response extends Component {
    render() {
        return (
            <div>
                {this.props.data.text}
                &nbsp;
                <button onClick={ this.props.removeResponse }>Remove</button>
            </div>
        );
    }
}

export default Response;