import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCdp } from '../PCpages/PCdp.tsx'
import { PhoneDp } from '../Phonepages/Phonepages/PhoneDp.tsx'



export const ResDp = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <PCdp />}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <PhoneDp />}
    </div>
  )
}