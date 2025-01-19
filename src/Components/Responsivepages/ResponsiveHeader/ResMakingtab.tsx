import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Makingtab } from '../../Header/Makingtab.tsx'
import { PhoneMakingtab } from '../../Phonepages/PhoneHeader/PhoneMakingtab.tsx'

export const ResMakingtab = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  

  return (
    <div>
       {/*414px以上はデスクトップの画面*/}  
       {isDesktop && <Makingtab />}
       {/*414px未満はモバイル用の画面*/}  
       {!isDesktop &&<PhoneMakingtab />}  
    </div>
  )
}

