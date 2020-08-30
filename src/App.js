import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import TwitterHunter from './components/TwitterHunter/TwitterHunter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/twitter" component={TwitterHunter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
