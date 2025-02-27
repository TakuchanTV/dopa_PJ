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
import { Popup } from "../Popup/Popup.js";
import { Popup10 } from "../Popup/Popup10.js";
import { Popup100 } from "../Popup/Popup100.js";
import { ResOther } from "../Responsivepages/ResOther.tsx";

export const Others = () => {
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
        <ResOther />
    //     <div className={styles.fixwidth}>
    //     <Makingtab />
    //     <Banner />
    //     <Gachadpothers />
    //     <PagesChangetag/>
    //     <Popup togglePopup={togglePopup} popupvisible={popupvisible}/>
    //     <Popup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10}/>
    //     <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100}/>
    //     <div className={styles.div}>
    //      <div className={styles.Div1}>
    //        <div className={styles.div1}>
    //         <img src={othersimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={others1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others6} className={styles.img6}/>
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
    //          {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button> */}
    //        </div>
    //        <div className={styles.div1}>
    //         <img src={othersimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={others1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others6} className={styles.img6}/>
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
    //          {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button> */}
    //        </div>
          
    //      </div>
    //      <div className={styles.Div2}>
    //      <div className={styles.div1}>
    //         <img src={othersimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={others1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others6} className={styles.img6}/>
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
    //          {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button> */}
    //        </div>
    //        <div className={styles.div1}>
    //         <img src={othersimg1} className={styles.img} /> 
    //          <div className={styles.list1}>
    //           <span className={styles.span1}>
    //           <img src={others1} className={styles.img1}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others2} className={styles.img2}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others3} className={styles.img3}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others4} className={styles.img4}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others5} className={styles.img5}/>
    //           </span>
    //           <span className={styles.span1}>
    //           <img src={others6} className={styles.img6}/>
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
    //          {/* <button className={styles.button1_3} onClick={GachaConfirm100}>
    //           <span className={styles.gacha}></span>
    //           <span>100連ガチャ</span>
    //          </button> */}
    //        </div>
    //      </div>
    //    </div>
    //  <Footer /> 
    //   </div>
      )
    
    )
};