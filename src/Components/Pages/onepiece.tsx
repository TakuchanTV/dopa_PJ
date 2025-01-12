import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/onepiece.module.css"
import onepieceimg1 from "../Images/ワンピースページの写真/onepieceimg1.png"
import onepieceimg2 from "../Images/ワンピースページの写真/onepieceimg2.png"
import onepieceimg3 from "../Images/ワンピースページの写真/onepieceimg3.png"
import onepieceimg4 from "../Images/ワンピースページの写真/onepieceimg4.png"
import onepieceimg5 from "../Images/ワンピースページの写真/onepieceimg5.png"
import onepieceimg6 from "../Images/ワンピースページの写真/onepieceimg6.png"
import onepiece1    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg1.png"
import onepiece2    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg2.png"
import onepiece3    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg3.png"
import onepiece4    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg4.png"
import onepiece5    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg5.png"
import onepiece6    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg6.png"
import onepiece2_1    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg1.png"
import onepiece2_2    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg2.png"
import onepiece2_3    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg3.png"
import onepiece2_4    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg4.png"
import onepiece2_5    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg5.png"
import onepiece2_6    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース2のリスト写真/onepieceimg6.png"
import onepiece3_1    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg1.png"
import onepiece3_2    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg2.png"
import onepiece3_3    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg3.png"
import onepiece3_4    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg4.png"
import onepiece3_5    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg5.png"
import onepiece3_6    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース3のリスト写真/onepieceimg6.png"
import onepiece4_1    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg1.png"
import onepiece4_2    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg2.png"
import onepiece4_3    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg3.png"
import onepiece4_4    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg4.png"
import onepiece4_5    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg5.png"
import onepiece4_6    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース4のリスト写真/onepieceimg6.png"
import onepiece5_1    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース5のリスト写真/onepieceimg1.png"
import onepiece5_2    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース5のリスト写真/onepieceimg2.png"
import onepiece5_3    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース5のリスト写真/onepieceimg3.png"
import onepiece5_4    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース5のリスト写真/onepieceimg4.png"
import onepiece5_5    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース5のリスト写真/onepieceimg5.png"
import onepiece5_6    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース5のリスト写真/onepieceimg6.png"
import onepiece6_1    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース6のリスト写真/onepieceimg1.png"
import onepiece6_2    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース6のリスト写真/onepieceimg2.png"
import onepiece6_3    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース6のリスト写真/onepieceimg3.png"
import onepiece6_4    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース6のリスト写真/onepieceimg4.png"
import onepiece6_5    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース6のリスト写真/onepieceimg5.png"
import onepiece6_6    from "../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース6のリスト写真/onepieceimg6.png"
import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import {Gachadponepiece} from "../Header/Navigatedp/Gachadponepiece.tsx"
export const OnePiece = () => {
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
        <Gachadponepiece />
        <PagesChangetag/>
        <div className={styles.div}>
         <div className={styles.Div1}>
           <div className={styles.div1}>
            <img src={onepieceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={onepiece1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece6} className={styles.img6}/>
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
            <img src={onepieceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={onepiece1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece6} className={styles.img6}/>
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
            <img src={onepieceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={onepiece1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece6} className={styles.img6}/>
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
            <img src={onepieceimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={onepiece1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={onepiece6} className={styles.img6}/>
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