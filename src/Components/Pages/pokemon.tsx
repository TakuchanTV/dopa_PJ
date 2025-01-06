import React from "react"
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/pokemon.module.css"
import pokemonimg1 from "../Images/ポケモンページの写真/pokemonimg1.png"
import pokemonimg2 from "../Images/ポケモンページの写真/pokemonimg2.png"
import pokemonimg3 from "../Images/ポケモンページの写真/pokemonimg3.png"
import pokemonimg4 from "../Images/ポケモンページの写真/pokemonimg4.png"
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
export const Pokemon = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/")
    }
    return (
        <div>
            <Makingtab />
            <Banner />
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
                  {/* <img src={pokemonimg3} className={styles.img} />   */}
                 </div>
                 <div className={styles.div4}>
                  {/* <img src={pokemonimg4} className={styles.img} />   */}
                 </div>
               </div>
             </div>
           <Footer />
        </div>
    )
};