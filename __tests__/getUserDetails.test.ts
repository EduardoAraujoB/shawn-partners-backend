import request from 'supertest';

import app from '../src/app';

describe('get user details', () => {
  it('should be able to list user details', async () => {
    const response = await request(app).get(
      '/api/users/EduardoAraujoB/details'
    );

    expect(response.status).toBe(200);
  });
});
