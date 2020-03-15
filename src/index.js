import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
            <h1>Hello, World!</h1>
            <div>We are alive!</div>
          </div> 
}

ReactDOM.render(<App/>, document.querySelector('#root'))
