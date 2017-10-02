import React, { Component } from 'react';
import logo from '../logo.svg';
import ResponseForm from './ResponseForm';
import Response from './Response';

class App extends Component {
  render() {

    const responses = this.props.responses.map((response) => {
       return <Response data={ response } removeResponse={ () => { this.props.removeResponse(response.id) }}/>
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
            <ResponseForm addResponse={ this.props.addResponse }></ResponseForm>
            { responses }
        </div>
      </div>
    );
  }
}

export default App;
