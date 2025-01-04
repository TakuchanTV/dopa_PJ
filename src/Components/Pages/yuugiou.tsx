import React from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
export const Yuugiou = () => {
    return (
        <div>
            <Makingtab />
            <Banner />
           <p>Yuugiouページです</p> 

           <Footer />
        </div>
    )
};