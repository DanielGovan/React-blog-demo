import React from "react";
import styles from "./Login.module.css";

function Login(props) {
  return (
    <>
      <h1>Login</h1>

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
}

export default Login;
