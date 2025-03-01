import React from 'react'
import { PhoneMakingtab } from '../PhoneHeader/PhoneMakingtab.tsx'
import { PhoneBanner } from '../PhoneHeader/PhoneBanner.tsx'
import { PhonePagesChange } from '../PhoneHeader/PhonePagesChange.tsx'
import { PhoneFooter } from '../PhoneFooter/PhoneFooter.tsx'

export const PhoneDp = () => {
  return (
    <div>
       <PhoneMakingtab />
       <PhoneBanner />
       <PhonePagesChange />
       <p>DPページです</p> 
       <PhoneFooter />
    </div>
  )
}
