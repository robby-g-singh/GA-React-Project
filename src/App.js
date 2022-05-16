import './App.css';
import About from './Components/About';
import Authors from './Components/Authors';
import Home from './Components/Home'
import Quotes from './Components/Quotes';
import {Route, Routes, Link} from 'react-router-dom'

  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => console.log(data))


function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <ul className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/quotes">Quotes</Link>
          <Link to="/authors">Authors</Link>
        </ul>
      </nav>

      <main>
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
