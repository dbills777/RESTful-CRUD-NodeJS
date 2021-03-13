//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import { postAddEpisodes, getAllEpisodes } from '../controllers/episode.controller.js';

export const episodeRouter = Router();
// Post Product
episodeRouter.post('/', postAddEpisodes);
episodeRouter.get('/', getAllEpisodes);
