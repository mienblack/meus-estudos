import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Damien" />
      <Pessoa name="Damien" age="20" job="Programador" src={url} />
      <List />
    </div>
  );
}

export default App;
