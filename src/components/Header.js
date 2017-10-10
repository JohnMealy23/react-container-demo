import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }
    updateState(e) {
        // Not interested in keeping every keystroke in the redux store,
        // so we'll keep it in the React state, until the user sees fit
        // to submit it.
        this.setState({input: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <input type="text" onKeyUp={this.updateState}/>
                &nbsp;
                <button onClick={() => { this.props.addResponse(this.state.input) }}>Submit</button>
            </div>
        );
    }
}

export default Header;