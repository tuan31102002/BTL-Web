import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Home from './components/home/Home'
import Header from './components/header/header';
import Footer from './components/footer/Footer'




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Home/>
        <Footer/>
      </div>
    )
  }
}





export default App;
// export default Header; 
