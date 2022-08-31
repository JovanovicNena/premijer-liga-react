import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './strane/Pocetna';
import Tabela from './strane/Tabela';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="tabela" element={<Tabela />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
