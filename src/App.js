import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';

// const
function App  ()  {
    return (
        <HelmetProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                 <Route path="/services" element={<Services />} /> 
                 <Route path="/faqs" element={<FAQs />} />
                 <Route path="/contact" element={<Contact />} />   
            </Routes>
        </Router>
        </HelmetProvider>
    );
};

export default App;
