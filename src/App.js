import './App.css';
import HeaderComponent from './pages/HeaderComponent/HeaderComponent';
import HomeComponent from './pages/Home/HomeComponent.js';
import IdopontComponent from './pages/IdopontComponent/IdopontComponent.js'
import BejelentkezesComponent from './pages/BejelentkezesComponent/BejelentkezesComponent.js'
import RegisztracioComponent from './pages/RegisztracioComponent/RegisztracioComponent.js'
import KapcsolatComponent from './pages/KapcsolatComponent/KapcsolatComponent.js'
import SegitsegComponent from './pages/SegitsegComponent/SegitsegComponent.js'
import SzakembereinkComponent from './pages/SzakembereinkComponent/SzakembereinkComponent.js'
import TermekekComponent from './pages/TermekekComponent/TermekekComponent.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <HeaderComponent></HeaderComponent>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path='/idopontfoglalas' element={<IdopontComponent/>} />
        <Route path='/bejelentkezes' element={<BejelentkezesComponent/>} />
        <Route path='/regisztracio' element={<RegisztracioComponent/>} />
        <Route path='/kapcsolat' element={<KapcsolatComponent/>} />
        <Route path='/ki-miben-segit' element={<SegitsegComponent/>} />
        <Route path='/szakembereink' element={<SzakembereinkComponent/>} />
        <Route path='/termekek' element={<TermekekComponent/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
