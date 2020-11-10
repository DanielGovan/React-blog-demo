import axios from "axios";
import { getHumanDate, getAccessibleDate } from "./helpers.js";

export const getBlogPosts = async () => {
  const endPoint = "https://js1.10up.com/wp-json/wp/v2/posts";
  // fetch from the api
  const result = await axios(endPoint);
  // parse into useful data
  // Not sure how much of the blog functionality to replicate here so keeping it simple
  let parsedData = [];
  for (const item of result.data) {
    const {
      status = "",
      id = "",
      date = "",
      author = "",
      content = "",
      title = "",
    } = item;
    if (status === "publish") {
      parsedData.push({
        id,
        humanDate: getHumanDate(date),
        accessibleDate: getAccessibleDate(date),
        author,
        content: content.rendered,
        title: title.rendered,
      });
    }
  }
  // needs a second call to find the author name? Low on time so moving on.
  return parsedData;
};

export const getPages = async () => {
  const endPoint = "https://js1.10up.com/wp-json/wp/v2/pages";
  // fetch from the api
  const result = await axios(endPoint);
  // parse into a useful dataset
  let parsedData = [];
  for (const item of result.data) {
    const { status = "", id = "", content = "", title = "" } = item;
    if (status === "publish") {
      parsedData.push({
        id,
        content: content.rendered,
        title: title.rendered,
      });
    }
  }
  return parsedData;
};

// ## APIs

// The API is the default WordPress REST API provided with WordPress. The relevant endpoints are listed below:

// * `GET https://js1.10up.com/wp-json/wp/v2/posts` - Get blog posts
// * `GET https://js1.10up.com/wp-json/wp/v2/pages` - Get pages (about)
// * `POST https://js1.10up.com/wp-json/jwt-auth/v1/token` - Receive a token based on a username and password. Valid username is `jane` and password is `12345`. JSON body should look like this:
//   ```
//   {
//     "username": "USERNAME",
//     "password": "PASSWORD"
//   }
//   ```
// * `POST https://js1.10up.com/wp-json/jwt-auth/v1/token/validate` - Check whether an existing token is valid or not. For this request, pass along the `Authentication` header like so:
//   ```
//   Authentication: Bearer TOKEN
