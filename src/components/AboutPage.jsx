import React, { useEffect, useState } from "react";

import { getPages } from "../apis";
import { createBody } from "../helpers";
import { getState } from "../state";

const AboutPage = () => {
  const [{ pagesContent }, dispatch] = getState();

  useEffect(async () => {
    // checks state for page content, else fetches from api and dispatches action to update state
    if (pagesContent.length > 0) return null;
    const result = await getPages();
    dispatch({
      type: "getPages",
      newContent: result,
    });
  }, []);

  return (
    <div>
      {!pagesContent.length ? (
        <>
          <h3>Loading...</h3>
        </>
      ) : (
        pagesContent.map((pageContent) => {
          const { content, title } = pageContent;

          return (
            <article key={pageContent.id}>
              <h1>{title}</h1>
              <div class="page" dangerouslySetInnerHTML={createBody(content)} />
            </article>
          );
        })
      )}
    </div>
  );
};

export default AboutPage;
