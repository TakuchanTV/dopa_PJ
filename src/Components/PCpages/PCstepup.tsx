import React, { useEffect, useState } from "react"
import { Footer } from "../../Components/Footer/Footer.tsx";
import { Makingtab } from "../../Components/Header/Makingtab.tsx";
import { Banner } from "../../Components/Header/Banner.tsx";
import { PagesChangetag } from "../../Components/Header/PagesChange.tsx";

export const PCstepup = () => {
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