import axios from "axios";

export const PokemonService = {
  async getAll() {
    const responce = await axios.get('http://localhost:3000/pokemons');
    return responce.data;
  },

  async getById(id) {
    const responce = await axios.get(`http://localhost:3000/pokemons/${id}`)
    return responce.data;
  }
}