import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.css";
import "./Style.css";
import { Link } from "react-router-dom";

// const firebaseConfig = {
//   apiKey: "AIzaSyBR-HIYLcfO6zOhgkKudrXaPp3ymf5xcM0",
//   authDomain: "food-recipe-finder-app.firebaseapp.com",
//   projectId: "food-recipe-finder-app",
//   storageBucket: "food-recipe-finder-app.appspot.com",
//   messagingSenderId: "508506645594",
//   appId: "1:508506645594:web:e9b129a5df7ac9a6dc6463",
// };

const Signup = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((userDetail) => {
        const userID = userDetail.user.uid;
        const userRef = ref(db, "users/" + auth.currentUser["uid"]);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();

          !userData &&
            set(ref(db, "users/" + userID), {
              userID: userID,
              username: userDetail.user.displayName,
              email: userDetail.user.email,
              createdAt: new Date().toISOString(),
            });
        });
        navigate("/");
      })
      .catch((error) => {
        alert("User details not found!");
      });
  };

  const usernameChangeHandler = (e) => {
    setUsernameInput(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailInput, passwordInput)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        set(ref(db, "users/" + uid), {
          userId: uid,
          username: usernameInput,
          email: emailInput,
          createdAt: new Date().toISOString(),
        });
        alert("You are successfully registered!");
        navigate("/");
      })
      .catch((error) => {
        alert("Something went wrong! Kindly try again...");
        console.log(error);
      });
  };

  return (
    <div className="main__section">
      <main className="form-signin w-25 m-auto">
        <form onSubmit={handleFormSubmit}>
          <h1 className="h3 mb-5 fw-normal">Sign up here</h1>
          <div className="form-floating mb-5">
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              placeholder="Username"
              onChange={usernameChangeHandler}
              value={usernameInput}
            />
            <label htmlFor="usernameInput">User Name</label>
          </div>

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
            Sign up
          </button>
        </form>
        <button
          className="btn btn-primary w-100 py-2 mt-5"
          type="submit"
          onClick={handleGoogleSignin}
        >
          Sign up using Google
        </button>
        <p className="mt-5 mb-3 text-body-secondary">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </main>
    </div>
  );
};

export default Signup;
