import React from "react"
import { useNavigate } from "react-router-dom";
export const Pokemon = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/")
    }
    return (
        <div>
           <p>Pokemonページです</p> 
           <button onClick={navigateHome}>Homeページに戻ります</button>
        </div>
    )
};