import React from "react";
import styles from "./Post.module.css";
import { createBody } from "../helpers.js";

const Post = ({ postContent }) => {
  const { humanDate, accessibleDate, author, content, title } = postContent;

  return (
    <article
      itemscope
      itemtype="http://schema.org/BlogPosting"
      className={styles.post}
    >
      <header>
        <h2 itemprop="headline">{title}</h2>

        <div className={styles.date}>
          <strong>Publish Date</strong>:
          <span itemprop="datePublished">
            <time datetime={accessibleDate}>{humanDate}</time>
          </span>
        </div>

        <div className={styles.author}>
          <strong>Author</strong>:<span itemprop="author">Jane Doe</span>
        </div>
      </header>

      <div
        itemprop="articleBody"
        className={styles.content}
        dangerouslySetInnerHTML={createBody(content)}
      />
    </article>
  );
};

export default Post;
