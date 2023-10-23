import React from 'react';
import Navbar from './componente/inc/Navbar';
import Home from './componente/pages/home';
import About from './componente/pages/about';
import Contact from './componente/pages/contact';
import Footer from './componente/inc/Futer'
import { BrowserRouter as Router, Route, Routes ,  } from 'react-router-dom';

const App = () => {
  return (
    
   
    <Router>
       <>
      <Navbar />
      
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
          
      <Footer/>
  </>
    </Router>
   
  );
}

export default App;
