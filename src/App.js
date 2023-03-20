import logo from './logo.svg';
import './App.css';
import Compo from './Compo';

function App() {
  return (
    <>
      <Compo />
      <h1>React App</h1>
      <p>React App</p>
      <p>{7%4}</p>
      <Compo/>
    </>
    // <div className="App">
    //   <nav>
    //     <ul className='lap'>
    //       <li><a href="">Navbar</a></li>
    //       <li><a href="">Home</a></li>
    //       <li><a href="">About</a></li>
    //     </ul>
    //   </nav>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>JOSH BAM 🖐🔥👏💖💯</p>
    //   </header>
    // </div>
  );
}

export default App;
