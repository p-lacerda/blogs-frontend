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
            Title
            <input
              type="text"
              id="form-title"
              value={title}
              name="title"
              onChange={(e) => onChange(e)}
              placeholder="Type your post title..."
            />
          </label>
          <label htmlFor="content">
            Content
            <textarea
              id="form-content"
              name="content"
              value={content}
              onChange={(e) => onChange(e)}
              placeholder="Type your post content..."
            />
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
  || content.length === 0 ? 'button-primary-disabled' : 'button-primary'
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
