import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";

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
         <Loadingsquares />
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