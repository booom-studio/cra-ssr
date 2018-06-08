import express from 'express';

const api = express.Router();

api.get('/', (req, res) => {
  return res.json({ status: 'ok' });
});

api.post('/signin', async (req, res) => {
  // Authenticate + get user

  return res.json({
    name: 'Dummy User'
  });
});

export default api;
