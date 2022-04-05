import React from 'react';
// import propTypes from 'prop-types';

function MainScreen() {
  return (
    <div>
      <div className="post-form">
        <form>
          <p>{'What\'s on your mind?'}</p>
          <label htmlFor="title">
            Title
            <input type="text" />
          </label>
          <label htmlFor="content">
            Content
            <input type="text" />
          </label>
          <button type="button">Create</button>
        </form>
      </div>
      <div className="post-list" />
    </div>
  );
}

// MainScreen.PropTypes = {
//   propTypes,
// };

export default MainScreen;
