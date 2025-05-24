import React, { useState } from 'react'
import styles from "../../ModuleCSS/unionarena.module.css"
import { Makingtab } from '../../Header/Makingtab.tsx'
import { Banner } from '../../Header/Banner.tsx'
import { Gachadpunionarena } from '../../Header/Navigatedp/Gachadpunionarena.tsx'
import { PagesChangetag } from '../../Header/PagesChange.tsx'
import { Footer } from '../../Footer/Footer.tsx'

import unionarenaimg1 from "../../Images/ユニオンアリーナページの写真/unionarenaimg1.png"

import unionarena1 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg1.png"
import unionarena2 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg2.png"
import unionarena3 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg3.png"
import unionarena4 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg4.png"
import unionarena5 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg5.png"
import unionarena6 from "../../Images/ユニオンアリーナページの写真/ユニオンアリーナページのリスト/ユニオンアリーナ1のリスト写真/unionarenaimg6.png"
import { Popup } from '../../Popup/Popup.js'
import { Popup10 } from '../../Popup/Popup10.js'
import { Popup100 } from '../../Popup/Popup100.js'

export const PCunionarena = () => {
  const [popupvisible, setPopupvisible] = useState(false)
  const [popupvisible10, setPopupvisible10] = useState(false)
  const [popupvisible100, setPopupvisible100] = useState(false)

  const togglePopup = () => setPopupvisible(!popupvisible)
  const togglePopup10 = () => setPopupvisible10(!popupvisible10)
  const togglePopup100 = () => setPopupvisible100(!popupvisible100)
  const GachaConfirm = () => {
    togglePopup();
  }
  const GachaConfirm10 = () => {
    togglePopup10();
  }
  const GachaConfirm100 = () => {
    togglePopup100();
  }
  return (
    <div className={styles.fixwidth}>
      <Makingtab />
      <Banner />
      <Gachadpunionarena />
      <PagesChangetag />
      <Popup togglePopup={togglePopup} popupvisible={popupvisible} />
      <Popup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10} />
      <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100} />
      <div className={styles.div}>
        <div className={styles.Div1}>
          <div className={styles.div1}>
            <div className={styles.imgdiv1}>
              <img src={unionarenaimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={unionarena1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena2} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena3} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena4} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena5} className={styles.img6} />
              </span>
            </div>
            <div className={styles.buttondiv1}>
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
            <div className={styles.imgdiv2}>
              <img src={unionarenaimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={unionarena1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena6} className={styles.img6} />
              </span>
            </div>
            <div className={styles.buttondiv2}>
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
            <div className={styles.imgdiv3}>
              <img src={unionarenaimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={unionarena1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena6} className={styles.img6} />
              </span>
            </div>
            <div className={styles.buttondiv3}>
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
            <div className={styles.imgdiv4}>
              <img src={unionarenaimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={unionarena1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={unionarena6} className={styles.img6} />
              </span>
            </div>
            <div className={styles.buttondiv4}>
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
