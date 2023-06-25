import styles from './Home.module.css'
// import { pokemons as pokemonsData } from './pokemon.data.js'
import PokemonItem from './pokemon-item/PokemonItem.jsx'
// import CreatePokemonForm from './create-pokemon-form/CreatePokemonForm.jsx'
import { useEffect, useState } from 'react'
import { PokemonService } from '../../../services/pokemon.service'

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(()=>{
    const fetchData = async () =>  {
      const data = await PokemonService.getAll();
      
      setPokemons(data);    
    }
    fetchData();
  },[]);

  return (
    <div className={styles.page}>
      <h1>Pokemon catalog</h1>
      {/* <CreatePokemonForm setPokemons={setPokemons} /> */}
      <div className={styles.catalog}>
        {pokemons.length ? pokemons.map(pokemon => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))
          : <p>There are no pokemons</p>
        }
      </div>
    </div>
  );
}

export default Home;
