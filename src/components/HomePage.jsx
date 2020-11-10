import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getBlogPosts } from "../apis";

function HomePage() {
  const [blogContent, setBlogContent] = useState([]);

  useEffect(async () => {
    const result = await getBlogPosts();
    setBlogContent(result);
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
        {!blogContent ? (
          <>
            <h3>Loading...</h3>
          </>
        ) : (
          blogContent.map((postContent) => {
            return <Post id={postContent.id} postContent={postContent} />;
          })
        )}
      </div>
    </>
  );
}

export default HomePage;
