import React, { useState } from "react";
import styles from "./Login.module.css";
import { getState } from "../state/stateManager";
import { logIn } from "../helpers/apis";
import { LOG_IN } from "../state/actions";
import { Redirect } from "react-router-dom";

//TODO validation

const LogIn = () => {
  const [formData, setFormData] = useState();
  const [{ userInfo }, dispatch] = getState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData === undefined) {
      alert("Please enter your username and Password");
    } else {
      await logIn(formData)
        .then((result) => {
          dispatch({
            type: LOG_IN,
            userData: result,
          });
          // go to home page
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };

  return (
    <>
      {!userInfo.user_nicename ? <h1>Login</h1> : <Redirect to="/" />}
      <div className={styles.login}>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
