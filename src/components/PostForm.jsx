/* eslint-disable react/prop-types */
import React from 'react';

function PostForm({ onChange, onSubmit }) {
  return (
    <div className="post-form">
      <form>
        <div className="post-header">
          <p>{'What\'s on your mind?'}</p>
        </div>
        <div className="post-body">
          <label htmlFor="title">
            Title
            <input type="text" name="title" onChange={(e) => onChange(e)} />
          </label>
          <label htmlFor="content">
            Content
            <input type="text" name="content" onChange={(e) => onChange(e)} />
          </label>
        </div>
        <div className="post-bottom">
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
