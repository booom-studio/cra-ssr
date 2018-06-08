import Cookies from 'js-cookie';
import axios from 'axios';

export default Object.freeze({
  async signIn(token) {
    const { data: user } = await axios.post('/api/signin', { token });

    Cookies.set('token', token);

    return user;
  },
  signOut() {
    Cookies.remove('token');

    return null;
  },
  getSavedToken() {
    return Cookies.get('token');
  }
});
