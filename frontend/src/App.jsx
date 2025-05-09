import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/plans" element={<Plans />} />
        <Route path="/services" element={<Services />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  )
}

export default App
