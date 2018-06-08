import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { UserConsumerPropTypes } from '@Constants/PropTypes';

const UnauthenticatedRoute = ({
  user: {
    state: { isAuthenticated }
  },
  ...props
}) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

UnauthenticatedRoute.propTypes = {
  user: PropTypes.shape(UserConsumerPropTypes).isRequired
};

export default UnauthenticatedRoute;
