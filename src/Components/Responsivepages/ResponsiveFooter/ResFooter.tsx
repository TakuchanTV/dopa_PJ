import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Footer } from '../../Footer/Footer.tsx'
import { PhoneFooter } from '../../Phonepages/PhoneFooter/PhoneFooter.tsx'

export const ResFooter = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})
  return (
    <div>
        {/*414px以上はデスクトップの画面*/}  
        {isDesktop && <Footer />}
        {/*414px未満はモバイル用の画面*/}  
        {!isDesktop && <PhoneFooter />}
    </div>
  )
}

