import React from 'react'
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'

export const PhoneStepup = () => {
  return (
    <div>
       <PhoneMakingtab />
       <PhoneBanner />
       <PhonePagesChange />
       <p>StepUpページです</p> 
       <PhoneFooter />
    </div>
  )
}
