import React, { useContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useNavigate, Link } from "react-router-dom";
import app from "../../../Config/firebase";
import AuthContext from "../Authenticate/AuthContext";
import "./User.css";
const db = getDatabase(app);

const UserPage = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [userData, setUserData] = useState("");
  const currentDate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      const userRef = ref(db, "users/" + user["uid"]);
      onValue(userRef, (snapshot) => {
        setUserData(snapshot.val());
      });
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleDataChange = (name, value) => {
    setIsChange(true);
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const saveUserData = async () => {
    setIsChange(false);
    const userRef = ref(db, "users/" + user?.uid);
    await set(userRef, userData)
      .then(() => {
        alert("User data changed and saved successfully!");
        navigate("/");
      })
      .catch(() => {
        alert("Something went wrong know try after sometimes");
      });
  };
  const handleClearForm = () => {
    setIsChange(false);
  };
  return (
    <div className="user__page">
      {isLoggedIn ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveUserData();
          }}
        >
          <div className="data">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userData.username}
              onChange={(e) => {
                handleDataChange("username", e.target.value);
              }}
            />
          </div>
          <div className="data">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={userData.email} readOnly />
            <span style={{ fontSize: "10px", color: "red" }}>
              * Not allowed to change Email
            </span>
          </div>
          <div className="data">
            <label htmlFor="dob">Birth Date</label>
            <input
              type="date"
              id="dob"
              value={userData?.dob}
              onChange={(e) => {
                handleDataChange("dob", e.target.value);
              }}
              max={currentDate}
            />
          </div>
          <div className="gender__data">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={userData.gender === "Male"}
                onChange={(e) => {
                  handleDataChange("gender", e.target.value);
                }}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={userData.gender === "Female"}
                onChange={(e) => {
                  handleDataChange("gender", e.target.value);
                }}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="not__prefer"
                value="Not Prefer to Say"
                checked={userData.gender === "Not Prefer to Say"}
                onChange={(e) => {
                  handleDataChange("gender", e.target.value);
                }}
              />
              <label htmlFor="not__prefer">Not Prefer to Say</label>
            </div>
          </div>
          <div className="form__btn">
            <Link to="/">
              <button type="button">Back Home</button>
            </Link>
            <button type="reset" onClick={handleClearForm}>
              Clear Changes
            </button>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      ) : (
        <div styles={{ textAlign: "center" }}>
          <h2>Kindly login to continue</h2>
          <Link to={"/login"}>
            <button className="auth-btn">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserPage;
