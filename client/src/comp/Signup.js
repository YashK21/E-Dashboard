import React, { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleClick = () => {
    console.warn(name, email, pass);
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
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
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
