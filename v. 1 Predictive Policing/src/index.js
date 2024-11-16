import express from 'express';
import { setupRoutes } from './routes/index.js';
import { connectDB } from './config/database.js';
import { logger } from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize routes
setupRoutes(app);

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();