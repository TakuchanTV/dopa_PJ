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
       ):(
      <div className={styles.fixwidth}>
           <Makingtab />
           <Banner />
           <Gachadppokemon />
           <PagesChangetag/>
           <div className={styles.div}>
            <div className={styles.Div1}>
              <div className={styles.div1}>
               <img src={pokemonimg1} className={styles.img} /> 
                <div className={styles.list1}>
                 <span className={styles.span1}>
                 <img src={pokemon1} className={styles.img1}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon2} className={styles.img2}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon3} className={styles.img3}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon4} className={styles.img4}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon5} className={styles.img5}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon6} className={styles.img6}/>
                 </span>
                </div>
                <div>
                <button className={styles.button1_1} onClick={GachaConfirm}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>
                <button className={styles.button1_2} onClick={GachaConfirm10}>
                 <span className={styles.gacha}></span>
                 <span>10連ガチャ</span>
                </button>
                </div> 
                <button className={styles.button1_3} onClick={GachaConfirm100}>
                 <span className={styles.gacha}></span>
                 <span>100連ガチャ</span>
                </button>
              </div>
              <div className={styles.div1}>
               <img src={pokemonimg1} className={styles.img} /> 
                <div className={styles.list1}>
                 <span className={styles.span1}>
                 <img src={pokemon1} className={styles.img1}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon2} className={styles.img2}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon3} className={styles.img3}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon4} className={styles.img4}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon5} className={styles.img5}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon6} className={styles.img6}/>
                 </span>
                </div>
                <div>
                <button className={styles.button1_1} onClick={GachaConfirm}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>
                <button className={styles.button1_2} onClick={GachaConfirm10}>
                 <span className={styles.gacha}></span>
                 <span>10連ガチャ</span>
                </button>
                </div> 
                <button className={styles.button1_3} onClick={GachaConfirm100}>
                 <span className={styles.gacha}></span>
                 <span>100連ガチャ</span>
                </button>
              </div>
             
            </div>
            <div className={styles.Div2}>
            <div className={styles.div1}>
               <img src={pokemonimg1} className={styles.img} /> 
                <div className={styles.list1}>
                 <span className={styles.span1}>
                 <img src={pokemon1} className={styles.img1}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon2} className={styles.img2}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon3} className={styles.img3}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon4} className={styles.img4}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon5} className={styles.img5}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon6} className={styles.img6}/>
                 </span>
                </div>
                <div>
                <button className={styles.button1_1} onClick={GachaConfirm}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>
                <button className={styles.button1_2} onClick={GachaConfirm10}>
                 <span className={styles.gacha}></span>
                 <span>10連ガチャ</span>
                </button>
                </div> 
                <button className={styles.button1_3} onClick={GachaConfirm100}>
                 <span className={styles.gacha}></span>
                 <span>100連ガチャ</span>
                </button>
              </div>
              <div className={styles.div1}>
               <img src={pokemonimg1} className={styles.img} /> 
                <div className={styles.list1}>
                 <span className={styles.span1}>
                 <img src={pokemon1} className={styles.img1}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon2} className={styles.img2}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon3} className={styles.img3}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon4} className={styles.img4}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon5} className={styles.img5}/>
                 </span>
                 <span className={styles.span1}>
                 <img src={pokemon6} className={styles.img6}/>
                 </span>
                </div>
                <div>
                <button className={styles.button1_1} onClick={GachaConfirm}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>
                <button className={styles.button1_2} onClick={GachaConfirm10}>
                 <span className={styles.gacha}></span>
                 <span>10連ガチャ</span>
                </button>
                </div> 
                <button className={styles.button1_3} onClick={GachaConfirm100}>
                 <span className={styles.gacha}></span>
                 <span>100連ガチャ</span>
                </button>
              </div>
            </div>
          </div>
        <Footer /> 
         </div>
          )
    )
        }
        
