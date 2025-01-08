import React from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import { PagesChangetag } from "../Header/PageChangestag.tsx";
export const StepUp = () => {
    return (
        <div>
            <Makingtab />
            <Banner />
            <PagesChangetag />
           <p>StepUpページです</p> 

           <Footer />
        </div>
    )
};