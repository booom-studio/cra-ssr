import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { UserConsumerPropTypes } from '@Constants/PropTypes';

const Header = ({
  user: {
    state: { isAuthenticated, user },
    actions: { signOut }
  }
}) => (
  <div>
    <Link to="/">Home</Link> <Link to="/dashboard">Dashboard</Link>{' '}
    {isAuthenticated ? (
      <Fragment>
        <span>Hello {user.name}!</span>{' '}
        <button onClick={signOut}>Sign out</button>
      </Fragment>
    ) : (
      <Link to="/signin">Sign in</Link>
    )}
  </div>
);

Header.propTypes = {
  user: PropTypes.shape(UserConsumerPropTypes).isRequired
};

export default Header;
