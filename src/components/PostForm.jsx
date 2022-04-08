/* eslint-disable react/prop-types */
import React from 'react';

function PostForm({ onChange, onSubmit }) {
  return (
    <div className="post-form">
      <form>
        <div className="form-header">
          <p>{'What\'s on your mind?'}</p>
        </div>
        <div className="form-body">
          <label htmlFor="title">
            <p>Title</p>
            <input type="text" name="title" onChange={(e) => onChange(e)} />
          </label>
          <label htmlFor="content">
            <p>Content</p>
            <input type="text" name="content" onChange={(e) => onChange(e)} />
          </label>
        </div>
        <div className="form-bottom">
          <button
            type="button"
            onClick={(e) => onSubmit(e)}
            className="button-form"
          >
            Create

          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
