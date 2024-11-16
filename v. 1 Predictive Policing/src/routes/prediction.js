import express from 'express';
import { PredictionService } from '../services/PredictionService.js';
import { logger } from '../utils/logger.js';

const router = express.Router();

router.post('/hotspots', async (req, res) => {
  try {
    const { area, timeframe } = req.body;
    const predictions = await PredictionService.predictHotspots(area, timeframe);
    res.json(predictions);
  } catch (error) {
    logger.error('Error in hotspot prediction route:', error);
    res.status(500).json({ error: 'Failed to generate predictions' });
  }
});

export default router;