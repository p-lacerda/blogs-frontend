export const USER_INFO = 'USER_INFO';
export const POST_INFO = 'POST_INFO';

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
