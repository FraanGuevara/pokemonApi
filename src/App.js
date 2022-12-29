import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import PokemonesHome from './pages/PokemonesHome';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonesHome/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
