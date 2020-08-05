import React from 'react';
import './App.css';
import Home from './views/home'
import Review from './views/review'
import Report from './views/report'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
