import React from "react";
import { Link, Links, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
    // console.log(JSON.parse(auth).name);
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          {/* <li>
            <Link to="/update">Update Products</Link>
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login" onClick={logout}>
              {JSON.parse(auth).name.charAt(0).toUpperCase() +
                JSON.parse(auth).name.slice(1)}{" "}
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <ul className="nav-ul nav-right">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
export default Nav;
