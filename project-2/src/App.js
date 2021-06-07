import './App.css';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Calculator from './components/pages/Calculator';
import Tips from './components/pages/Tips';
import Footer from './components/footer';
import Comparison from './components/pages/Comparison';

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
        return firebase.auth().onAuthStateChanged((firebaseUser) => {
            if(firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });
  }, []);

  return (
    <Router>
      <Navbar user={user}/>
      <Switch>
        <Route exact path='/'> <Home user={user}/> </Route>
        <Route exact path='/Login'> <LoginPage user={user}/> </Route>
        <Route path='/Calculator' exact component={Calculator} />
        <Route path='/Comparison' exact component={Comparison}/>
        <Route path='/Pro-Tips' exact component={Tips}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
