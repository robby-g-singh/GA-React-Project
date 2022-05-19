import './App.css';
import About from './Components/About';
import Authors from './Components/Authors';
import Home from './Components/Home'
import Quotes from './Components/Quotes';
import {Route, Routes, Link} from 'react-router-dom'
import Hamburger from './Components/Hamburger';
import { useState } from 'react';



function App() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const handleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="App">
      <nav className="nav-bar">
        <ul className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/quotes">Quotes</Link>
          <Link to="/authors">Authors</Link>
        </ul>
       
        <div className='hamburger' onClick={handleHamburger}>
          <Hamburger />
        </div>
      
      </nav>

      <style jsx>{`
        @media (max-width: 525px) {
          .nav-list {
            display: ${hamburgerOpen ? 'block' : 'none'};
            background-color: #FFA07A;
            
          }
        }
      `}
      </style>
  
      <main>
        <Home />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/authors" element={<Authors />} />

        </Routes>
      </main>
      
      
      
    </div>
  );
}

export default App;
