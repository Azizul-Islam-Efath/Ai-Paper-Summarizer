# Deployment Guide

## Prerequisites
- Docker & Docker Compose
- Node.js 20+
- MySQL 8.0+
- Google Gemini API Key
- Domain name (for production)

## Environment Setup

### 1. Backend Environment Variables
Create `backend/.env`:
```
PORT=5000
NODE_ENV=production
DATABASE_URL=mysql://user:pass@host:3306/research_workspace
JWT_SECRET=<generate-strong-random-string>
JWT_REFRESH_SECRET=<generate-strong-random-string>
GEMINI_API_KEY=AIzaSy...
FRONTEND_URL=https://your-domain.com
MAX_FILE_SIZE=52428800
UPLOAD_DIR=./uploads
```

### 2. Frontend Environment Variables
Create `frontend/.env`:
```
VITE_API_URL=https://api.your-domain.com/api
```

## Docker Deployment

```bash
# Build and start all services
docker-compose up -d --build

# Run database migrations
docker-compose exec backend npx prisma migrate deploy

# Seed database (optional)
docker-compose exec backend npx prisma db seed
```

## Manual Deployment

### Backend
```bash
cd backend
npm install --production
npx prisma generate
npx prisma migrate deploy
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run build
# Serve dist/ with Nginx or any static server
```

## Database Migration
Always use `prisma migrate deploy` in production, never `prisma migrate dev`.

```bash
npx prisma migrate deploy
```

## Storage Migration
For production, swap local disk storage for S3:
1. Create `services/s3StorageService.js` implementing the same interface
2. Update `storageService.js` to use S3 based on env flag
3. Configure AWS credentials

## SSL/HTTPS
Use Let's Encrypt with Nginx or your cloud provider's load balancer.

## Rollback Procedure
1. Revert to previous Docker image tag
2. Run `prisma migrate deploy` to sync DB
3. Verify health endpoint: `GET /health`

## Monitoring
- Set up uptime monitoring (e.g., UptimeRobot)
- Configure Sentry for error tracking
- Use CloudWatch/Datadog for log aggregation
