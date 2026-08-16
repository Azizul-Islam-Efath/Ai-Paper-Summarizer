import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { env } from './config/env.js';
import { prisma } from './config/prisma.js';
import { logger } from './utils/logger.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { globalLimiter } from './middleware/rateLimiter.js';

import authRoutes from './routes/authRoutes.js';
import paperRoutes from './routes/paperRoutes.js';
import summaryRoutes from './routes/summaryRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import generatedPaperRoutes from './routes/generatedPaperRoutes.js';

const app = express();

// Trust reverse proxy (required for Render HTTPS & cross-site secure cookies)
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());
// Always-allowed origins (production + local dev)
const HARDCODED_ORIGINS = [
  'https://ai-paper-summarizer-ten.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
];

// Also support any extra origins from FRONTEND_URL env var (comma-separated)
const envOrigins = (env.FRONTEND_URL || '')
  .split(',')
  .map((o) => o.trim().replace(/\/$/, '')) // strip trailing slash
  .filter(Boolean);

const allowedOrigins = [...new Set([...HARDCODED_ORIGINS, ...envOrigins])];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (curl, Render health checks, mobile apps)
    if (!origin) return callback(null, true);
    // Strip trailing slash from incoming origin before comparing
    const normalised = origin.replace(/\/$/, '');
    if (allowedOrigins.includes(normalised)) return callback(null, true);
    logger.warn(`CORS blocked origin: ${origin}`);
    callback(new Error(`CORS blocked: ${origin}`));
  },
  credentials: true,
}));
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(morgan('combined', { stream: { write: (msg) => logger.info(msg.trim()) } }));

// Rate limiting
app.use(globalLimiter);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/papers', paperRoutes);
app.use('/api/summaries', summaryRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/generated-papers', generatedPaperRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Graceful shutdown
const server = app.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);
});

const gracefulShutdown = async (signal) => {
  logger.info(`${signal} received. Starting graceful shutdown...`);
  server.close(async () => {
    await prisma.$disconnect();
    logger.info('Server closed. Database disconnected.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
