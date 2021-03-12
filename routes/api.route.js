//imports
import { Router } from 'express';

// use api.conroller for exporting functions
import { api, status } from '../controllers/api.controller.js';

//export appRouter instance
export const apiRouter = Router();

// "/api" Route  that returns a JSON object
apiRouter.get('/', api);
apiRouter.get('/status', status);
//this is a test