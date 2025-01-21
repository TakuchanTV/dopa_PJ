import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Gachadponepiece } from '../../../Header/Navigatedp/Gachadponepiece.tsx';
import { PhoneGachadponepiece } from '../../../Phonepages/PhoneHeader/Navigatedp/PhoneGachadponepiece.tsx';


export const ResGachadponepiece = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})
  return (
    <div>
        {/*414px以上はデスクトップの画面*/} 
        {isDesktop && <Gachadponepiece />}
        {/*414px未満はモバイル用の画面*/} 
        {isDesktop && <PhoneGachadponepiece />}
    </div>
  )
}

