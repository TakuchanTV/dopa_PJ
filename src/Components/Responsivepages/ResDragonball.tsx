import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCdragonball } from '../PCpages/PCpages/PCdragonball.tsx'
import { PhoneDragonball } from '../Phonepages/Phonepages/PhoneDragonball.tsx'



export const ResDragonball = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <PCdragonball />}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <PhoneDragonball />}
    </div>
  )
}