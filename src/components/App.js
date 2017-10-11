import React, { Component } from 'react';
import ResponseForm from './ResponseForm';
import Response from './Response';
/**
 * Why don't you add an import for the Header container here?
 */

class App extends Component {
  render() {

    const responses = this.props.responses.map((response, i) => {
       return <Response key={ i } data={ response } removeResponse={ () => { this.props.removeResponse(response.id) }}/>
    });
    /**
     * This would be an excellent place to add the <Header/> container.
     */
    return (
      <div className="App" style={{
          padding: '10px'
      }}>
        <div>
            <ResponseForm addResponse={ this.props.addResponse }></ResponseForm>
            { responses }
        </div>
      </div>
    );
  }
}

export default App;
