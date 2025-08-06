import React from 'react';
import {Routes, Route} from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import About from './pages/About';
import InternetPlans from './pages/InternetPlans';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Service from './pages/Service';
import SupportPage from './pages/SupportPage';


const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Service />} />  */}
        <Route path="/plans/internet" element={<InternetPlans />} />
         <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <Footer />
    </div>
  )
}

export default App
