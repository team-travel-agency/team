

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({handleSearchChange ,searchTerm}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Pannier">Pannier</Link>
        </li>
        <li>
        <input
        type="text"
        placeholder="Search by country"
        value={searchTerm}
        onChange={handleSearchChange} 
    
      />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
