import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';

import UserProvider from '@Providers/User';
import App from './App';

const Application = (
  <UserProvider>
    <Router>
      <Frontload noServerRender>
        <App />
      </Frontload>
    </Router>
  </UserProvider>
);

const rootElement = document.querySelector('#root');

// Render everything to the root - it's business time
if (process.env.NODE_ENV === 'production') {
  window.onload = () => {
    Loadable.preloadReady().then(() => {
      hydrate(Application, rootElement);
    });
  };
} else {
  render(Application, rootElement);
}
