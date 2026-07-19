import fs from 'fs/promises';
import path from 'path';
import { env } from '../config/env.js';
import { AppError } from '../utils/AppError.js';

class LocalStorageService {
  constructor() {
    this.baseDir = env.UPLOAD_DIR;
    this.ensureDir();
  }

  async ensureDir() {
    try {
      await fs.mkdir(this.baseDir, { recursive: true });
    } catch {
      // Directory already exists
    }
  }

  async saveFile(filename, buffer) {
    const filePath = path.join(this.baseDir, filename);
    await fs.writeFile(filePath, buffer);
    return { path: filePath, filename };
  }

  async getFile(filename) {
    const filePath = path.join(this.baseDir, filename);
    try {
      const buffer = await fs.readFile(filePath);
      return buffer;
    } catch {
      throw new AppError('File not found.', 404);
    }
  }

  async deleteFile(filename) {
    const filePath = path.join(this.baseDir, filename);
    try {
      await fs.unlink(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async fileExists(filename) {
    const filePath = path.join(this.baseDir, filename);
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}

// Strategy pattern: easily swap for S3 later
export const storageService = new LocalStorageService();
