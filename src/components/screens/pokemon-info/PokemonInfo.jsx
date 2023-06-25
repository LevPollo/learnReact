import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom"
import { PokemonService } from "../../../services/pokemon.service";
import PokemonItem from "../home/pokemon-item/PokemonItem";

const PokemonInfo = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState()


  useEffect(()=>{
    
    if(!id) return
    
    const fetchData = async () =>  {
      
      const data = await PokemonService.getById(id);   
      setPokemon(data);  
   
    }
    fetchData();
  },[id]);
  if (!pokemon) return <p>wait..</p>
  return <div> 
        <Link to='/'>Main</Link> 
        <PokemonItem pokemon={pokemon}/>
        </div>
  
}

export default PokemonInfo