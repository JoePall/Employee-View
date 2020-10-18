import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  const path = useLocation().pathname;

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className={path === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
