import React from 'react';
import { connect } from 'react-redux';
import firstPerson from '../images/youAreTheFirst.svg';

import PostCard from './PostCard';

function PostList(props) {
  // Sort the array to filter most recent post
  const { allPosts } = props;
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="post-list">
      { allPosts.length === 0
        ? 
        <div className='post-empty'>
          <img src={firstPerson} className="post-first" alt="Image of a excited person out a box" />
          <p>There is not posts yet. <strong id="be-the-first">Be the first!</strong></p> 
        </div>
        : allPosts
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
