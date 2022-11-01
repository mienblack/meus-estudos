import logo from './logo.svg';
import Header from './Header'
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div>
      <Header name='React Page' links={["Sobre", "Compras", "Contato", "Redes"]}></Header>
      <Counter count={21}></Counter>
    </div>

  );
}

export default App;
