import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/pokemon.module.css"
import pokemonimg1 from "../Images/ポケモンページの写真/pokemonimg1.png"
import pokemonimg2 from "../Images/ポケモンページの写真/pokemonimg2.png"
import pokemonimg3 from "../Images/ポケモンページの写真/pokemonimg3.png"
import pokemonimg4 from "../Images/ポケモンページの写真/pokemonimg4.png"
import pokemonimg5 from "../Images/ポケモンページの写真/pokemonimg5.png"
import pokemonimg6 from "../Images/ポケモンページの写真/pokemonimg6.png"
import pokemon1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"
import pokemon2_1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon1.png"
import pokemon2_2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon2.png"
import pokemon2_3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon3.png"
import pokemon2_4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon4.png"
import pokemon2_5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン2のリスト写真/pokemon5.png"
import pokemon3_1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg1.png"
import pokemon3_2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg2.png"
import pokemon3_3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg3.png"
import pokemon3_4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg4.png"
import pokemon3_5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg5.png"
import pokemon3_6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン3のリスト写真/pokemonimg6.png"
import pokemon4_1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg1.png"
import pokemon4_2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg2.png"
import pokemon4_3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg3.png"
import pokemon4_4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg4.png"
import pokemon4_5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg5.png"
import pokemon4_6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン4のリスト写真/pokemonimg6.png"
import pokemon5_1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン5のリスト写真/pokemonimg1.png"
import pokemon5_2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン5のリスト写真/pokemonimg2.png"
import pokemon5_3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン5のリスト写真/pokemonimg3.png"
import pokemon5_4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン5のリスト写真/pokemonimg4.png"
import pokemon5_5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン5のリスト写真/pokemonimg5.png"
import pokemon5_6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン5のリスト写真/pokemonimg6.png"
import pokemon6_1 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン6のリスト写真/pokemonimg1.png"
import pokemon6_2 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン6のリスト写真/pokemonimg2.png"
import pokemon6_3 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン6のリスト写真/pokemonimg3.png"
import pokemon6_4 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン6のリスト写真/pokemonimg4.png"
import pokemon6_5 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン6のリスト写真/pokemonimg5.png"
import pokemon6_6 from "../Images/ポケモンページの写真/ポケモンページのリスト/ポケモン6のリスト写真/pokemonimg6.png"
import { PagesChangetag } from "../Header/PagesChange.tsx";
import { Loadingdots } from "../Loading/Loadingdots.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
export const Pokemon = () => {
const [isVisable, setIsVisable] = useState(true)
useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisable(false)
  },2500)
  return () => clearTimeout(timer)
},[])
    return(
       isVisable ? (
              <div className={spinerstyles.spindiv}>
                <div className={spinerstyles.spinnerbox}>
                  <div className={spinerstyles.pulsecontainer}>
                     <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble1}`}></div>
                     <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble2}`}></div>
                     <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble3}`}></div>
                 </div>
               </div>
              </div>
              ):(
      <div>
           <Makingtab />
           <Banner />
           <PagesChangetag/>
           <div>
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
                <button className={styles.button1}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>
              </div>
              <div className={styles.div2}>
               <img src={pokemonimg2} className={styles.img} /> 
               <div className={styles.list2}>
               <span className={styles.span2}>
                 <img src={pokemon2_1} className={styles.img1}/>
                 </span>
                 <span className={styles.span2}>
                 <img src={pokemon2_2} className={styles.img2}/>
                 </span>
                 <span className={styles.span2}>
                 <img src={pokemon2_3} className={styles.img3}/>
                 </span>
                 <span className={styles.span2}>
                 <img src={pokemon2_4} className={styles.img4}/>
                 </span>
                 <span className={styles.span2}>
                 <img src={pokemon2_5} className={styles.img5}/>
                 </span>
                </div>
                <button className={styles.button2}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>  
              </div>
            </div>
            <div className={styles.Div2}>
              <div className={styles.div3}>
               <img src={pokemonimg3} className={styles.img} /> 
               <div className={styles.list3}>
               <span className={styles.span3}>
                 <img src={pokemon3_1} className={styles.img1}/>
                 </span>
                 <span className={styles.span3}>
                 <img src={pokemon3_2} className={styles.img2}/>
                 </span>
                 <span className={styles.span3}>
                 <img src={pokemon3_3} className={styles.img3}/>
                 </span>
                 <span className={styles.span3}>
                 <img src={pokemon3_4} className={styles.img4}/>
                 </span>
                 <span className={styles.span3}>
                 <img src={pokemon3_5} className={styles.img5}/>
                 </span>
                 <span className={styles.span3}>
                 <img src={pokemon3_6} className={styles.img6}/>
                 </span>
                </div>
                <button className={styles.button3}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>  
              </div>
              <div className={styles.div4}>
               <img src={pokemonimg4} className={styles.img} />
               <div className={styles.list4}>
               <span className={styles.span4}>
                 <img src={pokemon4_1} className={styles.img1}/>
                 </span>
                 <span className={styles.span4}>
                 <img src={pokemon4_2} className={styles.img2}/>
                 </span>
                 <span className={styles.span4}>
                 <img src={pokemon4_3} className={styles.img3}/>
                 </span>
                 <span className={styles.span4}>
                 <img src={pokemon4_4} className={styles.img4}/>
                 </span>
                 <span className={styles.span4}>
                 <img src={pokemon4_5} className={styles.img5}/>
                 </span>
                 <span className={styles.span4}>
                 <img src={pokemon4_6} className={styles.img6}/>
                 </span>
                </div>
                <button className={styles.button4}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>    
              </div>
            </div>
            <div className={styles.Div3}>
            <div className={styles.div5}>
               <img src={pokemonimg5} className={styles.img} /> 
               <div className={styles.list5}>
               <span className={styles.span5}>
                 <img src={pokemon5_1} className={styles.img1}/>
                 </span>
                 <span className={styles.span5}>
                 <img src={pokemon5_2} className={styles.img2}/>
                 </span>
                 <span className={styles.span5}>
                 <img src={pokemon5_3} className={styles.img3}/>
                 </span>
                 <span className={styles.span5}>
                 <img src={pokemon5_4} className={styles.img4}/>
                 </span>
                 <span className={styles.span5}>
                 <img src={pokemon5_5} className={styles.img5}/>
                 </span>
                 <span className={styles.span5}>
                 <img src={pokemon5_6} className={styles.img6}/>
                 </span>
                </div>
                <div className={styles.button}>
                <button className={styles.button5_1}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>  
                <button className={styles.button5_2}>
                 <span className={styles.gacha}></span>
                 <span>10連ガチャ</span>
                </button>  
                </div>
              </div>
              <div className={styles.div6}>
               <img src={pokemonimg6} className={styles.img} /> 
               <div className={styles.list6}>
               <span className={styles.span6}>
                 <img src={pokemon6_1} className={styles.img1}/>
                 </span>
                 <span className={styles.span6}>
                 <img src={pokemon6_2} className={styles.img2}/>
                 </span>
                 <span className={styles.span6}>
                 <img src={pokemon6_3} className={styles.img3}/>
                 </span>
                 <span className={styles.span6}>
                 <img src={pokemon6_4} className={styles.img4}/>
                 </span>
                 <span className={styles.span6}>
                 <img src={pokemon6_5} className={styles.img5}/>
                 </span>
                 <span className={styles.span6}>
                 <img src={pokemon6_6} className={styles.img6}/>
                 </span>
                </div>
                <button className={styles.button6}>
                 <span className={styles.gacha}></span>
                 <span>1回ガチャ</span>
                </button>  
              </div>
            </div>
          </div>
        <Footer /> 
         </div>
          )
    )
        }
        
