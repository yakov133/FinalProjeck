
import './App.css';
import React from 'react';
import Navbar from "./Componentes/Navbar/Navbar";
import Home from "./Componentes/Home/HomePage";
import About from "./Componentes/About/About";
import Registration from "./Componentes/Registration/Registration";
import Community from "./Componentes/Community/community"
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router >
      <div className = "App">
        <Navbar />
        <Switch>
          <Route path = "/" exact component={Home} />
          <Route path= "/about" component={About} />
          <Route path= "/registration" component={Registration} />
          <Route path= "/community" component={Community} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
