import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/others.module.css"
import othersimg1 from "../Images/その他ページの写真/othersimg1.png"
import others1 from "../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg1.png"
import others2 from "../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg2.png"
import others3 from "../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg3.png"
import others4 from "../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg4.png"
import others5 from "../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg5.png"
import others6 from "../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg6.png"
import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachadpothers } from "../Header/Navigatedp/Gachadpothers.tsx";

export const Others = () => {
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
        <div className={styles.fixwidth}>
        <Makingtab />
        <Banner />
        <Gachadpothers />
        <PagesChangetag/>
        <div className={styles.div}>
         <div className={styles.Div1}>
           <div className={styles.div1}>
            <img src={othersimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={others1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={others2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={others3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={others4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={others5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={others6} className={styles.img6}/>
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
            <img src={othersimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={others1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={others2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={others3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={others4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={others5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={others6} className={styles.img6}/>
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
            <img src={othersimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={others1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={others2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={others3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={others4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={others5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={others6} className={styles.img6}/>
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
            <img src={othersimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={others1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={others2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={others3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={others4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={others5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={others6} className={styles.img6}/>
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
};