/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { userInfo as userInfoAction } from '../actions';
import LoginContainer from '../components/LoginContainer';
import useForm from '../hooks/useForm';
// import propTypes from 'prop-types';

function SignUp(props) {
  const navigate = useNavigate();

  const [user, setUserInfo] = useState({
    name: '',
  });

  const [handleChange, handleSubmit] = useForm(user);

  const sendUserInfoToRedux = async () => {
    const { userInfo } = props;
    await userInfo(user);
    navigate('/');
  };

  return (
    <div className="login-page">
      <LoginContainer
        user={user}
        onChange={handleChange(setUserInfo)}
        onSubmit={handleSubmit(sendUserInfoToRedux)}
      />
    </div>
  );
}

// SignUp.PropTypes = {
//   propTypes,
// };

const mapDispatchToProps = (dispatch) => ({
  userInfo: (data) => (
    dispatch(userInfoAction(data))
  ),
});

export default connect(null, mapDispatchToProps)(SignUp);