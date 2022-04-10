import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { postInfo as postInfoAction } from '../actions';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Header from '../components/Header';
import useForm from '../hooks/useForm';
// import propTypes from 'prop-types';

function MainScreen(props) {
  const [post, setPostInfo] = useState({
    id: '',
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
    newPost.id = uuidv4();
    newPost.username = name;
    newPost.date = new Date();
    newPost.created = new Date();
    setPostInfo(newPost);
    await postInfo(newPost);

    setPostInfo({
      id: '',
      title: '',
      username: '',
      content: '',
      date: '',
    })
  };

  const { title, content } = post;
  return (
    <div className="main-screen">
      <div className="container">
        <Header />
        <div className="post-container">
          <PostForm
            onChange={handleChange(setPostInfo)}
            onSubmit={handleSubmit(sendPostInfoToRedux)}
            title={title}
            content={content}
          />
          <PostList />
        </div>
      </div>
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
