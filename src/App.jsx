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
import Dangki from './components/dangki';
import Dangnhap from './components/dangnhap';
import Gioithieu from './components/gioithieu';
import Troligiamdoc from './components/tuyendung/troligiamdoc';
import Nhanvienkiemke from './components/tuyendung/nhanvienkiemke';
import Cart from './components/cart';
import Thanhtoan from './components/thanhtoan';
import Details from './components/details'
import Trangquantri from './components/trangquantri';
import Quanlisanpham from './components/quanlisanpham';
import Quanlidonhang from './components/quanlidonhang';
import Quanlituyendung from './components/quanlituyendung';
import Trangchutuyendungg from './components/tuyendung/trangchutuyendung';
import Quanlilienhe from './components/quanlilienhe';





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
    <Route path='/troligiamdoc' element={<Troligiamdoc/>}></Route>
    <Route path='/nhanvienkiemke' element={<Nhanvienkiemke/>}></Route>
    <Route path='/dangki' element={<Dangki/>}></Route>
    <Route path='/dangnhap' element={<Dangnhap/>}></Route>
    <Route path='/gioithieu' element={<Gioithieu/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/thanhtoan' element={<Thanhtoan/>}></Route>
    <Route path='/shop/:productId' element={<Details/>}></Route>
    <Route path='/admin' element={<Trangquantri/>}></Route>
    <Route path='/admin/quanlisanpham' element={<Quanlisanpham/>}></Route>
    <Route path='/admin/quanlidonhang' element={<Quanlidonhang/>}></Route>
    <Route path='/admin/quanlituyendung' element={<Quanlituyendung/>}></Route>
    <Route path='/trangchutuyendung' element={<Trangchutuyendungg/>}></Route>
    <Route path='/admin/quanlilienhe' element={<Quanlilienhe/>}></Route>

    


    
  </Routes>
  );

  
  
}

export default App;

