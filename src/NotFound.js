import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="notFoundDiv">
    <h1>Oops 404 :(</h1>
    <h3>We couldn't find what you were looking for</h3>
    <div className="link">
      <Link to="/">Here you can browse the movies</Link>
    </div>
  </div>
);

export default NotFound;
