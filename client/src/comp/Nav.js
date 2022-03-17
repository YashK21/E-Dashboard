import React from "react";
import { Link, Links } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
