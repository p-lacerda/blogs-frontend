/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

function PostCard(props) {
  const createTimeAgo = (userDate) => moment(userDate).fromNow();

  const { name: usernameFromState } = props;
  const {
    title, username, content, date,
  } = props;

  return (
    <div className="post-card">
      <div>
        <h4>{ title }</h4>
        {
          usernameFromState === username
            ? (
              <>
                <button type="button">Editar</button>
                <button type="button">Remover</button>
              </>
            )
            : null
          }
      </div>
      <div>
        <p>{ `@${username}` }</p>
        <p>{ content }</p>
        <p>{ createTimeAgo(date) }</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { user } = state;
  return user;
};

export default connect(mapStateToProps, null)(PostCard);
