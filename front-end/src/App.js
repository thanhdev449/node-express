import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ManageAdmin } from "./manage-admin/ManageAdmin";

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="thanh" />
        {/* <ManageAdmin /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
