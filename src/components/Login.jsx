import React from "react";
import styles from "./Login.module.css";
import { getState } from "../state/stateManager";
import { logIn } from "../helpers/apis";
import { LOG_IN } from "../state/actions";

const LogIn = () => {
  const [{ userInfo }, dispatch] = getState();
  const handleLogIn = async () => {
    await logIn("jane", "12345");
    // dispatch({
    //   type: LOG_IN,
    //   userData: result.data,
    // });
  };

  return (
    <>
      <h1>Login</h1>
      <a href="#" onClick={handleLogIn}>
        Log in
      </a>
      <div className={styles.login}>
        {
          //<!-- Connect this form with the WP JWT API. -->
        }
        <form method="post">
          <div>
            <label for="username">Username</label>
            <input id="username" type="text" name="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" />
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
