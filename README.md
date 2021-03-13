# RESTful CRUD Node Server

## Mongoose as your data modeling tool
## Cloud-based MongoDB as your data store
## At least 3 endpoints to GET data from your server
```javascript
const getCharacters = async () => {
    try {
      const response = await axios.get(url);
      const sorted = response.data.sort((a, b) => a.char_id - b.char_id);
      setCharacters(sorted);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);
```
```javascript
const handleSeach = async () => {
    try {
      const response = await axios.get(`${url}/search?term=${searchTerm}`);
      const sorted = response.data.sort((a, b) => a.char_id - b.char_id);
      setCharacters(sorted);
    } catch (error) {
      console.log(error);
    }
  };
```
```javascript
export const EpisodeContextProvider = (props) => {
  const [episodes, setEpisodes] = useState([]);

  const url = 'http://localhost:5000/episode';
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(url);
        setEpisodes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCharacters();
  }, []);
```
## At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
```javascript
const editInfoInDB = async () => {
    closeEditDialog();
    console.log(newName);
    console.log(currentCharacter);
    if (newName) {
      try {
        await axios.put(`${url}/update-name`, {
          characterID: currentCharacter._id,
          name: newName,
        });
        setNewName('');
        getCharacters();
      } catch (error) {
        console.error(error);
      }
    }
    if (newNickName) {
      try {
        await axios.put(`${url}/update-nick-name`, {
          characterID: currentCharacter._id,
          nickname: newNickName,
        });
        setNewName('');
        getCharacters();
      } catch (error) {
        console.error(error);
      }
    }
  };
```
## At least 1 endpoint allowing user to create an item via POST
```javascript
const postNewCharacter = async () => {
    console.log(postData);
    try {
      await axios.post(`${url}/`, {
        name: postData.name,
        image: postData.image,
        nickname: postData.nickname,
        occupation: postData.occupation,
        status: postData.status,
        portrayed: postData.portrayed,
        char_id: postData.char_id,
      });
    } catch (error) {
      console.error(error);
    }
    getCharacters();
  };
  const url = 'http://localhost:5000/character';
  const getCharacters = async () => {
    try {
      const response = await axios.get(url);
      const sorted = response.data.sort((a, b) => a.char_id - b.char_id);
      setCharacters(sorted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);
```
## At least 1 endpoint allowing user to delete an item via DELETE
```javascript
const deleteFromDB = async () => {
    setOpenDialog(!openDialog);
    try {
      await axios.delete(`${url}`, {
        data: {
          productID: currentCharacter._id,
        },
      });
      getCharacters();
    } catch (error) {
      console.error(error);
    }
  };
```
## Your datastore will contain at least 25 items
## Your app will be deployed to production using some service like Heroku, Digital Ocean, etc.
## All of your source code will be properly uploaded to GitHub
## Your ReadMe file will accurately describe the server install process (if any) and how to use the APIs from your web client.
