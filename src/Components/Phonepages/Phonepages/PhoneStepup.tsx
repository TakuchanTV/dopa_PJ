import React from 'react'
import styles from "../PhoneModuleCSS/PhoneStepup.module.css"
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'

export const PhoneStepup = () => {
  return (
    <div className={styles.fixwidth}>
       <PhoneMakingtab />
       <PhoneBanner />
       <PhonePagesChange />
       <p>StepUpページです</p> 
       <PhoneFooter />
    </div>
  )
}
