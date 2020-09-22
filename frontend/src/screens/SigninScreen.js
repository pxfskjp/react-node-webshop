import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function SigninScreen(props) {

  const [email, setEmail ] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button type="submit" className="button primary">Sign in</button>
          </li>
          <li>New to Amazing Webshop?</li>
          <li>
            <Link to="/register" className="button full-width">Create your Amazing Webshop account</Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SigninScreen;
