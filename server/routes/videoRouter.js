import express from 'express';
import asyncHandler from 'express-async-handler';
import Video from '../models/video.model.js';

const videoRoute = express.Router();

// GET ALL VIDEO
videoRoute.get(
  '/',
  asyncHandler(async (req, res) => {
    const videos = await Video.find({});
    res.json(videos);
  }),
);

export default videoRoute;