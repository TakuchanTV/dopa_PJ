import React, { useState } from 'react'
import styles from "../Popup/PhonePopup.module.css"
import { useNavigate } from 'react-router-dom'

export const PhonePopup10 = ({popupvisible10,togglePopup10}) => {
// const [popupvisible, setPopupvisible] = useState(false)

// const togglePopup = () => setPopupvisible(!popupvisible)
const navigate = useNavigate()

const checkfunc = () =>navigate("/PhoneGachaanime10")
  return (
    <div>
      {/* <button onClick={togglePopup}>ポップアップを開く</button> */}
      {popupvisible10 && (
        <div className={styles.Popup}>
         {/*ポップアップの画面*/}
          <div className={styles.btndiv}>
            <button onClick={checkfunc} className={styles.btn1}>10連ガチャを引く</button>
            <button onClick={togglePopup10} className={styles.btn2}>キャンセル</button>
          </div>
        </div>
      )}  
    </div>
  )
}
