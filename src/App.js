import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';

import CertainPoke from './pages/CertainPoke';
import Home from './pages/Home';
import Layout from './pages/Layout'
import NoMatch from './pages/NoMatch';
import PokemonTemplate from './pages/PokemonTemplate';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokedex" element={<PokemonTemplate />} />
            <Route path='pokedex/:certainPoke' element={<CertainPoke />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>

      </HashRouter>

    </div>
  );
}

export default App;
