import React from 'react';
import logo from './logo.svg';
import './App.css';


import Dashboard from './Dashboard';
import MessagesStore from './MessagesStore'

function App() {
  return (
    <div className="App">
      <MessagesStore>
        <Dashboard />
      </MessagesStore>
    </div>
  );
}

export default App;
