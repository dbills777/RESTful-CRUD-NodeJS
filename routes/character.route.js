//imports
import { Router } from 'express';

import {
  postAddCharacter,
  getAllCharcters,
  updateName,
  updateNickName,
  seachCharacters,
  deleteCharactersByID,
} from '../controllers/character.controller.js';

//export appRouter instances
export const characterRouter = Router();
// Post Product
characterRouter.post('/', postAddCharacter);
// Get products single and all
characterRouter.get('/', getAllCharcters);
characterRouter.get('/search', seachCharacters);
// Update Products
characterRouter.put('/update-name', updateName);
characterRouter.put('/update-nick-name', updateNickName);
// Delete one product
characterRouter.delete('/', deleteCharactersByID);
