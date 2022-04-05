import { POST_INFO } from '../../actions';

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
    default:
      return state;
  }
};
