import './App.css';
import React from 'react';
import Home from './components/home/Home'


import {Routes,Route} from 'react-router-dom'
import About from './components/about/About';
import Shop from './components/shop';

import Lienhe from './components/lienhe';
<<<<<<< HEAD
import Giamsatvanhanh from './components/tuyendung/giamsatvanhanh';
import Ketoannoibo from './components/tuyendung/ketoannoibo';
import Quanliquay from './components/tuyendung/quanliquay';
import Dangki from './components/dangki';
import Dangnhap from './components/dangnhap';
=======
>>>>>>> f7df69d0b11f19a44e3b6d0a9f2a485b1db0b146






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
<<<<<<< HEAD
    <Route path='/giamsatvanhanh' element={<Giamsatvanhanh/>}></Route>
    <Route path='/ketoannoibo' element={<Ketoannoibo/>}></Route>
    <Route path='/quanliquay' element={<Quanliquay/>}></Route>
    <Route path='/dangki' element={<Dangki/>}></Route>
    <Route path='/dangnhap' element={<Dangnhap/>}></Route>
=======
    
 
>>>>>>> f7df69d0b11f19a44e3b6d0a9f2a485b1db0b146
  </Routes>
  );

  
  
}

export default App;

