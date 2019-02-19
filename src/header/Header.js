import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to={`/`} className="link">
      <h1>MovieSearch</h1>
    </Link>
  </header>
);

export default Header;
