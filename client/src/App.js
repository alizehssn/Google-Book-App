import React, { Component } from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import "./App.css";
import SavedBooks from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Navbar"
import Homepage from "./pages/Homepage";

function App(){
  return (
  <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/" render={() => <Homepage/>} />
      <Route exact path="/saved" render={() => <SavedBooks/>} />
      <Route exact path="/search" render={() => <Search/>} />
      </Switch>
      
    </div>
  </Router>
);}




export default App;



