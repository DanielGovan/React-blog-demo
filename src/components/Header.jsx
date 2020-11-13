import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { GetState } from "../state/stateManager";
import { LOG_OUT } from "../state/actions";

// TODO split nav and nav items into seperate components

const Header = () => {
  const [state, dispatch] = GetState();
  const handleLogOut = async () => {
    dispatch({
      type: LOG_OUT,
    });
  };
  return (
    <>
      <header
        className={styles["site-header"]}
        role="banner"
        itemScope="itemscope"
        itemType="http://schema.org/WPHeader"
      >
        <div
          className={styles["site-title"]}
          itemScope
          itemType="http://schema.org/Organization"
        >
          10up Blog
        </div>

        <nav
          className={styles["site-navigation"]}
          role="navigation"
          itemScope="itemscope"
          itemType="http://schema.org/SiteNavigationElement"
        >
          <a
            href="#menu-main-nav"
            id="js-menu-toggle"
            className={styles["site-menu-toggle"]}
          >
            <span className={styles["screen-reader-text"]}>Primary Menu</span>
            <span aria-hidden="true">☰</span>
          </a>

          <ul id="menu-main-nav" className={styles["primary-menu"]}>
            <li
              className={`
                ${styles["menu-item"]}
                ${styles["menu-item-type-custom"]}
                ${styles["menu-item-object-custom"]}
                ${styles["menu-item-1912"]}
              `}
            >
              <Link to="home">Home</Link>
            </li>
            <li
              className={`
                ${styles["menu-item"]}
                ${styles["menu-item-type-custom"]}
                ${styles["menu-item-object-custom"]}
                ${styles["menu-item-1915"]}
              `}
            >
              <Link to="about">About</Link>
            </li>

            {state.userInfo.user_nicename ? (
              <>
                <li
                  className={`
                ${styles["logged-in"]}
                ${styles["menu-item"]}
                ${styles["menu-item-type-custom"]}
                ${styles["menu-item-object-custom"]}
                ${styles["menu-item-1915"]}
              `}
                >
                  <a href="#" onClick={handleLogOut}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li
                  className={`
                ${styles["logged-out"]}
                ${styles["menu-item"]}
                ${styles["menu-item-type-custom"]}
                ${styles["menu-item-object-custom"]}
                ${styles["menu-item-1915"]}
              `}
                >
                  <Link to="login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
