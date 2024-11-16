# Predictive Crime Analysis System

Advanced crime prediction and analysis system built with Node.js, utilizing machine learning and GIS technologies.

## Features

- Historical crime data analysis
- Hotspot prediction
- Risk assessment modeling
- Geospatial analysis
- Pattern recognition
- Real-time data integration

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a .env file with:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

- POST /api/predictions/hotspots - Generate crime hotspot predictions

## Technologies

- Node.js/Express
- MongoDB/Mongoose
- ML-Regression
- Turf.js for geospatial analysis
- Chart.js for visualization