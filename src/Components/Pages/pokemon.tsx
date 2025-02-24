import React, { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/pokemon.module.css"
import pokemonimg1 from "../Images/ポケモンページの写真/pokemonimg1.png"

import pokemon1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"

import { PagesChangetag } from "../Header/PagesChange.tsx";
import { Loadingdots } from "../Loading/Loadingdots.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachadppokemon } from "../Header/Navigatedp/Gachadppokemon.tsx";
import { PCpokemon } from "../PCpages/PCpages/PCpokemon.tsx";
import { ResPokemon } from "../Responsivepages/ResPokemon.tsx";
export const Pokemon = () => {
const GachaConfirm = ()  => {
  if (window.confirm("使用ポイント確認 \n 500PT消費して1枚引く")){
   window.alert("ありがとうございます")
  }else{
  }
}
const GachaConfirm10 = ()  => {
  if (window.confirm("使用ポイント確認 \n 5000PT消費して1枚引く")){
   window.alert("ありがとうございます")
  }else{
  }
}
const GachaConfirm100 = ()  => {
  if (window.confirm("使用ポイント確認 \n 50000PT消費して1枚引く")){
   window.alert("ありがとうございます")
  }else{
  }
}
const [isVisable, setIsVisable] = useState(true)
useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisable(false)
  },2500)
  return () => clearTimeout(timer)
},[])
    return(
       isVisable ? (
        <Loadingsquares />
       ):(<ResPokemon />))}
        
