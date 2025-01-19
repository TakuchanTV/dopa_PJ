import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Loadingsquares } from '../Loading/Loadingsquares.tsx'
import { Loadingdots } from '../Loading/Loadingdots.tsx'
import { Makingtab } from '../Header/Makingtab.tsx'
import { Banner } from '../Header/Banner.tsx'
import { Gachadppokemon } from '../Header/Navigatedp/Gachadppokemon.tsx'
import { PagesChangetag } from '../Header/PagesChange.tsx'
import styles from "../ModuleCSS/pokemon.module.css"
import styles2 from "../Responsivepages/ResponsiveCSS/ResPokemon.module.css"
import pokemonimg1 from "../Images/ポケモンページの写真/pokemonimg1.png"
import pokemon1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"
import { PCpokemon } from '../PCpages/PCpages/PCpokemon.tsx'
import { PhonePokemon } from '../Phonepages/Phonepages/PhonePokemon.tsx'



export const ResPokemon = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <PCpokemon />}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <PhonePokemon />}
    </div>
  )
}

