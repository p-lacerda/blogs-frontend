/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postInfo as postInfoAction } from '../actions';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import useForm from '../hooks/useForm';
// import propTypes from 'prop-types';

function MainScreen(props) {
  const [post, setPostInfo] = useState({
    title: '',
    username: '',
    content: '',
    date: '',
  });

  const [handleChange, handleSubmit] = useForm(post);

  const sendPostInfoToRedux = async () => {
    const { name, postInfo } = props;

    // Add username and date before send to Redux
    const newPost = { ...post };
    newPost.username = name;
    newPost.date = new Date();
    setPostInfo(newPost);

    await postInfo(newPost);
  };

  return (
    <div>
      <PostForm
        onChange={handleChange(setPostInfo)}
        onSubmit={handleSubmit(sendPostInfoToRedux)}
      />
      <PostList />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return user;
};

const mapDispatchToProps = (dispatch) => ({
  postInfo: (data) => (
    dispatch(postInfoAction(data))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
