import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Loadingsquares } from '../Loading/Loadingsquares.tsx'
import { Loadingdots } from '../Loading/Loadingdots.tsx'
import { Popup } from '../Popup/Popup.js'

export const ResStepup = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <Loadingsquares />}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <Loadingdots />}
    </div>
  )
}

