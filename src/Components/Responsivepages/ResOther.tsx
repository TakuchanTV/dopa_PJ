import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCother } from '../PCpages/PCother.tsx'
import { PhoneOther } from '../Phonepages/Phonepages/PhoneOther.tsx'

export const ResOther = () => {
    const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
    return (
    <div>
         {/*414px以上はデスクトップの画面*/}  
         {isDesktop && <PCother />}
         {/*414px未満はモバイル用の画面*/}  
         {!isDesktop && <PhoneOther />}
       </div>
  )
}
