import './App.css';
import About from './Components/About';
import Home from './Components/Home'

  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => console.log(data))


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      
      
    </div>
  );
}

export default App;
