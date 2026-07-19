import request from 'supertest';
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';

const API_URL = 'http://localhost:5000/api';

describe('Auth Endpoints', () => {
  const testUser = {
    name: 'Test User',
    email: `test_${Date.now()}@example.com`,
    password: 'TestPass123!',
  };

  let accessToken;

  it('should register a new user', async () => {
    const res = await request(API_URL).post('/auth/register').send(testUser);
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
    accessToken = res.body.data.accessToken;
  });

  it('should not register with duplicate email', async () => {
    const res = await request(API_URL).post('/auth/register').send(testUser);
    expect(res.status).toBe(409);
  });

  it('should login with valid credentials', async () => {
    const res = await request(API_URL).post('/auth/login').send({
      email: testUser.email,
      password: testUser.password,
    });
    expect(res.status).toBe(200);
    expect(res.body.data.accessToken).toBeDefined();
  });

  it('should get current user', async () => {
    const res = await request(API_URL)
      .get('/auth/me')
      .set('Authorization', `Bearer ${accessToken}`);
    expect(res.status).toBe(200);
    expect(res.body.data.email).toBe(testUser.email);
  });

  it('should reject invalid token', async () => {
    const res = await request(API_URL)
      .get('/auth/me')
      .set('Authorization', 'Bearer invalid_token');
    expect(res.status).toBe(401);
  });
});
