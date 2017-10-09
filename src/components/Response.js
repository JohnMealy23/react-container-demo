import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.data.text}
                &nbsp;
                <button onClick={ this.props.action }>Remove</button>
            </div>
        );
    }
}

export default App