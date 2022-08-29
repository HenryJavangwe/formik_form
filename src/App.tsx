import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormikForm from './components/Form';
import {useFetch} from './services/useFetch';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-body">
        <FormikForm/>
      </main>
    </div>
  );
}

export default App;
