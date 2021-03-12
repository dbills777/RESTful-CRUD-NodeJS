//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import {
  postAddProduct,
  getAllProducts,
  deleteProductByID,
  getProductsThen,
  getProductByID,
  putUpdateOneProduct,
} from '../controllers/product.controller.js';

//export appRouter instances
export const productRouter = Router();
// Post Product
productRouter.post('/', postAddProduct);
// Get products single and all
// extra example of other method of getting products.
productRouter.get('/then', getProductsThen);
productRouter.get('/', getAllProducts);
productRouter.get('/getone', getProductByID);
// Update Products
productRouter.put('/updateone', putUpdateOneProduct);
// Delete one product
productRouter.delete('/', deleteProductByID);
