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
import CableTVPlans from './pages/CablePlans';
import Blog from './pages/Blog';
import Services from './pages/Service';


const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Service />} />  */}
        <Route path="/plans/internet" element={<InternetPlans />} />
        <Route path="/plans/cable" element={<CableTVPlans />} />
         <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <Footer />
    </div>
  )
}

export default App
