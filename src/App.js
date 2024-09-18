import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Reservation from './SBOX/SBOX_Magat/Reservation';
import About from './SBOX/SBOX_Isidro/SBOX_About';
import Home from './Core/Home';

function App() {
  document.title = "Home";
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reservation' element={<Reservation />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
