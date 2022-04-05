/* eslint-disable react/prop-types */
import React from 'react';

function PostForm({ onChange, onSubmit }) {
  return (
    <div className="post-form">
      <form>
        <p>{'What\'s on your mind?'}</p>
        <label htmlFor="title">
          Title
          <input type="text" name="title" onChange={(e) => onChange(e)} />
        </label>
        <label htmlFor="content">
          Content
          <input type="text" name="content" onChange={(e) => onChange(e)} />
        </label>
        <button type="button" onClick={(e) => onSubmit(e)}>Create</button>
      </form>
    </div>
  );
}

export default PostForm;
