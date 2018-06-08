import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { UserConsumerPropTypes } from '@Constants/PropTypes';

const AuthenticatedRoute = ({
  user: {
    state: { isAuthenticated }
  },
  ...props
}) => {
  if (!isAuthenticated) {
    return <Redirect to="/signin" />;
  }

  return <Route {...props} />;
};

AuthenticatedRoute.propTypes = {
  user: PropTypes.shape(UserConsumerPropTypes).isRequired
};

export default AuthenticatedRoute;
