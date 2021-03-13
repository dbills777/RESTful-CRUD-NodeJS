import { response } from 'express';
import { Character } from '../models/characters.js';

export const postAddCharacter = (req, res) => {
  console.log('***************************', req);
  const character = new Character({
    name: req.body.name,
    occupation: req.body.occupation,
    image: req.body.image,
    status: req.body.status,
    nickname: req.body.nickname,
    portrayed: req.body.portrayed,
    char_id: req.body.char_id,
    // birhtday: req.body.birhtday,
    // appearance: req.body.appearance,
    // category: req.body.category,
  });
  console.log(character);
  character.save();
  res.json(character);
};
// Example of other method for making requests

export const getAllCharcters = async (req, res) => {
  const chars = await Character.find();
  res.send(chars);
};

export const seachCharacters = async (req, res) => {
  try {
    let result = await Character.aggregate([
      {
        $search: {
          autocomplete: {
            query: `${req.query.term}`,
            path: 'name',
            fuzzy: {
              maxEdits: 2,
            },
          },
        },
      },
    ])

    res.send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getCharactersByID = async (req, res) => {
  const productID = req.body.productID;
  try {
    const product = await Product.findById(productID);
    if (!product) return res.status(400).json({ Message: 'Item with that productID is not found' });
    // console.log(`Product id: ${productID}`);
    res.json(product);
  } catch (error) {
    res.status(400).json({ Message: `Can't find Product ${err}` });
  }
};
export const updateName = async (req, res) => {
  const characterID = req.body.characterID;
  const newItemInfo = {
    name: req.body.name,
  };
  try {
    try {
      const char = await Character.findByIdAndUpdate(characterID, newItemInfo, { new: true });
      res.json(char);
    } catch (err) {
      res.status(400).json({ Message: `Could not update: ${err}` });
    }
  } catch (error) {
    res.status(400).json({ Message: `Invalid char ${err}` });
  }
};
export const updateNickName = async (req, res) => {
  const characterID = req.body.characterID;
  const newItemInfo = {
    nickname: req.body.nickname,
  };
  try {
    try {
      const char = await Character.findByIdAndUpdate(characterID, newItemInfo, { new: true });
      res.json(char);
    } catch (err) {
      res.status(400).json({ Message: `Could not update: ${err}` });
    }
  } catch (error) {
    res.status(400).json({ Message: `Invalid char ${err}` });
  }
};

export const deleteCharactersByID = async (req, res) => {
  const productID = req.body.productID;
  try {
    const deleteProduct = await Character.findByIdAndRemove(productID);
    if (!deleteProduct) {
      return res.status(400)({ Message: `Item with that ${productID} is not found` });
    }
    console.log(`Deleted: ${deleteProduct}`);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ Message: `Invalid ProductID ${error}` });
  }
};
