/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { userInfo as userInfoAction } from '../actions';
import LoginContainer from '../components/LoginContainer';
import useForm from '../hooks/useForm';
// import propTypes from 'prop-types';

function SignUp(props) {
  const navigate = useNavigate();
  // const sendUserInfo = async (data) => {
  //   const { userInfo } = props;
  //   await userInfo(data);
  // };

  const [{ user }, handleChange, handleSubmit] = useForm();

  const sendUserInfo = async () => {
    const { userInfo } = props;
    await userInfo(user);
    navigate('/');
    console.log('Botão clicado');
  };

  return (
    <div className="login-page">
      <LoginContainer
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit(sendUserInfo)}
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
