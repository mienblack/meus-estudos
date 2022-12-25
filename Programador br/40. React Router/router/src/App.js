import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home'
import Aula from './components/Aula'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Assistir from './components/Assistir';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/aulas/:id/assistir' element={<Assistir />} />
          <Route path='/aulas/:id' element={<Aula />} />
          <Route path='/aulas' element={<Aulas />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
