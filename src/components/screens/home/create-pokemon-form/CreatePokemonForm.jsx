import styles from './CreatePokemonForm.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react'


const clearData = {
  price: '',
  name: '',
  image: '', 
  stars: '',
}

const CreatePokemonForm = ({ setPokemons }) => {
  const [data, setData] = useState({
    name: '', stars: '', price: '', image: '', 
  })

 

  const createPokemon = (e) => {
    e.preventDefault();
    setPokemons(prev => [...prev, { id: prev.length + 1, ...data,  currency: 'USD' }]);

    setData(clearData);
  }

  return (
    <form>
      <h3>Create Pokemon form</h3>
      <input placeholder='Name' onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name} />
      <input placeholder='Image' onChange={e => setData(prev => ({...prev, image: e.target.value}))}  value={data.image} />
      <input placeholder='Stars' onChange={e => setData(prev => ({...prev, stars: e.target.value}))}  value={data.stars} />
      <input placeholder='Price' onChange={e => setData(prev => ({...prev, price: e.target.value}))}  value={data.price} />
      

      <button onClick={e => createPokemon(e)}>Create</button>
    </form>
  );

  
}

CreatePokemonForm.propTypes = {
  setPokemons: PropTypes.func.isRequired,
};

export default CreatePokemonForm;