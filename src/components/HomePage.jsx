import React, { useEffect } from "react";

import Post from "./Post";
import { getBlogPosts } from "../helpers/apis";
import { getState } from "../state/stateManager";
import { GET_POSTS } from "../state/actions";

const HomePage = () => {
  const [{ postsContent, userInfo }, dispatch] = getState();

  useEffect(async () => {
    // checks state for posts content, else fetches from api and dispatches action to update state
    if (postsContent.length > 0) return null;
    const result = await getBlogPosts();
    dispatch({
      type: GET_POSTS,
      newContent: result,
    });
  }, []);

  return (
    <>
      {userInfo && userInfo.user_nicename && (
        <section class="welcome logged-in">
          Welcome {userInfo.user_nicename}!
        </section>
      )}

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
