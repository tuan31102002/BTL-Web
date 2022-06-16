import './App.css';
import React from 'react';
import Home from './components/home/Home'


import {Routes,Route} from 'react-router-dom'
import About from './components/about/About';
import Shop from './components/shop';

import Lienhe from './components/lienhe';
import Quanliquay from './tuyendung/quanliquay';
import Ketoannoibo from './tuyendung/ketoannoibo';
import Giamsatvanhanh from './tuyendung/giamsatvanhanh';





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
    <Route path='/quanliquay' element={<Quanliquay/>}></Route>
    <Route path='/ketoannoibo' element={<Ketoannoibo/>}></Route>
    <Route path='/giamsatvanhanh' element={<Giamsatvanhanh/>}></Route>
  </Routes>
  );

  
  
}

export default App;

