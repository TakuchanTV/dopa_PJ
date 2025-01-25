import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { PCunionarena } from '../PCpages/PCpages/PCunionarena.tsx'
import { PhoneUnionarena } from '../Phonepages/Phonepages/PhoneUnionarena.tsx'

export const ResUnionarena = () => {
const isDesktop: boolean = useMediaQuery({query: `(min-width: 414px)`})  
    
  return (
<div>
    {/*414px以上はデスクトップの画面*/}  
    {isDesktop && <PCunionarena />}
    {/*414px未満はモバイル用の画面*/}  
    {!isDesktop && <PhoneUnionarena />}
</div>
  )
}
