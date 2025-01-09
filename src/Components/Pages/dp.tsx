import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"

export const DP = () => {
const [isVisable, setIsVisable] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
       setIsVisable(false);
      },2500)
      return () => clearTimeout(timer)
    },[]);
    return (
       isVisable ? (
         <div className={spinerstyles.spindiv}>
                  <div className={spinerstyles.spinnerbox}>
                      <div className={spinerstyles.pulsecontainer}>
                        <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble1}`}></div>
                        <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble2}`}></div>
                        <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble3}`}></div>
                      </div>
                  </div>
                 </div>
       ) : (
        <div>
            <Makingtab />
             <Banner />
             <PagesChangetag />
           <p>DPページです</p> 
           <Footer />
        </div>
       )
    )
};