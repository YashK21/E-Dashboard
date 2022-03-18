import React, { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    console.warn(name, email, password);
    const result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(result);
  };
  return (
    <div className="signup">
      <h1>Signup comp</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="enter name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter email"
      />
      <input
        className="inputBox"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter password"
      />
      <button className="submit" type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};
export default Signup;
