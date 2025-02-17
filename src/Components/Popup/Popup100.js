import React, { useState } from 'react'
import styles from "../Popup/Popup.module.css"
import { useNavigate } from 'react-router-dom'

export const Popup100 = ({popupvisible100,togglePopup100}) => {
// const [popupvisible, setPopupvisible] = useState(false)

// const togglePopup = () => setPopupvisible(!popupvisible)
const navigate = useNavigate()

const checkfunc = () =>navigate("/Gachaanime100")
  return (
    <div>
      {/* <button onClick={togglePopup}>ポップアップを開く</button> */}
      {popupvisible100 && (
        <div className={styles.Popup}>
         {/*ポップアップの画面*/}
          <div className={styles.btndiv}>
            <button onClick={checkfunc} className={styles.btn1}>100連ガチャを引く</button>
            <button onClick={togglePopup100} className={styles.btn2}>キャンセル</button>
          </div>
        </div>
      )}  
    </div>
  )
}
