import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Banner } from '../../Header/Banner'
import { PhoneBanner } from '../../Phonepages/PhoneHeader/PhoneBanner'

export const ResBanner = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
    
  return (
    <div>
        {/*414px以上はデスクトップの画面*/}  
        {isDesktop && <Banner />}
        {/*414px未満はモバイル用の画面*/}  
        {!isDesktop &&<PhoneBanner />}  
    </div>
  )
}
