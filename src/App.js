import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Gallery from './components/pages/Gallery';
import Videos from './components/pages/Videos';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ProgressBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/videos' component={Videos} />
          <Route path='/contactus' component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
