//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import {
  postAddCharacter,
  getAllCharcters,
  getCharactersByID,
  putUpdateOneCharacter,
  deleteCharactersByID,
} from '../controllers/character.controller.js';

//export appRouter instances
export const characterRouter = Router();
// Post Product
characterRouter.post('/', postAddCharacter);
// Get products single and all
characterRouter.get('/', getAllCharcters);
characterRouter.get('/getone', getCharactersByID);
// Update Products
characterRouter.put('/updateone', putUpdateOneCharacter);
// Delete one product
characterRouter.delete('/', deleteCharactersByID);
