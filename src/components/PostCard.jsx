/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import useForm from '../hooks/useForm';
import {
  deletePostInfo as deletePostInfoAction,
  editPostInfo as editPostInfoAction,
} from '../actions';

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
      <div>
        <h4>{ title }</h4>
        {
          usernameFromState === username
            ? (
              <>
                <button type="button" onClick={() => setShowEdit(true)}>Editar</button>
                <ModalEditItem
                  show={showEdit}
                  onClose={() => setShowEdit(false)}
                  onChange={handleChange(setEditingPost)}
                  editItem={() => editItem()}
                />
                <button type="button" onClick={() => setShowDelete(true)}>Remover</button>
                <ModalDeleteItem
                  show={showDelete}
                  onClose={() => setShowDelete(false)}
                  deleteItem={() => deleteItem()}
                />
              </>
            )
            : null
          }
      </div>
      <div>
        <p>{ `@${username}` }</p>
        <p>{ content }</p>
        <p>{ timeAgo }</p>
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
