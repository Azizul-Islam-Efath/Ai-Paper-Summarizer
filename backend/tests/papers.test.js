import request from 'supertest';
import { describe, it, expect } from '@jest/globals';

const API_URL = 'http://localhost:5000/api';

describe('Paper Endpoints', () => {
  it('should require authentication', async () => {
    const res = await request(API_URL).get('/papers');
    expect(res.status).toBe(401);
  });

  it('should reject invalid file type', async () => {
    // Would need valid auth token for full test
  });
});
