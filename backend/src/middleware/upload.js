import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { env } from '../config/env.js';
import { AppError } from '../utils/AppError.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, env.UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${uuidv4()}${ext}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new AppError('Only PDF files are allowed.', 400), false);
  }
};

const limits = {
  fileSize: parseInt(env.MAX_FILE_SIZE) || 52428800, // 50MB
  files: 20,
};

// Single file upload
export const uploadMiddleware = multer({ storage, fileFilter, limits });

// Multiple files upload (1-20 PDFs)
export const uploadMultipleMiddleware = multer({ storage, fileFilter, limits });
