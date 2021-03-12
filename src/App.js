import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import Content from './components/Content';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ProgressBar />
        <Content />
      </Router>
    </>
  );
}

export default App;
