//imports
import { apiRouter } from './routes/api.route.js';
import { productRouter } from './routes/product.route.js';
import { storeRouter } from './routes/store.route.js';
import { episodeRouter } from './routes/episode.route.js';
import { characterRouter } from './routes/character.route.js';
import bodyparser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.set('useFindAndModify', false);
dotenv.config();

// app & port
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//tell apiRouter to serve public folder

//tell app to use routes
app.use('/api', (req, res, next) => {
  console.log(
    `just hit custom middleware for Api route Can Hit an api or do other things here!: ${new Date().toLocaleDateString()}`
  );
  next();
});
app.use('/api', apiRouter);
// app.use('/product', productRouter); Used for testing mongoDB pushing
app.use('/character', characterRouter);
// app.use('/store', storeRouter); used to push items to mongoDB
app.use('/episode', episodeRouter); 

//listen on assigned env port or default port
const main = async () => {
  await mongoose.connect(`${process.env.DGM4790_CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(process.env.PORT || port, () => console.log(` App LIstening at http://localhost:${port}`));
};
main();
