import React from 'react';
import { Consumer } from '@Providers/User';

import Header from './Header';

export default props => (
  <Consumer>{context => <Header {...props} user={context} />}</Consumer>
);
