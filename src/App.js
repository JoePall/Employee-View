import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Search from './pages/Search';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <Router>
    <div className="container-fluid">
      <Nav />
      <Route exact path="/" component={Search} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
  );
}

export default App;
