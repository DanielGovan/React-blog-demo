import React, { useEffect } from "react";

import { getPages } from "../helpers/apis";
import { createBody } from "../helpers/helpers";
import { getState } from "../state/stateManager";
import { GET_PAGES } from "../state/actions";

const AboutPage = () => {
  const [{ pagesContent }, dispatch] = getState();

  useEffect(async () => {
    // checks state for page content, else fetches from api and dispatches action to update state
    if (pagesContent.length > 0) return null;
    const result = await getPages();
    dispatch({
      type: GET_PAGES,
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
