import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // }, []);
  const handlelogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("token", JSON.stringify(result.auth));
      console.log("success");
      navigate("/");
    } else {
      alert(result.error);
      // navigate("/l");
    }
  };
  return (
    <div className="login">
      <h1>Login </h1>
      <input
        type="text"
        className="inputBox"
        placeholder="enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="enter password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handlelogin} className="submit" type="submit">
        Login
      </button>
    </div>
  );
};
export default Login;
