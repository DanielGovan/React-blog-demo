const reducer = (state, action) => {
  switch (action.type) {
    case "getPosts":
      return {
        ...state,
        postsContent: action.newContent,
      };
    case "getPages":
      return {
        ...state,
        pagesContent: action.newContent,
      };
    case "logIn":
      return {
        ...state,
        theme: action.newTheme,
      };
    case "logOut":
      return {
        ...state,
        theme: action.newTheme,
      };

    default:
      return state;
  }
};

export default reducer;
