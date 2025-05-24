import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCother } from '../PCpages/PCpages/PCother.tsx'
import { PhoneOther } from '../Phonepages/Phonepages/PhoneOther.tsx'

export const ResOther = () => {
    const isDesktop: boolean = useMediaQuery({query: `(min-width: 431px)`})  
    return (
    <div>
         {/*431px以上はデスクトップの画面*/}  
         {isDesktop && <PCother />}
         {/*431px未満はモバイル用の画面*/}  
         {!isDesktop && <PhoneOther />}
       </div>
  )
}
