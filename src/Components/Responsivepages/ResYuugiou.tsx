import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCyuugiou } from '../PCpages/PCpages/PCyuugiou.tsx'
import { PhoneYuugiou } from '../Phonepages/Phonepages/PhoneYuugiou.tsx'



export const ResYuugiou = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 431px)`})  
  return (
    <div>
      {/*431px以上はデスクトップの画面*/}  
      {isDesktop && <PCyuugiou/>}
      {/*431px未満はモバイル用の画面*/}  
      {!isDesktop && <PhoneYuugiou />}
    </div>
  )
}