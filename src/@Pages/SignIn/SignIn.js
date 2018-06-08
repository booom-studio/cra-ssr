import React from 'react';
import PropTypes from 'prop-types';

import { UserConsumerPropTypes } from '@Constants/PropTypes';

const SignIn = ({
  user: {
    actions: { signIn }
  }
}) => <button onClick={() => signIn()}>Sign In</button>;

SignIn.propTypes = {
  user: PropTypes.shape(UserConsumerPropTypes).isRequired
};

export default SignIn;
