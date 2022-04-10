/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/PostForm.css';

function PostForm({ onChange, onSubmit, title, content }) {
  return (
    <div className="post-form">
      <form>
        <div className="form-header">
          <p>{'What\'s on your mind?'}</p>
        </div>
        <div className="form-body">
          <label htmlFor="title">
            <p>Title</p>
            <input type="text" id="form-title" value={title} name="title" onChange={(e) => onChange(e)} />
          </label>
          <label htmlFor="content">
            <p>Content</p>
            <textarea id="form-content" name="content" value={content} onChange={(e) => onChange(e)} />
          </label>
        </div>
        <div className="form-bottom">
          <button
            type="button"
            onClick={(e) => onSubmit(e)}
            disabled={
              title.length === 0 
              || content.length === 0 
            }
            className={
              title.length === 0 
  || content.length === 0 ? 'button-form-disabled' : 'button-form'
            }
          >
            Create

          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
