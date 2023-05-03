import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PokemonTemplate from './components/PokemonTemplate';


function App() {
  return (
    <div className="App">
     <Header/>
     <PokemonTemplate/>
     <Footer/>
    </div>
  );
}

export default App;
