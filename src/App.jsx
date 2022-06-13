import './App.css';
import React,{  useState } from 'react';
import Home from './components/home/Home'
import Header from './components/header/header';
import Footer from './components/footer/Footer'





function App() {
  // const [title, setTitle] = useState('hello');
  return (
    <div className="App">
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </div>
  );
}

// class App extends Component {
//   const [title, setTitle] = useState('');
//   render(){
//     return(
//       <div>
//         <Header/>
//         <Home/>
//         <Footer/>
//       </div>
//     )
//   }
// }





export default App;
// export default Header; 
