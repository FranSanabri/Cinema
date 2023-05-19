import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Premieres from './components/Premieres/Premieres';


function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/home" element={<Home />}/> 
      <Route path="/premieres" element={<Premieres />}/>
          </Routes>
    </div>
  );
}

export default App;
