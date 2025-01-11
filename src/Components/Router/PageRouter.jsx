
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
export const PageRouter = () => {
   return (
    <Routes >
      <Route path="pokemon" element={<Pokemon />}/>
      <Route path="onepiece" element={<OnePiece />}/>
      <Route path="dragonball" element={<Dragonball />}/>
      <Route path="yuugiou" element={<Yuugiou />}/>
      <Route path="vice" element={<Vice />}/>
      <Route path="unionarena" element={<UnionArena />}/>
      <Route path="dp" element={<DP />}/>
      <Route path="stepup" element={<StepUp />}/>
      <Route path="others" element={<Others />}/>
      <Route path="charge" element={<Charge />}/>
    </Routes>
   )
}