import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header
        className={styles["site-header"]}
        role="banner"
        itemscope="itemscope"
        itemtype="http://schema.org/WPHeader"
      >
        <div
          className={styles["site-title"]}
          itemscope
          itemtype="http://schema.org/Organization"
        >
          10up Blog
        </div>

        <nav
          className={styles["site-navigation"]}
          role="navigation"
          itemscope="itemscope"
          itemtype="http://schema.org/SiteNavigationElement"
        >
          <a
            href="#menu-main-nav"
            id="js-menu-toggle"
            className={styles["site-menu-toggle"]}
          >
            <span className={styles["screen-reader-text"]}>Primary Menu</span>
            <span aria-hidden="true">☰</span>
          </a>

          {
            //  Make sure to update menu links to work with your app.
          }
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

            {
              //  Should only show when user is logged out
            }
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

            {
              // Should only show when user is logged in
            }
            <li
              className={`
                ${styles["logged-in"]}
                ${styles["menu-item"]}
                ${styles["menu-item-type-custom"]}
                ${styles["menu-item-object-custom"]}
                ${styles["menu-item-1915"]}
              `}
            >
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
