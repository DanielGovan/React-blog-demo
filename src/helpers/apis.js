import axios from "axios";
import { getHumanDate, getAccessibleDate } from "./helpers.js";

// TODO error handling
// TODO second api call to find the author name
// TODO use validation call to check login instead of login name, if expired then log out
// https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#jwt_persist

export const getBlogPosts = async () => {
  const endPoint = "https://js1.10up.com/wp-json/wp/v2/posts";
  // fetch from the api
  const result = await axios.get(endPoint);
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
  return parsedData;
};

export const getPages = async () => {
  const endPoint = "https://js1.10up.com/wp-json/wp/v2/pages";
  // fetch from the api
  const result = await axios.get(endPoint);
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

export const logIn = async (login) => {
  const endPoint = "https://js1.10up.com/wp-json/jwt-auth/v1/token";
  const result = await axios.post(endPoint, login);
  return result.data;
};

export const validate = async () => {
  const endPoint = "https://js1.10up.com/wp-json/jwt-auth/v1/token/validate";
  const result = await axios.post(endPoint);
  return result.data;
};

// * `POST https://js1.10up.com/wp-json/jwt-auth/v1/token/validate` - Check whether an existing token is valid or not. For this request, pass along the `Authentication` header like so:
//   ```
//   Authentication: Bearer TOKEN
