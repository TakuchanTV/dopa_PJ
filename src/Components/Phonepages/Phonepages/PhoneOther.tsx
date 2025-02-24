import React, { useState } from 'react'
import styles from "../PhoneModuleCSS/PhoneOther.module.css";
import { ResMakingtab } from '../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx'
import { ResBanner } from '../../Responsivepages/ResponsiveHeader/ResBanner.tsx'
import { ResPagesChange } from '../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx'
import { ResFooter } from '../../Responsivepages/ResponsiveFooter/ResFooter.tsx'
import { ResGachadponepiece } from '../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadponepiece.tsx';


import othersimg1 from "../../Images/その他ページの写真/othersimg1.png"
import others1 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg1.png"
import others2 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg2.png"
import others3 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg3.png"
import others4 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg4.png"
import others5 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg5.png"
import others6 from "../../Images/その他ページの写真/その他ページのリスト/その他1のリスト写真/othersimg6.png"


import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx';
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx';
import { PhoneGachadponepiece } from '../PhoneHeader/Navigatedp/PhoneGachadponepiece.tsx';
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx';
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx';
import { PhonePopup } from '../../Popup/PhonePopup.js';
import { PhonePopup10 } from '../../Popup/PhonePopup10.js';



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
    <PhoneMakingtab/>
    <PhoneBanner />
    <PhoneGachadponepiece />
    <PhonePagesChange/>
     <PhonePopup togglePopup={togglePopup} popupvisible={popupvisible}/>
     <PhonePopup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    <div className={styles.div}>
     <div className={styles.Div1}>
       <div className={styles.div1}>
        <img src={othersimg1} className={styles.otherimg1} /> 
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

       {/* <div className={styles.div2}>
        <img src={onepieceimg2} className={styles.onepieceimg2} /> 
         <div className={styles.list1}>
          <span className={styles.span2}>
          <img src={onepiece2_1} className={styles.img1}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_2} className={styles.img2}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_3} className={styles.img3}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_4} className={styles.img4}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_5} className={styles.img5}/>
          </span>
          <span className={styles.span2}>
          <img src={onepiece2_6} className={styles.img6}/>
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
       </div> */}
     </div>

     {/* <div className={styles.Div2}>
     <div className={styles.div3}>
        <img src={onepieceimg3} className={styles.onepieceimg3} /> 
         <div className={styles.list1}>
          <span className={styles.span3}>
          <img src={onepiece3_1} className={styles.img1}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_2} className={styles.img2}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_3} className={styles.img3}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_4} className={styles.img4}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_5} className={styles.img5}/>
          </span>
          <span className={styles.span3}>
          <img src={onepiece3_6} className={styles.img6}/>
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
       <div className={styles.div4}>
        <img src={onepieceimg4} className={styles.onepieceimg4} /> 
         <div className={styles.list1}>
          <span className={styles.span4}>
          <img src={onepiece4_1} className={styles.img1}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_2} className={styles.img2}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_3} className={styles.img3}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_4} className={styles.img4}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_5} className={styles.img5}/>
          </span>
          <span className={styles.span4}>
          <img src={onepiece4_6} className={styles.img6}/>
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
     </div> */}
   </div>
 <PhoneFooter /> 
  </div>
  )
}

