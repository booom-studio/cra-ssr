import PropTypes from 'prop-types';

export const UserConsumerPropTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};
