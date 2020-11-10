import React from "react";
import Post from "./Post";

function HomePage(props) {
  return (
    <>
      {
        //<!-- Should only show when user is logged in -->
      }

      <section class="welcome logged-in">Welcome username!</section>

      {
        //<!-- Retrieve blog posts from WP API. -->
      }

      <div itemscope itemtype="https://schema.org/Blog">
        <Post />
        <Post />
      </div>
    </>
  );
}

export default HomePage;
