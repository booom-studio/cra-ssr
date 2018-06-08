import React from 'react';
import PropTypes from 'prop-types';

import UserService from '@Services/user';

const Context = React.createContext();

export const Consumer = Context.Consumer;

export default class UserProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    isAuthenticated: false,
    user: null,
    token: null
  };

  async componentDidMount() {
    const token = await UserService.getSavedToken();

    if (token) {
      await this.signIn(token);
    } else {
      this.signOut();
    }
  }

  signIn = async token => {
    const user = await UserService.signIn(token);

    this.setState({ isAuthenticated: true, user, token });
  };

  signOut = () => {
    UserService.signOut();

    this.setState({ isAuthenticated: false, user: null, token: null });
  };

  render() {
    const { children } = this.props;

    const value = {
      state: this.state,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
      }
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }
}
