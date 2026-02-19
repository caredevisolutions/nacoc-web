import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import AboutPage from './pages/AboutPage';

import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
  return (
    <HelmetProvider>
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-black-rich text-neutral-300 font-sans selection:bg-gold-light selection:text-black-rich flex flex-col overflow-x-hidden">
                <Navbar />
                <div className="flex-grow pt-0">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/testimonials" element={<TestimonialsPage />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    </HelmetProvider>
  );
}

export default App;
