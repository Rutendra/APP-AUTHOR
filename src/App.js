import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
