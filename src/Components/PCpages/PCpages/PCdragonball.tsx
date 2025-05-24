import React, { useEffect, useState } from "react";
import styles from "../../ModuleCSS/dragonball.module.css";

import { Gachaddragonball } from "../../Header/Navigatedp/Gachadpdragonball.tsx";

import dragonballimg1 from "../../Images/ドラゴンボールページの写真/dragonballimg1.png"

import dragonball1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg1.png"
import dragonball2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg2.png"
import dragonball3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg3.png"
import dragonball4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg4.png"
import dragonball5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg5.png"
import dragonball6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール1のリスト写真/dragonballimg6.png"

import dragonball2_1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg1.png"
import dragonball2_2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg2.png"
import dragonball2_3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg3.png"
import dragonball2_4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg4.png"
import dragonball2_5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg5.png"
import dragonball2_6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール2のリスト写真/dragonballimg6.png"

import dragonball3_1 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg1.png"
import dragonball3_2 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg2.png"
import dragonball3_3 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg3.png"
import dragonball3_4 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg4.png"
import dragonball3_5 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg5.png"
import dragonball3_6 from "../../Images/ドラゴンボールページの写真/ドラゴンボールページのリスト/ドラゴンボール3のリスト写真/dragonballimg6.png"

import { Makingtab } from "../../Header/Makingtab.tsx";
import { Banner } from "../../Header/Banner.tsx";
import { PagesChangetag } from "../../Header/PagesChange.tsx";
import { Footer } from "../../Footer/Footer.tsx";
import { Popup } from "../../Popup/Popup.js";
import { Popup10 } from "../../Popup/Popup10.js";
import { Popup100 } from "../../Popup/Popup100.js";


export const PCdragonball = () => {
  const [popupvisible, setPopupvisible] = useState(false)
  const [popupvisible10, setPopupvisible10] = useState(false)
  const [popupvisible100, setPopupvisible100] = useState(false)

  const togglePopup = () => setPopupvisible(!popupvisible)
  const togglePopup10 = () => setPopupvisible10(!popupvisible10)
  const togglePopup100 = () => setPopupvisible100(!popupvisible100)

  const GachaConfirm = () => {
    togglePopup()
  }
  const GachaConfirm10 = () => {
    togglePopup10()
  }
  const GachaConfirm100 = () => {
    togglePopup100()
  }
  return (
    <div className={styles.fixwidth}>
      <Makingtab />
      <Banner />
      <Gachaddragonball />
      <PagesChangetag />
      <Popup togglePopup={togglePopup} popupvisible={popupvisible} />
      <Popup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10} />
      <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100} />
      <div className={styles.div}>
        <div className={styles.Div1}>
          <div className={styles.div1}>
            <div className={styles.imgdiv1}>
              <img src={dragonballimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={dragonball1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball6} className={styles.img6} />
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
              <img src={dragonballimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={dragonball1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball6} className={styles.img6} />
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
              <img src={dragonballimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={dragonball1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball6} className={styles.img6} />
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
              <img src={dragonballimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={dragonball1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={dragonball6} className={styles.img6} />
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

