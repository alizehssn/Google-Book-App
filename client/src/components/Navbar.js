import React from "react";
import { Link } from "react-router-dom";
function Nav() {
    return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
            Google Book App
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className= "nav-link" to = "/"> Home </Link>
        </li>
        <li className="nav-item">
        <Link className= "nav-link" to = "/saved"> Saved Books </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to = "/search">Search for a Book</Link>
        </li>
        </ul>
    </nav>
        
    );
}

export default Nav