import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const NavBar = () => {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/" className="apptitle">
              <b>APlay</b>
            </Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/playzone">Play zone</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
