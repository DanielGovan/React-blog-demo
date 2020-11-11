import React, { useEffect, useState } from "react";

import Post from "./Post";
import { getBlogPosts } from "../apis";
import { getState } from "../state";

const HomePage = () => {
  const [{ postsContent }, dispatch] = getState();

  useEffect(async () => {
    // checks state for posts content, else fetches from api and dispatches action to update state
    if (postsContent.length > 0) return null;
    const result = await getBlogPosts();
    dispatch({
      type: "getPosts",
      newContent: result,
    });
  }, []);

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
        {!postsContent ? (
          <>
            <h3>Loading...</h3>
          </>
        ) : (
          postsContent &&
          postsContent.map((postContent) => {
            return <Post id={postContent.id} postContent={postContent} />;
          })
        )}
      </div>
    </>
  );
};

export default HomePage;
