import React from "react";
import styles from "./Post.module.css";

function Post(props) {
  return (
    <article
      itemscope
      itemtype="http://schema.org/BlogPosting"
      className={styles.post}
    >
      <header>
        <h2 itemprop="headline">Post Title 1</h2>
        {
          // <!-- publication date -->
        }

        <div className={styles.date}>
          <strong>Publish Date</strong>:
          <span itemprop="datePublished">
            <time datetime="2016-05-01">May 1, 2016</time>
          </span>
        </div>

        <div className={styles.author}>
          <strong>Author</strong>:<span itemprop="author">Jane Doe</span>
        </div>
      </header>

      <div itemprop="articleBody" className={styles.content}>
        Post content...
      </div>
    </article>
  );
}

export default Post;
