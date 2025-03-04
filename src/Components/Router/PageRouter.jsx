
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
import { Gachaanime10 } from "../Gachaanimation/Gachaanime10.tsx"
import { Gachaanime100 } from "../Gachaanimation/Gachaanime100.tsx"
import { PhoneGachaanime } from "../Gachaanimation/PhoneGachanime.tsx"
import { PhoneGachaanime10 } from "../Gachaanimation/PhoneGachaanime10.tsx"
import { PhoneDpPokemon } from "../PhoneDppages/PhoneDpPokemon.tsx"
import { PhoneDpOnepiece } from "../PhoneDppages/PhoneDpOnepiece.tsx"
export const PageRouter = () => {
   return (
    <Routes >
      <Route path="pokemon" element={<Pokemon />}/>
      <Route path="pokemon/dp" element={<Dppokemon />}/>
      <Route path="Phonepokemon/dp" element={<PhoneDpPokemon />} />
      <Route path="onepiece" element={<OnePiece />}/>
      <Route path="onepiece/dp" element={<Dponepiece />}/>
      <Route path="Phoneonepiece/dp" element = {<PhoneDpOnepiece />} />
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
      <Route path="Gachaanime10" element={<Gachaanime10 />}/>
      <Route path="Gachaanime100" element={<Gachaanime100 />}/>
      <Route path="PhoneGachaanime" element={<PhoneGachaanime />} />
      <Route path="PhoneGachaanime10" element={<PhoneGachaanime10 />} />
    </Routes>
   )
}