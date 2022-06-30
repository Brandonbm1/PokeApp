import './styles/styles.css';
// import Header from './components/Header'
// import Footer from './components/Footer'
import Main from './pages/Main';
import { ContextProvider } from './context/ContextPokemon';
// import Pagina1  from './pages/Pagina1';

function App() {
  return (
    <ContextProvider className="">
      <Main />
    </ContextProvider> 

  );
}

export default App;
