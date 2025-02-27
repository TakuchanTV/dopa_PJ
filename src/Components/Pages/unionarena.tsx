import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/unionarena.module.css"
import unionarenaimg1 from "../Images/ユニオンアリーナページの写真/unionarenaimg1.png"
import unionarena1 from "../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg1.png"
import unionarena2 from "../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg2.png"
import unionarena3 from "../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg3.png"
import unionarena4 from "../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg4.png"
import unionarena5 from "../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg5.png"
import unionarena6 from "../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg6.png"

import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachadpunionarena } from "../Header/Navigatedp/Gachadpunionarena.tsx";
import { ResUnionarena } from "../Responsivepages/ResUnionarena.tsx";
export const UnionArena = () => {
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
        <ResUnionarena />
    //     <div className={styles.fixwidth}>
    //     <Makingtab />
    //     <Banner />
    //     <Gachadpunionarena />
    //     <PagesChangetag/>
    //     <div className={styles.div}>
    //      <div className={styles.Div1}>
    //        <div className={styles.div1}>
    //         <img src={unionarenaimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={unionarena1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena2} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena3} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena4} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena5} className={styles.img6}/>
    //           </span>
    //          </div>
    //          <div>
    //          <button className={styles.button1_1} onClick={GachaConfirm}>
    //           <span className={styles.gacha}></span>
    //           <span>1回ガチャ</span>
    //          </button>
    //          <button className={styles.button1_2} onClick={GachaConfirm10}>
    //           <span className={styles.gacha}></span>
    //           <span>10連ガチャ</span>
    //          </button>
    //          </div> 
    //          <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button>
    //        </div>
    //        <div className={styles.div1}>
    //         <img src={unionarenaimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={unionarena1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena6} className={styles.img6}/>
    //           </span>
    //          </div>
    //          <div>
    //          <button className={styles.button1_1} onClick={GachaConfirm}>
    //           <span className={styles.gacha}></span>
    //           <span>1回ガチャ</span>
    //          </button>
    //          <button className={styles.button1_2} onClick={GachaConfirm10}>
    //           <span className={styles.gacha}></span>
    //           <span>10連ガチャ</span>
    //          </button>
    //          </div> 
    //          <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button>
    //        </div>
          
    //      </div>
    //      <div className={styles.Div2}>
    //      <div className={styles.div1}>
    //         <img src={unionarenaimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={unionarena1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena6} className={styles.img6}/>
    //           </span>
    //          </div>
    //          <div>
    //          <button className={styles.button1_1} onClick={GachaConfirm}>
    //           <span className={styles.gacha}></span>
    //           <span>1回ガチャ</span>
    //          </button>
    //          <button className={styles.button1_2} onClick={GachaConfirm10}>
    //           <span className={styles.gacha}></span>
    //           <span>10連ガチャ</span>
    //          </button>
    //          </div> 
    //          <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button>
    //        </div>
    //        <div className={styles.div1}>
    //         <img src={unionarenaimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={unionarena1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={unionarena6} className={styles.img6}/>
    //           </span>
    //          </div>
    //          <div>
    //          <button className={styles.button1_1} onClick={GachaConfirm}>
    //           <span className={styles.gacha}></span>
    //           <span>1回ガチャ</span>
    //          </button>
    //          <button className={styles.button1_2} onClick={GachaConfirm10}>
    //           <span className={styles.gacha}></span>
    //           <span>10連ガチャ</span>
    //          </button>
    //          </div> 
    //          <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button>
    //        </div>
    //      </div>
    //    </div>
    //  <Footer /> 
    //   </div>
      )
    )
};