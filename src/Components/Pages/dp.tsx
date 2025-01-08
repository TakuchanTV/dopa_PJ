import React from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import { PagesChangetag } from "../Header/PageChangestag.tsx";
export const DP = () => {
    return (
        <div>
            <Makingtab />
             <Banner />
             <PagesChangetag />
           <p>DPページです</p> 

           <Footer />
        </div>
    )
};