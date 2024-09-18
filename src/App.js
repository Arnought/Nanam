import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Core/Home.js';
import Reservation from './SBOX/SBOX_Magat/SBOX_Reservation.js';
import About from './SBOX/SBOX_Isidro/About.js';


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
