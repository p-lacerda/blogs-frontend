import { USER_INFO } from '../../actions';

const initialState = {
  name: '',
};

export default (state = initialState, { type, payload } = { }) => {
  switch (type) {
    case USER_INFO:
      return {
        ...state,
        name: payload.name,
      };
    default:
      return state;
  }
};
