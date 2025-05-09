import React from 'react';
import CustomNavbar from '../components/CustomNavbar';

const Home = () => {
  return (
    <div>
     <div className="bg-dark text-white p-5 text-center">
  <h1 className="display-4">Welcome to Radha Cable & Internet</h1>
  <p className="lead">Enjoy high-speed internet and affordable cable services!</p>
  <a href="/plans" className="btn btn-outline-light mt-3">Explore Plans</a>
</div>
      
    </div>
  )
}

export default Home
