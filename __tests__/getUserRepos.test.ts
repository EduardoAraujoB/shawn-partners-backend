import request from 'supertest';

import app from '../src/app';

describe('get user repos', () => {
  it('should be able to list repos from a user', async () => {
    const response = await request(app).get('/api/users/EduardoAraujoB/repos');

    expect(response.status).toBe(200);
  });
});
