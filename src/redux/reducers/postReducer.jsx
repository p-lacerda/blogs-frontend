import { DELETE_POST_INFO, EDIT_POST_INFO, POST_INFO } from '../../actions';

const initialState = {
  allPosts: [],
};

export default (state = initialState, { type, payload } = { }) => {
  switch (type) {
    case POST_INFO:
      return {
        ...state,
        allPosts: [...state.allPosts, { ...payload.post }],
      };
    case DELETE_POST_INFO:
      return {
        ...state,
        allPosts: [...payload.allPosts],
      };
    case EDIT_POST_INFO:
      return {
        ...state,
        allPosts: [...payload.allPosts],
      };
    default:
      return state;
  }
};
