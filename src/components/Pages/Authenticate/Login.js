// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import "./Style.css";
import app from "../../../Config/firebase"; 

const Login = () => {
  const auth = getAuth(app); 
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert("User details not found!");
      });
  };

  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        alert("User details not found!");
      });
  };

  return (
    <div className="main__section">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={handleFormSubmit}>
          <h1 className="h3 mb-5 fw-normal">Sign In here</h1>

          <div className="form-floating mb-5">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              onChange={emailChangeHandler}
              value={emailInput}
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating mb-5">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
              onChange={passwordChangeHandler}
              value={passwordInput}
            />
            <label htmlFor="passwordInput">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
        <button className="btn btn-primary w-100 py-2 mt-5" type="submit" onClick={handleGoogleSignin}>
          Sign in using Google
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </main>
    </div>
  );
};

export default Login;
