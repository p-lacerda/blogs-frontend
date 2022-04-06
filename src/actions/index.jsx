export const USER_INFO = 'USER_INFO';
export const POST_INFO = 'POST_INFO';
export const DELETE_POST_INFO = 'DELETE_POST_INFO';
export const EDIT_POST_INFO = 'EDIT_POST_INFO';

export const userInfo = ({ name }) => ({
  type: USER_INFO,
  payload: {
    name,
  },
});

export const postInfo = (post) => ({
  type: POST_INFO,
  payload: {
    post,
  },
});

export const deletePostInfo = (allPosts) => ({
  type: DELETE_POST_INFO,
  payload: {
    allPosts,
  },
});

export const editPostInfo = (allPosts) => ({
  type: EDIT_POST_INFO,
  payload: {
    allPosts,
  },
});
