import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage'
import Tips from './components/pages/Tips'
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Pro-Tips' exact component={Tips}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
