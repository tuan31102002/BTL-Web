import './App.css';
import React from 'react';
import Home from './components/home/Home'


import {Routes,Route} from 'react-router-dom'
import About from './components/about/About';
import Shop from './components/shop';

import Lienhe from './components/lienhe';
import Giamsatvanhanh from './components/tuyendung/giamsatvanhanh';
import Ketoannoibo from './components/tuyendung/ketoannoibo';
import Quanliquay from './components/tuyendung/quanliquay';






function App() {
   return (
    // <div className="App">
    //   <div>
    //     <Header/>
    //     <Home/>
    //     <Footer/>
    //   </div>
    // </div>

  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/lienhe' element={<Lienhe/>}></Route>
    <Route path='/giamsatvanhanh' element={<Giamsatvanhanh/>}></Route>
    <Route path='/ketoannoibo' element={<Ketoannoibo/>}></Route>
    <Route path='/quanliquay' element={<Quanliquay/>}></Route>
 
  </Routes>
  );

  
  
}

export default App;

