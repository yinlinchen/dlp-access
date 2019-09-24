import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/terms">Permission Page</Link>
                <Link to="/collections">EXPLORE COLLECTIONS</Link>
                <Link to="/items">BROWSE ITEMS</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
