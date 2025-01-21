import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Gachadppokemon } from '../../../Header/Navigatedp/Gachadppokemon.tsx';
import { PhoneGachadppokemon } from '../../../Phonepages/PhoneHeader/Navigatedp/PhoneGachadppokemon.tsx';
import { Gachadpyuugiou } from '../../../Header/Navigatedp/Gachadpyuugiou.tsx';
import { PhoneGachadpyuugiou } from '../../../Phonepages/PhoneHeader/Navigatedp/PhoneGachadpyuugiou.tsx';

export const ResGachadpyuugiou = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
        {/*414px以上はデスクトップの画面*/}  
        {isDesktop && <Gachadpyuugiou />}
        {/*414px未満はモバイル用の画面*/}  
        {!isDesktop &&<PhoneGachadpyuugiou/>}  
    </div>
  )
}

