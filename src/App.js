import './App.css';
import About from './Components/About';
import Authors from './Components/Authors';
import Home from './Components/Home'
import Quotes from './Components/Quotes';

  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => console.log(data))


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Quotes />
      <Authors />
      
      
    </div>
  );
}

export default App;
