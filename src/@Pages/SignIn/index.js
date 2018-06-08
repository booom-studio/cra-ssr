import React from 'react';
import { Consumer } from '@Providers/User';

import SignIn from './SignIn';

export default props => (
  <Consumer>{context => <SignIn {...props} user={context} />}</Consumer>
);
