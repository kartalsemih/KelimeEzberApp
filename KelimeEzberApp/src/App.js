
import './App.css';
import Words from './components/most-used-words.jsx'
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage'
import Verb from './components/most-used-verbs'



function App() {
  return (
    <>
    
      <Routes>
          <Route path="/kelime" element={<Words   />} />
          <Route path="/" element={<MainPage   />} />
          <Route path="/fiil" element={<Verb   />} />
        </Routes>
    </>


  );
}

export default App;
