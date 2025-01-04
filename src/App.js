import { BrowserRouter, Route,Routes, useNavigate } from 'react-router-dom';
import {PageRouter} from './Components/Router/PageRouter';
import './App.css';
import { Footer } from './Components/Footer/Footer.tsx';
import { Makingtab } from './Components/Header/Makingtab.tsx';
import {Banner} from "./Components/Header/Banner.tsx";
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
      <Makingtab />
      
      <Banner />
      
      <p>ホーム画面です</p>
      <Footer />
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
