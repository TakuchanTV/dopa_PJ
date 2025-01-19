import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Gachadppokemon } from '../../../Header/Navigatedp/Gachadppokemon.tsx';
import { PhoneGachadppokemon } from '../../../Phonepages/PhoneHeader/Navigatedp/PhoneGachadppokemon.tsx';

export const ResGachadppokemon = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
     <div>
            {/*414px以上はデスクトップの画面*/}  
            {isDesktop && <Gachadppokemon />}
            {/*414px未満はモバイル用の画面*/}  
            {!isDesktop &&<PhoneGachadppokemon/>}  
        </div>
  )
}

