import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/vice.module.css"
import viceimg1 from "../Images/ヴァイスページの写真/vicepageimg1.png"

import vice1    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg1.png"
import vice2    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg2.png"
import vice3    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg3.png"
import vice4    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg4.png"
import vice5    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg5.png"
import vice6    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg6.png"

import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachadpvice } from "../Header/Navigatedp/Gachadpvice.tsx";
export const Vice = () => {
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
        <Gachadpvice />
        <PagesChangetag/>
        <div className={styles.div}>
         <div className={styles.Div1}>
           <div className={styles.div1}>
            <img src={viceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={vice1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={vice2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={vice3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={vice4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={vice5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={vice6} className={styles.img6}/>
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
            <img src={viceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={vice1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={vice2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={vice3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={vice4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={vice5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={vice6} className={styles.img6}/>
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
            <img src={viceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={vice1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={vice2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={vice3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={vice4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={vice5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={vice6} className={styles.img6}/>
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
            <img src={viceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={vice1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={vice2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={vice3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={vice4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={vice5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={vice6} className={styles.img6}/>
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