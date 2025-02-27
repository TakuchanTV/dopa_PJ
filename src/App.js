import { HashRouter, Route,Routes, useNavigate } from 'react-router-dom';
import {PageRouter} from './Components/Router/PageRouter';
import './App.css';
import { Footer } from './Components/Footer/Footer.tsx';
import { Makingtab } from './Components/Header/Makingtab.tsx';
import {Banner} from "./Components/Header/Banner.tsx";
import styles from "../src/Components/ModuleCSS/home.module.css"
import pokemonimg1 from "../src/Components/Images/ポケモンページの写真/pokemonimg1.png"

import pokemon1 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"


import {PagesChangetag } from './Components/Header/PagesChange.tsx';
import { Loadingdots } from './Components/Loading/Loadingdots.tsx';
import { Loadingsquares } from './Components/Loading/Loadingsquares.tsx';
import { useEffect, useState } from 'react';
import { Gachadppokemon } from './Components/Header/Navigatedp/Gachadppokemon.tsx';
import { Pokemon } from './Components/Pages/pokemon.tsx';
import { PCpokemon } from './Components/PCpages/PCpages/PCpokemon.tsx';
import { ResPokemon } from './Components/Responsivepages/ResPokemon.tsx';
const Home = () => {
  const [isVisable, setIsVisable] = useState(true)
      useEffect(() => {
            const timer = setTimeout(() => {
              setIsVisable(false)
            },3000);
            return () => clearTimeout(timer)
          },[])
  
  return (
    isVisable ? (
      <Loadingsquares />
    ) : (<ResPokemon />)
  )
}
const URL = process.env.PUBLIC_URL;
function App() {
  return (
    <div >
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <PageRouter/>
      </HashRouter>
    </div>
  );
}

export default App;
