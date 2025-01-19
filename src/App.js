import { HashRouter, Route,Routes, useNavigate } from 'react-router-dom';
import {PageRouter} from './Components/Router/PageRouter';
import './App.css';
import { Footer } from './Components/Footer/Footer.tsx';
import { Makingtab } from './Components/Header/Makingtab.tsx';
import {Banner} from "./Components/Header/Banner.tsx";
import styles from "../src/Components/ModuleCSS/home.module.css"
import pokemonimg1 from "../src/Components/Images/ポケモンページの写真/pokemonimg1.png"

import pokemon1 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon1.png"
import pokemon2 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon2.png"
import pokemon3 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon3.png"
import pokemon4 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon4.png"
import pokemon5 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon5.png"
import pokemon6 from "../src/Components/Images/ポケモンページの写真/ポケモンページのリスト/ポケモン1のリスト写真/pokemon6.png"


import {PagesChangetag } from './Components/Header/PagesChange.tsx';
import { Loadingdots } from './Components/Loading/Loadingdots.tsx';
import { Loadingsquares } from './Components/Loading/Loadingsquares.tsx';
import { useEffect, useState } from 'react';
import { Gachadppokemon } from './Components/Header/Navigatedp/Gachadppokemon.tsx';
import { Pokemon } from './Components/Pages/pokemon.tsx';
import { PCpokemon } from './Components/PCpages/PCpages/PCpokemon.tsx';
import { ResPokemon } from './Components/Responsivepages/ResPokemon.tsx';
const Home = () => {
  const [isVisable, setIsVisable] = useState(true)
      useEffect(() => {
            const timer = setTimeout(() => {
              setIsVisable(false)
            },3000);
            return () => clearTimeout(timer)
          },[])
  
  return (
    isVisable ? (
      <Loadingsquares />
    ) : (
      
        <ResPokemon />
  //     <div className={styles.fixwidth}>
  //     <Makingtab />
  //     <Banner />
  //     <Gachadppokemon />
  //     <PagesChangetag/>
  //     <div className={styles.div}>
  //      <div className={styles.Div1}>
  //        <div className={styles.div1}>
  //         <img src={pokemonimg1} className={styles.img} /> 
  //          <div className={styles.list1}>
  //           <span className={styles.span1}>
  //           <img src={pokemon1} className={styles.img1}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon2} className={styles.img2}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon3} className={styles.img3}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon4} className={styles.img4}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon5} className={styles.img5}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon6} className={styles.img6}/>
  //           </span>
  //          </div>
  //          <div>
  //          <button className={styles.button1_1}>
  //           <span className={styles.gacha}></span>
  //           <span>1回ガチャ</span>
  //          </button>
  //          <button className={styles.button1_2}>
  //           <span className={styles.gacha}></span>
  //           <span>10連ガチャ</span>
  //          </button>
  //          </div> 
  //          <button className={styles.button1_3}>
  //           <span className={styles.gacha}></span>
  //           <span>100連ガチャ</span>
  //          </button>
  //        </div>
  //        <div className={styles.div1}>
  //         <img src={pokemonimg1} className={styles.img} /> 
  //          <div className={styles.list1}>
  //           <span className={styles.span1}>
  //           <img src={pokemon1} className={styles.img1}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon2} className={styles.img2}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon3} className={styles.img3}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon4} className={styles.img4}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon5} className={styles.img5}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon6} className={styles.img6}/>
  //           </span>
  //          </div>
  //          <div>
  //          <button className={styles.button1_1}>
  //           <span className={styles.gacha}></span>
  //           <span>1回ガチャ</span>
  //          </button>
  //          <button className={styles.button1_2}>
  //           <span className={styles.gacha}></span>
  //           <span>10連ガチャ</span>
  //          </button>
  //          </div> 
  //          <button className={styles.button1_3}>
  //           <span className={styles.gacha}></span>
  //           <span>100連ガチャ</span>
  //          </button>
  //        </div>
        
  //      </div>
  //      <div className={styles.Div2}>
  //      <div className={styles.div1}>
  //         <img src={pokemonimg1} className={styles.img} /> 
  //          <div className={styles.list1}>
  //           <span className={styles.span1}>
  //           <img src={pokemon1} className={styles.img1}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon2} className={styles.img2}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon3} className={styles.img3}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon4} className={styles.img4}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon5} className={styles.img5}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon6} className={styles.img6}/>
  //           </span>
  //          </div>
  //          <div>
  //          <button className={styles.button1_1}>
  //           <span className={styles.gacha}></span>
  //           <span>1回ガチャ</span>
  //          </button>
  //          <button className={styles.button1_2}>
  //           <span className={styles.gacha}></span>
  //           <span>10連ガチャ</span>
  //          </button>
  //          </div> 
  //          <button className={styles.button1_3}>
  //           <span className={styles.gacha}></span>
  //           <span>100連ガチャ</span>
  //          </button>
  //        </div>
  //        <div className={styles.div1}>
  //         <img src={pokemonimg1} className={styles.img} /> 
  //          <div className={styles.list1}>
  //           <span className={styles.span1}>
  //           <img src={pokemon1} className={styles.img1}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon2} className={styles.img2}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon3} className={styles.img3}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon4} className={styles.img4}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon5} className={styles.img5}/>
  //           </span>
  //           <span className={styles.span1}>
  //           <img src={pokemon6} className={styles.img6}/>
  //           </span>
  //          </div>
  //          <div>
  //          <button className={styles.button1_1}>
  //           <span className={styles.gacha}></span>
  //           <span>1回ガチャ</span>
  //          </button>
  //          <button className={styles.button1_2}>
  //           <span className={styles.gacha}></span>
  //           <span>10連ガチャ</span>
  //          </button>
  //          </div> 
  //          <button className={styles.button1_3}>
  //           <span className={styles.gacha}></span>
  //           <span>100連ガチャ</span>
  //          </button>
  //        </div>
  //      </div>
  //    </div>
  //  <Footer /> 
  //   </div>
    )
  )
}
const URL = process.env.PUBLIC_URL;
function App() {
  return (
    <div >
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <PageRouter/>
      </HashRouter>
    </div>
  );
}

export default App;
