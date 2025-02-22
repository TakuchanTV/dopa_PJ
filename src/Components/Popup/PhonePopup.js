import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../Popup/PhonePopup.module.css"

export const PhonePopup = ({popupvisible,togglePopup}) => {
// const [popupvisible, setPopupvisible] = useState(false)

// const togglePopup = () => setPopupvisible(!popupvisible)
const navigate = useNavigate()

const checkfunc = () =>navigate("/PhoneGachaanime")
  return (
    <div>
      {/* <button onClick={togglePopup}>ポップアップを開く</button> */}
      {popupvisible && (
        <div className={styles.Popup}>
         {/*ポップアップの画面*/}
          <div className={styles.btndiv}>
            <button onClick={checkfunc} className={styles.btn1}>ガチャを引く</button>
            <button onClick={togglePopup} className={styles.btn2}>キャンセル</button>
          </div>
        </div>
      )}  
    </div>
  )
}
