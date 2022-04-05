export const USER_INFO = 'USER_INFO';

export const userInfo = ({ name }) => ({
  type: USER_INFO,
  payload: {
    name,
  },
});
