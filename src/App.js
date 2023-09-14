import './App.css';
import Layout from './pages/Layout'
import Home from './pages/Home';
import PokemonTemplate from './pages/PokemonTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CertainPoke from './pages/CertainPoke';
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<PokemonTemplate />} />
            <Route path='pokedex/:certainPoke' element={<CertainPoke />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
