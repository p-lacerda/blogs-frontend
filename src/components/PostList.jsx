/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import PostCard from './PostCard';

function PostList(props) {
  const { allPosts } = props;
  console.log(allPosts);

  return (
    <div className="post-list">
      There is not posts yet. Create the first!
      { allPosts === undefined ? <p>Tem nada</p> : allPosts.map(({
        title, username, content, date,
      }) => (
        <PostCard
          title={title}
          username={username}
          content={content}
          date={date}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { post } = state;
  return post;
};

export default connect(mapStateToProps, null)(PostList);
