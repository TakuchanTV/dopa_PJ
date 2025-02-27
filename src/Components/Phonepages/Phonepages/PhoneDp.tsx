import React from 'react'
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'
import styles from "../PhoneModuleCSS/PhoneDp.module.css"

export const PhoneDp = () => {
  return (
    <div className={styles.div}>
        <PhoneMakingtab />
        <PhoneBanner />
        <PhonePagesChange />
      <div className={styles.DPdiv}>
       <p className={styles.p}>DPページです</p> 
      </div>
       <PhoneFooter />
    </div>
  )
}
