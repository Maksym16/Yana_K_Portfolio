import React, {useState} from 'react';

import { Link } from "react-router-dom";


const Navbar = () => {
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 300) { //if window is scrolled 300px or more
      setColor(true) //add class 'solid' to element with class 'navbar'
    } else { //if page is not scrolled 300px from top
      setColor(false) //remove class 'solid' from navbar element
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <nav className={`${color ? 'navbar solid' : 'navbar'} navbar-expand-lg fixed-top`}>
      <div className="container-fluid">
      <Link className="logo" to="/">YANA KOTLIAR</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="custom-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link active">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
