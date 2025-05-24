import React, { useEffect, useState } from "react"
import styles from "../../ModuleCSS/dragonball.module.css"
import yuugiouimg1 from "../../Images/遊戯王ページの写真/yuugiouimg1.png"

import yuugiou1 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg1.png"
import yuugiou2 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg2.png"
import yuugiou3 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg3.png"
import yuugiou4 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg4.png"
import yuugiou5 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg5.png"
import yuugiou6 from "../../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg6.png"


import { ResMakingtab } from "../../Responsivepages/ResponsiveHeader/ResMakingtab.tsx"
import { ResBanner } from "../../Responsivepages/ResponsiveHeader/ResBanner.tsx"
import { ResPagesChange } from "../../Responsivepages/ResponsiveHeader/ResPagesChange.tsx"
import { ResFooter } from "../../Responsivepages/ResponsiveFooter/ResFooter.tsx"
import { ResGachadpyuugiou } from "../../Responsivepages/ResponsiveHeader/Navigatedp/ResGachadpyuugiou.tsx"
import { Popup } from "../../Popup/Popup.js"
import { Popup10 } from "../../Popup/Popup10.js"
import { Popup100 } from "../../Popup/Popup100.js"
export const PCyuugiou = () => {
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
      <ResMakingtab />
      <ResBanner />
      <ResGachadpyuugiou />
      <ResPagesChange />
      <Popup togglePopup={togglePopup} popupvisible={popupvisible} />
      <Popup10 togglePopup10={togglePopup10} popupvisible10={popupvisible10} />
      <Popup100 togglePopup100={togglePopup100} popupvisible100={popupvisible100} />
      <div className={styles.div}>
        <div className={styles.Div1}>
          <div className={styles.div1}>
            <div className={styles.imgdiv1}>
              <img src={yuugiouimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={yuugiou1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou6} className={styles.img6} />
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
              <img src={yuugiouimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={yuugiou1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou6} className={styles.img6} />
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
              <img src={yuugiouimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={yuugiou1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou6} className={styles.img6} />
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
              <img src={yuugiouimg1} className={styles.img} />
            </div>
            <div className={styles.list1}>
              <span className={styles.span1}>
                <img src={yuugiou1} className={styles.img1} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou2} className={styles.img2} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou3} className={styles.img3} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou4} className={styles.img4} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou5} className={styles.img5} />
              </span>
              <span className={styles.span1}>
                <img src={yuugiou6} className={styles.img6} />
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
      <ResFooter />
    </div>
  )

};