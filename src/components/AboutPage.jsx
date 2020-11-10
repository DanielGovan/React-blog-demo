import React, { useEffect, useState } from "react";
import { getPages } from "../apis";
import { createBody } from "../helpers";

function AboutPage() {
  const [pagesContent, setPagesContent] = useState({});

  useEffect(async () => {
    const result = await getPages();
    setPagesContent(result);
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
}

export default AboutPage;
