import request from 'supertest';

import app from '../src/app';

describe('get all users', () => {
  it('should be able to list all users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
  });

  it('should list users with a since query param', async () => {
    const response = await request(app).get('/api/users?since=134');

    expect(response.status).toBe(200);
  });
});
