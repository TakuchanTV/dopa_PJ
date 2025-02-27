import React, { useEffect, useState } from "react"
import styles from "../../ModuleCSS/dragonball.module.css"
import yuugiouimg1 from "../../Images/遊戯王ページの写真/yuugiouimg1.png"

import yuugiou1  from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg1.png"
import yuugiou2  from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg2.png"
import yuugiou3  from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg3.png"
import yuugiou4  from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg4.png"
import yuugiou5  from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg5.png"
import yuugiou6  from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg6.png"


import { ResMakingtab } from "../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx"
import { ResBanner } from "../../Responsivepages/ResponsiveHeader/ResBanner.tsx"
import { ResPagesChange } from "../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx"
import { ResFooter } from "../../Responsivepages/ResponsiveFooter/ResFooter.tsx"
import { ResGachadpyuugiou } from "../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadpyuugiou.tsx"
export const PCyuugiou = () => {
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
  
    return (
        <div className={styles.fixwidth}>
        <ResMakingtab />
        <ResBanner />
        <ResGachadpyuugiou />
        <ResPagesChange/>
        <div className={styles.div}>
         <div className={styles.Div1}>
           <div className={styles.div1}>
            <img src={yuugiouimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={yuugiou1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou6} className={styles.img6}/>
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
            <img src={yuugiouimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={yuugiou1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou6} className={styles.img6}/>
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
            <img src={yuugiouimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={yuugiou1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou6} className={styles.img6}/>
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
            <img src={yuugiouimg1} className={styles.img} /> 
             <div className={styles.list1}>
              <span className={styles.span1}>
              <img src={yuugiou1} className={styles.img1}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou2} className={styles.img2}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou3} className={styles.img3}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou4} className={styles.img4}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou5} className={styles.img5}/>
              </span>
              <span className={styles.span1}>
              <img src={yuugiou6} className={styles.img6}/>
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
     <ResFooter /> 
      </div>
      )
    
};