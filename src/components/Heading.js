import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Students from './Students';
import Degrees from './Degrees';

export default function Heading(){
    return (
        <Router>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"className="navbar-brand">Unversity Of Avengers </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="/students" className="nav-link">Students</Link>
      </li>
      <li className="nav-item">
        <Link to="/degrees" className="nav-link">Degrees</Link>
      </li>
  
    </ul>
    
  </div>
</nav>

      <Switch>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/degrees">
          <Degrees />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    
    </Router>
    )
}