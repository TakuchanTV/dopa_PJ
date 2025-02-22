 import React, { useEffect, useState } from "react"
import styles from "../../ModuleCSS/onepiece.module.css"

import onepieceimg1    from "../../Images/ワンピースページの写真/onepieceimg1.png"

import onepiece1 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg1.png"
import onepiece2 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg2.png"
import onepiece3 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg3.png"
import onepiece4 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg4.png"
import onepiece5 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg5.png"
import onepiece6 from "../../Images/ワンピースページの写真/ワンピースページのリスト/ワンピース1のリスト写真/onepieceimg6.png"

import { Makingtab } from "../../Header/Makingtab.tsx"
import { Banner } from "../../Header/Banner.tsx"
import { Gachadponepiece } from "../../Header/Navigatedp/Gachadponepiece.tsx"
import { PagesChangetag } from "../../Header/PagesChange.tsx"
import { PhoneFooter } from "../../Phonepages/PhoneFooter/PhoneFooter.tsx"
import { Footer } from "../../Footer/Footer.tsx"
import { Popup } from "../../Popup/Popup.js"
import { Popup10 } from "../../Popup/Popup10.js"
import { Popup100 } from "../../Popup/Popup100.js"
export const PConePiece = () => {
  const [popupvisible, setPopupvisible] = useState(false)
  const [popupvisible10, setPopupvisible10] = useState(false)
  const [popupvisible100, setPopupvisible100] = useState(false)
  
  const togglePopup = () => setPopupvisible(!popupvisible)
  const togglePopup10 = () => setPopupvisible10(!popupvisible10)
  const togglePopup100 = () => setPopupvisible100(!popupvisible100)
  const GachaConfirm = ()  => {
    togglePopup();
  }
  const GachaConfirm10 = ()  => {
   togglePopup10();
  }
  const GachaConfirm100 = ()  => {
   togglePopup100();
  }

return (
<div className={styles.fixwidth}>
    <Makingtab />
    <Banner />
    <Gachadponepiece />
    <PagesChangetag/>
    <Popup togglePopup={togglePopup} popupvisible={popupvisible}/>
    <Popup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100}/>
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
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
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
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
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
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
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
         <button className={styles.button1_1} onClick={GachaConfirm}>
          <span className={styles.gacha}></span>
          <span>1回ガチャ</span>
         </button>
         <button className={styles.button1_2} onClick={GachaConfirm10}>
          <span className={styles.gacha}></span>
          <span>10連ガチャ</span>
         </button>
         </div> 
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
     </div>
   </div>
 <Footer /> 
  </div>
)
}