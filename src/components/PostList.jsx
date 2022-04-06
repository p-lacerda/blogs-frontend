/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import PostCard from './PostCard';

function PostList(props) {
  // Sort the array to filter most recent post
  const { allPosts } = props;
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="post-list">
      { allPosts.length === 0
        ? <p>There is not posts yet. Create the first!</p> : allPosts
          .map(({
            title, username, content, date, id,
          }) => (
            <PostCard
              key={id}
              id={id}
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
