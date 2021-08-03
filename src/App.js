import './App.css';
import CoffeeList from './components/CoffeeList';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="app">
     <header>
       <h1 className="header__h1">Café Finder</h1>
     </header>
     <section className='container'>
      <CoffeeList />
      <Reviews />
     </section>
    </div>
  );
}

export default App;
