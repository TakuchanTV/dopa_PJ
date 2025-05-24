import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCpokemon } from '../PCpages/PCpages/PCpokemon.tsx'
import { PhonePokemon } from '../Phonepages/Phonepages/PhonePokemon.tsx'



export const ResPokemon = () => {
  const isDesktop: boolean = useMediaQuery({query: `(min-width: 431px)`})  
  return (
    <div>
      {/*431px以上はデスクトップの画面*/}  
      {isDesktop && <PCpokemon />}
      {/*431px未満はモバイル用の画面*/}  
      {!isDesktop && <PhonePokemon />}
    </div>
  )
}

