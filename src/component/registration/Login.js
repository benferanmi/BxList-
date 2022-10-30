import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("mydetails"));
    console.log(data.username)
    if (data.username !== user.username && data.password !== user.password) {
      console.log("details is not correct");
    } else {
      console.log("details is correct");
      navigate("/");
      localStorage.setItem("signup", true);
    }
  };

  return (
    <div className="register">
      <section>
        <h1>Login</h1>
        <form autoComplete="off">
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleSignUp}
              value={user.username}
              required
            />
          </label>

          <label htmlFor=" password">
            password
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleSignUp}
              value={user.password}
              required
            />
          </label>

          <input type="text" name="text" />

          <button type="button" onClick={handleSubmit}>
            button
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
