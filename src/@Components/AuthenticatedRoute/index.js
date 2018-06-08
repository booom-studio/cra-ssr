import React from 'react';
import { Consumer } from '@Providers/User';

import AuthenticatedRoute from './AuthenticatedRoute';

export default props => (
  <Consumer>
    {context => <AuthenticatedRoute {...props} user={context} />}
  </Consumer>
);
