import React, { useState } from "react";
// import AuthContext from './AuthContext';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import "./Style.css";
// const firebaseConfig = {
//   apiKey: "AIzaSyBR-HIYLcfO6zOhgkKudrXaPp3ymf5xcM0",
//   authDomain: "food-recipe-finder-app.firebaseapp.com",
//   projectId: "food-recipe-finder-app",
//   storageBucket: "food-recipe-finder-app.appspot.com",
//   messagingSenderId: "508506645594",
//   appId: "1:508506645594:web:e9b129a5df7ac9a6dc6463",
// };
// const app = initializeApp(firebaseConfig);
const Login = () => {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  // const user = useContext(AuthContext);
  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPasswordInput(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        localStorage.setItem("isSignedIn", true);
        setInterval(() => {
          localStorage.removeItem("isSignedIn");
        }, 3600000);
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
          <p className="mt-5 mb-3 text-body-secondary">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
