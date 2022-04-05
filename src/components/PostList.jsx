import React from 'react';
import { connect } from 'react-redux';

import PostCard from './PostCard';

function PostList(props) {
  const { allPosts } = props;
  return (
    <div className="post-list">
      {/* There is not posts yet. Create the first! */}
      { allPosts.map(() => {
        <PostCard
        
        />
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { post: { allPosts } } = state;
  return allPosts;
};

export default connect(mapStateToProps, null)(PostList);
