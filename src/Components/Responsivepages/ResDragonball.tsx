import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCdragonball } from '../PCpages/PCpages/PCdragonball.tsx'
import { PhoneDragonball } from '../Phonepages/Phonepages/PhoneDragonball.tsx'



export const ResDragonball = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 431px)`})  
  return (
    <div>
      {/*431px以上はデスクトップの画面*/}  
      {isDesktop && <PCdragonball />}
      {/*431px未満はモバイル用の画面*/}  
      {!isDesktop && <PhoneDragonball />}
    </div>
  )
}