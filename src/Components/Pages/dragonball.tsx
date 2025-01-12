import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/dragonball.module.css"
import dragonballimg1 from "../Images/ドラゴンボールページの写真/dragonballimg1.png"
import dragonballimg2 from "../Images/ドラゴンボールページの写真/dragonballimg2.png"
import dragonballimg3 from "../Images/ドラゴンボールページの写真/dragonballimg3.png"
import dragonballimg4 from "../Images/ドラゴンボールページの写真/dragonballimg4.png"
import dragonballimg5 from "../Images/ドラゴンボールページの写真/dragonballimg5.png"
import dragonballimg6 from "../Images/ドラゴンボールページの写真/dragonballimg6.png"
import dragonball1    from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg1.png"
import dragonball2    from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg2.png"
import dragonball3    from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg3.png"
import dragonball4    from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg4.png"
import dragonball5    from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg5.png"
import dragonball6    from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg6.png"
import dragonball2_1  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg1.png"
import dragonball2_2  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg2.png"
import dragonball2_3  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg3.png"
import dragonball2_4  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg4.png"
import dragonball2_5  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg5.png"
import dragonball3_1  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg1.png"
import dragonball3_2  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg2.png"
import dragonball3_3  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg3.png"
import dragonball3_4  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg4.png"
import dragonball3_5  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg5.png"
import dragonball3_6  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg6.png"
import dragonball4_1  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg1.png"
import dragonball4_2  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg2.png"
import dragonball4_3  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg3.png"
import dragonball4_4  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg4.png"
import dragonball4_5  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg5.png"
import dragonball4_6  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール4のリスト写真/dragonballimg6.png"
import dragonball5_1  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール5のリスト写真/dragonballimg1.png"
import dragonball5_2  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール5のリスト写真/dragonballimg2.png"
import dragonball5_3  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール5のリスト写真/dragonballimg3.png"
import dragonball5_4  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール5のリスト写真/dragonballimg4.png"
import dragonball5_5  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール5のリスト写真/dragonballimg5.png"
import dragonball5_6  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール5のリスト写真/dragonballimg6.png"
import dragonball6_1  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール6のリスト写真/dragonballimg1.png"
import dragonball6_2  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール6のリスト写真/dragonballimg2.png"
import dragonball6_3  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール6のリスト写真/dragonballimg3.png"
import dragonball6_4  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール6のリスト写真/dragonballimg4.png"
import dragonball6_5  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール6のリスト写真/dragonballimg5.png"
import dragonball6_6  from "../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール6のリスト写真/dragonballimg6.png"
import { PagesChangetag } from "../Header/PagesChange.tsx";
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachaddragonball } from "../Header/Navigatedp/Gachadpdragonball.tsx";


export const Dragonball = () => {
const [isVisable, setIsVisable] = useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
   setIsVisable(false);
  },2500)
  return () => clearTimeout(timer)
},[]);
    return (
      isVisable ? (
        <Loadingsquares />
      ) : (
        <div className={styles.fixwidth}>
        <Makingtab />
        <Banner />
        <Gachaddragonball />
        <PagesChangetag/>
        <div className={styles.div}>
         <div className={styles.Div1}>
           <div className={styles.div1}>
            <img src={dragonballimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={dragonball1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball6} className={styles.img6}/>
              </span>
             </div>
             <div>
             <button className={styles.button1_1}>
              <span className={styles.gacha}></span>
              <span>1回ガチャ</span>
             </button>
             <button className={styles.button1_2}>
              <span className={styles.gacha}></span>
              <span>10連ガチャ</span>
             </button>
             </div> 
             <button className={styles.button1_3}>
              <span className={styles.gacha}></span>
              <span>100連ガチャ</span>
             </button>
           </div>
           <div className={styles.div1}>
            <img src={dragonballimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={dragonball1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball6} className={styles.img6}/>
              </span>
             </div>
             <div>
             <button className={styles.button1_1}>
              <span className={styles.gacha}></span>
              <span>1回ガチャ</span>
             </button>
             <button className={styles.button1_2}>
              <span className={styles.gacha}></span>
              <span>10連ガチャ</span>
             </button>
             </div> 
             <button className={styles.button1_3}>
              <span className={styles.gacha}></span>
              <span>100連ガチャ</span>
             </button>
           </div>
          
         </div>
         <div className={styles.Div2}>
         <div className={styles.div1}>
            <img src={dragonballimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={dragonball1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball6} className={styles.img6}/>
              </span>
             </div>
             <div>
             <button className={styles.button1_1}>
              <span className={styles.gacha}></span>
              <span>1回ガチャ</span>
             </button>
             <button className={styles.button1_2}>
              <span className={styles.gacha}></span>
              <span>10連ガチャ</span>
             </button>
             </div> 
             <button className={styles.button1_3}>
              <span className={styles.gacha}></span>
              <span>100連ガチャ</span>
             </button>
           </div>
           <div className={styles.div1}>
            <img src={dragonballimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={dragonball1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={dragonball6} className={styles.img6}/>
              </span>
             </div>
             <div>
             <button className={styles.button1_1}>
              <span className={styles.gacha}></span>
              <span>1回ガチャ</span>
             </button>
             <button className={styles.button1_2}>
              <span className={styles.gacha}></span>
              <span>10連ガチャ</span>
             </button>
             </div> 
             <button className={styles.button1_3}>
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
};