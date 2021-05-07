import logo from './logo.svg';
import React from 'react';
import {
  Button
} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>
            Rosie's website
          </h1>
          <Button color="primary">primary</Button>
      </header>
    </div>
  );
}

export default App;
