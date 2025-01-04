import React from "react"
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
export const Pokemon = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/")
    }
    return (
        <div>
            <Makingtab />
            <Banner />
           <p>Pokemonページです</p> 
           <button onClick={navigateHome}>Homeページに戻ります</button>

           <Footer />
        </div>
    )
};