import React, { useState } from 'react'
import styles from "../Popup/Popup.module.css"
import { useNavigate } from 'react-router-dom'

export const Popup = ({popupvisible,togglePopup}) => {
// const [popupvisible, setPopupvisible] = useState(false)

// const togglePopup = () => setPopupvisible(!popupvisible)
const navigate = useNavigate()

const checkfunc = () =>navigate("/")
  return (
    <div>
      {/* <button onClick={togglePopup}>ポップアップを開く</button> */}
      {popupvisible && (
        <div className={styles.Popup}>
         {/*ポップアップの画面*/}
         <p>ポップアップの画面を表示します</p>
          <div className={styles.btndiv}>
            <button onClick={checkfunc} className={styles.btn1}>ガチャを引く</button>
            <button onClick={togglePopup} className={styles.btn2}>キャンセル</button>
          </div>
        </div>
      )}  
    </div>
  )
}
