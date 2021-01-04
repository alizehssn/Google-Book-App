import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SavedBooks from "./pages/Saved";
import Search from "./pages/Search";
import API from "./utils/API";

function App(){return (
  <Router>
    <div>
      <Route exact path="/" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/saved" component={SavedBooks} />
    </div>
  </Router>
);}




export default App;



