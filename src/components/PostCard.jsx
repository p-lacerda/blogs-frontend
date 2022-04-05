/* eslint-disable react/prop-types */
import React from 'react';

function PostCard() {
  return (
    <div className="post-card">
      <div>
        <h4>Title</h4>
        <p>Remover</p>
        <p>Editar</p>
      </div>
      <div>
        <p>@Username</p>
        <p>Content</p>
        <p>X minutes ago</p>
      </div>
    </div>
  );
}

export default PostCard;
