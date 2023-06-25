import express from 'express';
import {pokemons as pokemonsData} from './data.js';

const app = express();


// Middleware для обработки заголовков CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(' пук! ой..');
});

app.get('/pokemons', (req,res) => {
  const pokemons = pokemonsData; 
  
  res.json(pokemons);
})

app.get('/pokemons/:id', (req,res) => {
  const objectId = req.params.id;
  const pokemons = pokemonsData; 
  
  res.json(pokemons[objectId - 1]);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// node server.js