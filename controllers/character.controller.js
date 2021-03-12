import { Character } from '../models/characters.js';

export const postAddCharacter = (req, res) => {
  console.log("***************************", req);
  const character = new Character({
    char_id: req.body.char_id,
    name: req.body.name,
    birhtday: req.body.birhtday,
    occupation: req.body.occupation,
    img: req.body.img,
    status: req.body.status,
    nickname: req.body.nickname,
    appearance: req.body.appearance,
    portrayed: req.body.portrayed,
    category: req.body.category,
  });
  console.log(character);
  character.save();
    res.json(character);
};
// Example of other method for making requests

export const getAllCharcters = async (req, res) => {
  const products = await Character.find();
  res.send(products);
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
export const putUpdateOneCharacter = async (req, res) => {
  const productID = req.body.productID;
  const newItemInfo = {
    name: req.body.name,
    // price: req.body.price,
    // description: req.body.description,
    // imgURL: req.body.imgURL,
  };
  try {
    try {
      const product = await Character.findByIdAndUpdate(productID, newItemInfo, { new: true });
      res.json(product);
    } catch (err) {
      res.status(400).json({ Message: `Could not update: ${err}` });
    }
  } catch (error) {
    res.status(400).json({ Message: `Invalid Product ${err}` });
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
