/* eslint-disable react/prop-types */
import React from 'react';

function PostCard({
  title, username, content, date,
}) {
  return (
    <div className="post-card">
      <div>
        <h4>{ title }</h4>
        <button type="button">Editar</button>
        <button type="button">Remover</button>
      </div>
      <div>
        <p>{username}</p>
        <p>{ content }</p>
        <p>{ String(date) }</p>
      </div>
    </div>
  );
}

export default PostCard;
