import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PhoneVice } from '../Phonepages/Phonepages/PhoneVice.tsx'
import { PCvice } from '../PCpages/PCpages/PCvice.tsx'



export const ResVice = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <PCvice/>}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <PhoneVice />}
    </div>
  )
}