import './App.css';
import Layout from './pages/Layout'
import Home from './components/Home';
import PokemonTemplate from './components/PokemonTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CertainPoke from './components/CertainPoke';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="pokedex" element={<PokemonTemplate/>}/>
            <Route path='pokedex/:certainPoke' element={<CertainPoke/>}/> 
          </Route>
      </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
