import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { PagesChangetag } from '../../Header/PagesChange.tsx';
import { PhonePagesChange } from '../../Phonepages/PhoneHeader/PhonePagesChange.tsx';


export const ResPagesChange = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  

  return (
    <div>
        {/*414px以上はデスクトップの画面*/}  
        {isDesktop && <PagesChangetag />}
        {/*414px未満はモバイル用の画面*/}  
        {!isDesktop &&<PhonePagesChange />}  
    </div>
  )
}

