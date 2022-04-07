import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/Application';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-lg">Playground fun!</h1>
        <Application />
      </header>
    </div>
  );
}

export default App;
