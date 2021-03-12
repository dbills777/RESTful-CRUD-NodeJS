//imports
import { apiRouter } from './routes/api.route.js';
import { productRouter } from './routes/product.route.js';
import { storeRouter } from './routes/store.route.js';
import { characterRouter } from './routes/character.route.js';
import bodyparser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import path from 'path';
mongoose.set('useFindAndModify', false);
dotenv.config();

// path imports and constants for serving public files
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app & port
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
//tell apiRouter to serve public folder
app.use(express.static('public'));

//tell app to use routes
app.use('/api', (req, res, next) => {
  console.log(
    `just hit custom middleware for Api route Can Hit an api or do other things here!: ${new Date().toLocaleDateString()}`
  );
  next();
});
app.use('/api', apiRouter);
app.use('/product', productRouter);
app.use('/character', characterRouter);
app.use('/store', storeRouter);

// Form
app.get('/form', (req, res) => {
  res.sendFile('./public/productForm.html', { root: __dirname });
});
app.use((req, res, next) => {
  res.sendFile('./public/404.html', { root: __dirname });
});

//listen on assigned env port or default port
const main = async () => {
  await mongoose.connect(`${process.env.DGM4790_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(process.env.PORT || port, () => console.log(` App LIstening at http://localhost:${port}`));
};
main();
