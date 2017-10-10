import React, { Component } from 'react';
import ResponseForm from './ResponseForm';
import Response from './Response';

class App extends Component {
  render() {

    const responses = this.props.responses.map((response, i) => {
       return <Response key={ i } data={ response } removeResponse={ () => { this.props.removeResponse(response.id) }}/>
    });
    return (
      <div className="App" style={{
          padding: '10px'
      }}>
        <div className="App-header">
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
