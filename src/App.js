import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom';
import {PageRouter} from './Components/Router/PageRouter';
import './App.css';

const Home = () => {
  const navigate = useNavigate()
  const navigatePokemon = () => {
    navigate("/pokemon")
  }
  const navigateOnepiece = () => {
    navigate("/onepiece")
  }
  const navigateDragonball = () => {
    navigate("/dragonball")
  }
  const navigateYuugiou = () => {
    navigate("/yuugiou")
  }
  const navigateVice = () => {
    navigate("/vice")
  }
  const navigateUnionArena = () => {
    navigate("/unionarena")
  }
  const navigateDP = () => {
    navigate("/dp")
  }
  const navigateStepUp = () => {
    navigate("/stepup")
  }
  const navigateOthers = () => {
    navigate("/others")
  }
  
  return (
    <div>
      <p>ホーム画面です</p>
      {/* <button onClick={navigatePokemon}>pokemonページに遷移します</button>
      <button onClick={navigateOnepiece}>onepieceページに遷移します</button>
      <button onClick={navigateDragonball}>dragonballページに遷移します</button>
      <button onClick={navigateYuugiou}>yuugiouページに遷移します</button>
      <button onClick={navigateVice}>viceページに遷移します</button>
      <button onClick={navigateUnionArena}>unionarenaページに遷移します</button>
      <button onClick={navigateDP}>dpページに遷移します</button>
      <button onClick={navigateStepUp}>stepupページに遷移します</button>
      <button onClick={navigateOthers}>その他のページに遷移します</button> */}
    </div>
  )
}

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <PageRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
