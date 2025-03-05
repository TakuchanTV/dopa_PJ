import React, { useState } from 'react'
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { Popup } from '../../Popup/Popup'
import { Popup10 } from '../../Popup/Popup10'
import { Popup100 } from '../../Popup/Popup100'
import { PhoneGachadpother } from '../PhoneHeader/Navigatedp/PhoneGachadpother.tsx'
import othersimg1 from "../../Images/その他ページの写真/othersimg1.png"
import others1 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg1.png"
import others2 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg2.png"
import others3 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg3.png"
import others4 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg4.png"
import others5 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg5.png"
import others6 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg6.png"
import styles from "../PhoneModuleCSS/PhoneOther.module.css";
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'
import { PhonePopup } from '../../Popup/PhonePopup.js'
import { PhonePopup10 } from '../../Popup/PhonePopup10.js'

export const PhoneOther = () => {
const [popupvisible, setPopupvisible] = useState(false)
const [popupvisible10, setPopupvisible10] = useState(false)
const [popupvisible100, setPopupvisible100] = useState(false)

const togglePopup = () => setPopupvisible(!popupvisible)
const togglePopup10 = () => setPopupvisible10(!popupvisible10)
const togglePopup100 = () => setPopupvisible100(!popupvisible100)

const GachaConfirm = ()  => {
togglePopup()
}
const GachaConfirm10 = ()  => {
    togglePopup10()
}
const GachaConfirm100 = ()  => {
    togglePopup100()
}
  return (
    <div className={styles.fixwidth}>
    <PhoneMakingtab />
    <PhoneBanner />
    <PhoneGachadpother />
    <PhonePagesChange/>
    <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
    <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100}/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={othersimg1} className={styles.othersimg1} /> 
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
       <div className={styles.div1}>
        <img src={othersimg1} className={styles.othersimg2} /> 
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
      
     </div>
     <div className={styles.Div2}>
     <div className={styles.div1}>
        <img src={othersimg1} className={styles.othersimg3} /> 
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
       <div className={styles.div1}>
        <img src={othersimg1} className={styles.othersimg4} /> 
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
         {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
          <span className={styles.gacha}></span>
          <span>100連ガチャ</span>
         </button> */}
       </div>
     </div>
   </div>
 <PhoneFooter /> 
  </div>
  )
}
