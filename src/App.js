import React from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css'
import routes from './routes';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
