import React, { useState } from 'react'
import styles from "../Popup/Popup.module.css"

export const Popup = () => {
const [popupvisible, setPopupvisible] = useState(false)

const togglePopup = () => setPopupvisible(!popupvisible)
  return (
    <div>
      <button onClick={togglePopup}>ポップアップを開く</button>

      {popupvisible && (
        <div className={styles.Popup}>
         {/*ポップアップの画面*/}
         <p>ポップアップの画面を表示します</p>
        <button onClick={togglePopup}>閉じる</button>
        </div>
      )}  
    </div>
  )
}
