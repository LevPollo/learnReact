import { Link, useNavigate } from 'react-router-dom';
import styles from '../Home.module.css'
import PropTypes from 'prop-types'


const PokemonItem = ({ pokemon }) => {
  // const navigate = useNavigate();
    return  (
   
      <div key={pokemon.id} className={styles.item}>
        <h2>{pokemon.name}</h2>
        <div
          className={styles.image}
          style={{
          backgroundImage: `url(${pokemon.image})`
          }}
        />
        <p>{pokemon.stars} stars</p>
        {/* <button onClick={() => navigate(`/${pokemon.id}`)}>Read more</button> */}
        <Link className = {styles.btn} to={`/${pokemon.id}`}>Read more</Link>
    </div>);
}

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonItem