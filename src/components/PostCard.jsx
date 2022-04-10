/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import useForm from '../hooks/useForm';
import {
  deletePostInfo as deletePostInfoAction,
  editPostInfo as editPostInfoAction,
} from '../actions';

import Edit from '../images/Edit.svg';
import Remove from '../images/Remove.svg';

import ModalEditItem from './ModalEditItem';
import ModalDeleteItem from './ModalDeleteItem';
import '../styles/Modal.css';

function PostCard(props) {
  const [editPost, setEditingPost] = useState({
    title: '',
    content: '',
  });

  const createTimeAgo = (userDate) => moment(userDate).fromNow();
  const { date } = props;
  const [timeAgo, setTimeAgo] = useState(createTimeAgo(date));
  const [handleChange] = useForm(editPost);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTimeAgo(createTimeAgo(date)), 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const deleteItem = () => {
    const { post: { allPosts }, id, deletePostInfo } = props;
    const filteredItems = allPosts.filter((post) => post.id !== id);
    deletePostInfo(filteredItems);
    setShowDelete(false);
  };

  const editItem = async () => {
    const { post: { allPosts }, id, editPostInfo } = props;
    const { title, content } = editPost;
    const newPost = {
      title,
      content,
    };
    const newItems = allPosts.map(
      (post) => (post.id === id ? { ...post, ...newPost } : post),
    );

    await editPostInfo(newItems);
    setShowEdit(false);
  };

  const { user: { name: usernameFromState } } = props;
  const {
    title, username, content,
  } = props;

  return (
    <div className="post-card">
      <div className='post-header'>
        <h4 className='post-title'>{ title }</h4>
        {
          usernameFromState === username
            ? (
              <div className='post-icons'>
                <button type="button" className="button-icon" onClick={() => setShowDelete(true)}><img src={Remove} alt='Button to remove your post'></img></button>
                <ModalDeleteItem
                  show={showDelete}
                  onClose={() => setShowDelete(false)}
                  deleteItem={() => deleteItem()}
                />
                <button type="button" className="button-icon" onClick={() => setShowEdit(true)}><img src={Edit} alt='Button to edit your post'></img></button>
                <ModalEditItem
                  show={showEdit}
                  onClose={() => setShowEdit(false)}
                  onChange={handleChange(setEditingPost)}
                  editItem={() => editItem()}
                />
              </div>
            )
            : null
          }
      </div>
      <div>
        <div className="post-info">
          <p>{ `@${username} • ${timeAgo}` }</p>
        </div>
        <div className="post-content">
        <p>{ content }</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user, post } = state;
  return { user, post };
};

const mapDispatchToProps = (dispatch) => ({
  deletePostInfo: (allData) => (
    dispatch(deletePostInfoAction(allData))
  ),
  editPostInfo: (allData) => (
    dispatch(editPostInfoAction(allData))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCard);
