
import {Routes,Route,} from "react-router-dom"
import { Pokemon } from "../Pages/pokemon.tsx"
import { OnePiece } from "../Pages/onepiece.tsx"
import { Dragonball } from "../Pages/dragonball.tsx"
import { Yuugiou } from "../Pages/yuugiou.tsx"
import { Vice } from "../Pages/vice.tsx"
import { DP } from "../Pages/dp.tsx"
import {UnionArena} from "../Pages/unionarena.tsx"
import { StepUp } from "../Pages/stepup.tsx"
import { Others } from "../Pages/others.tsx"
import { Charge } from "../Pages/charge.tsx"
import { Dppokemon } from "../Dppages/Dppokemon.tsx"
import { Dponepiece } from "../Dppages/Dponepiece.tsx"
import { Dpdragonball } from "../Dppages/Dpdragonball.tsx"
import { Dpyuugiou } from "../Dppages/Dpyuugiou.tsx"
import { Dpvice } from "../Dppages/Dpvice.tsx"
import { Dpunionarena } from "../Dppages/Dpunionarena.tsx"
import { Dpothers } from "../Dppages/Dpothers.tsx"
import { Gachaanime } from "../Gachaanimation/Gachaanime.tsx"
export const PageRouter = () => {
   return (
    <Routes >
      <Route path="pokemon" element={<Pokemon />}/>
      <Route path="pokemon/dp" element={<Dppokemon />}/>
      <Route path="onepiece" element={<OnePiece />}/>
      <Route path="onepiece/dp" element={<Dponepiece />}/>
      <Route path="dragonball" element={<Dragonball />}/>
      <Route path="dragonball/dp" element={<Dpdragonball />}/>
      <Route path="yuugiou" element={<Yuugiou />}/>
      <Route path="yuugiou/dp" element={<Dpyuugiou />}/>
      <Route path="vice" element={<Vice />}/>
      <Route path="vice/dp" element={<Dpvice />}/>
      <Route path="unionarena" element={<UnionArena />}/>
      <Route path="unionarena/dp" element={<Dpunionarena />}/>
      <Route path="dp" element={<DP />}/>
      <Route path="stepup" element={<StepUp />}/>
      <Route path="others" element={<Others />}/>
      <Route path="others/dp" element={<Dpothers />}/>
      <Route path="charge" element={<Charge />}/>
      <Route path="Gachaanime" element={<Gachaanime />}/>
    </Routes>
   )
}