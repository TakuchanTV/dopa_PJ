import React from "react"
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
export const Pokemon = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/")
    }
    return (
        <div>
            <Makingtab />
           <p>Pokemonページです</p> 
           <button onClick={navigateHome}>Homeページに戻ります</button>

           <Footer />
        </div>
    )
};