import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                {this.props.}
                <button onClick={ this.props.removeResponse }>Remove</button>
            </div>
        );
    }
}

export default App;