import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Membership from './pages/Membership';
import MembershipCheckout from './pages/MembershipCheckout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import BusinessDirectory from './pages/BusinessDirectory';
import Resources from './pages/Resources';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/membership/checkout" element={<MembershipCheckout />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/directory" element={<BusinessDirectory />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            
            {/* Fallback for undefined routes */}
            <Route path="*" element={<div className="p-20 text-center">Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
