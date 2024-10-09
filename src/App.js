import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Core/Home.js';
import Reservation from './SBOX/SBOX_Magat/Reservation.js';
import About from './SBOX/SBOX_Isidro/About.js';
import Login from './SBOX/SBOX_Magat/Login.js';
import Footer from './Core/Footer.js';


function App() {
  document.title = "Home";
  return (
    <div className="App">
      <div className='main'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reservation' element={<Reservation />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Router>
      <br /><br />
      <Footer />
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
