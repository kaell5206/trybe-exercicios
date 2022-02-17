import pokemons from './data';
import Pokemon from './Pokemon';
import './App.css';


function App() {
  return (
    <main>
      <h1 className='title'>POKEDEX</h1>
      <section className='body-poke'>

      {pokemons.map((pok) => { return <Pokemon poke={pok}/>})}
      </section>
    </main>
  );
}

export default App;
