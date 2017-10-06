import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.data.text}
                <button onClick={ this.props.action }>Remove</button>
            </div>
        );
    }
}

export default App