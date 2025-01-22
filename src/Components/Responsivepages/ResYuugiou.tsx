import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCyuugiou } from '../PCpages/PCpages/PCyuugiou.tsx'
import { PhoneYuugiou } from '../Phonepages/Phonepages/PhoneYuugiou.tsx'



export const ResYuugiou = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <PCyuugiou/>}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <PhoneYuugiou />}
    </div>
  )
}