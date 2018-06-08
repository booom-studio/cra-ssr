import React from 'react';
import { Consumer } from '@Providers/User';

import UnauthenticatedRoute from './UnauthenticatedRoute';

export default props => (
  <Consumer>
    {context => <UnauthenticatedRoute {...props} user={context} />}
  </Consumer>
);
