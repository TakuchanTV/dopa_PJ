import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import { PagesChangetag } from "../Header/PagesChange.tsx";

export const PCdp = () => {
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
