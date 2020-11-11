import * as actions from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_POSTS:
      return {
        ...state,
        postsContent: action.newContent,
      };
    case actions.GET_PAGES:
      return {
        ...state,
        pagesContent: action.newContent,
      };
    case actions.LOG_IN:
      return {
        ...state,
        userInfo: action.userData,
      };
    case actions.LOG_OUT:
      return {
        ...state,
        userInfo: {},
      };

    default:
      return state;
  }
};

export default reducer;
