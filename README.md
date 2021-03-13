# RESTful CRUD Node Server Assignment

## Mongoose as your data modeling tool

## Cloud-based MongoDB as your data store

## At least 3 endpoints to GET data from your server

```javascript
//Use route in app.js
app.use('/character', characterRouter);
//Specify endpoint
characterRouter.get('/', getAllCharcters);
// Example Get
const response = await axios.get(`${url}/character`);
```

```javascript
//Use route in app.js
app.use('/character', characterRouter);
//Specify endpoint
characterRouter.get('/search', seachCharacters);
// Example query
const response = await axios.get(`${url}/search?term=${searchTerm}`);
```

```javascript
//Use route in app.js
app.use('/episode', episodeRouter);
//Specify endpoint
episodeRouter.get('/', getAllEpisodes);
// Example GET
const response = await axios.get(`${url}/episode`);
```

## At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs

```javascript
//Use route in app.js
app.use('/character', characterRouter);

//Specify endpoint
characterRouter.put('/update-name', updateName);
characterRouter.put('/update-nick-name', updateNickName);
// Example PUT Requests
await axios.put(`${url}/update-name`, {
  characterID: currentCharacter._id,
  name: newName,
});
await axios.put(`${url}/update-nick-name`, {
  characterID: currentCharacter._id,
  nickname: newNickName,
});
```

## At least 1 endpoint allowing user to create an item via POST

```javascript

//Use route in app.js
app.use('/character', characterRouter);
//Specify endpoint
characterRouter.post('/', postAddCharacter);
// Example post
 await axios.post(`${url}/character`, {
      name: postData.name,
      image: postData.image,
      nickname: postData.nickname,
      occupation: postData.occupation,
      status: postData.status,
      portrayed: postData.portrayed,
      char_id: postData.char_id,
    });
```
## At least 1 endpoint allowing user to delete an item via DELETE

```javascript
//Use route in app.js
app.use('/character', characterRouter);
//Specify endpoint
characterRouter.delete('/', deleteCharactersByID);
// Example Delete
    await axios.delete(`${url}/character`, {
      data: {
        productID: currentCharacter._id,
      },
    });
```

## Your datastore will contain at least 25 items
- contains 60+ items

## Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.

## All of your source code will be properly uploaded to GitHub

## Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs from your web client.
