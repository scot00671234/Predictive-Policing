import mongoose from 'mongoose';

const CrimeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['THEFT', 'ASSAULT', 'BURGLARY', 'ROBBERY', 'OTHER']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  timestamp: {
    type: Date,
    required: true
  },
  description: String,
  riskScore: Number
}, {
  timestamps: true
});

CrimeSchema.index({ location: '2dsphere' });

export const Crime = mongoose.model('Crime', CrimeSchema);