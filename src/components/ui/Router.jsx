import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../screens/home/Home.jsx'
import PokemonInfo from "../screens/pokemon-info/PokemonInfo.jsx"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<PokemonInfo />} path='/:id' />

        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router