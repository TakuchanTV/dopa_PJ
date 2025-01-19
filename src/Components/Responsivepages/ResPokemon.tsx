import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCpokemon } from '../PCpages/PCpages/PCpokemon.tsx'
import { PhonePokemon } from '../Phonepages/Phonepages/PhonePokemon.tsx'



export const ResPokemon = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
  return (
    <div>
      {/*414px以上はデスクトップの画面*/}  
      {isDesktop && <PCpokemon />}
      {/*414px未満はモバイル用の画面*/}  
      {!isDesktop && <PhonePokemon />}
    </div>
  )
}

