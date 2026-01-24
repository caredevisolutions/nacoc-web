import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, User, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Programs', path: '/programs' },
    { name: 'Business Directory', path: '/directory' },
    { name: 'Resources', path: '/resources' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path) => location.pathname === path;

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Disclaimer Strip */}
      <div className="bg-primary-dark text-white text-sm py-3 hidden lg:block tracking-wide">
         <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex space-x-8 opacity-90">
               <span className="flex items-center"><Phone size={14} className="mr-2" /> +1 214 995 0137</span>
               <span className="flex items-center"><Mail size={14} className="mr-2" /> info@nacoc.org</span>
            </div>
            <div className="opacity-90 font-medium">
               Unified Voice for Nepalese American Businesses
            </div>
         </div>
      </div>

      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-4 top-0' 
            : 'bg-white py-6 top-0 lg:top-12'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-3xl lg:text-4xl font-heading font-bold text-primary-dark tracking-tight">
                 NACOC<span className="text-secondary">USA</span>
              </div>
              <div className="hidden lg:block w-px h-10 bg-gray-300 mx-5"></div>
              <div className="hidden lg:block text-sm text-gray-500 font-sans leading-tight">
                Nepalese American <br/> Chamber of Commerce
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-semibold transition-colors relative hover:text-primary-dark ${
                    isActive(link.path) ? 'text-primary font-bold' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="/login"
                className="flex items-center px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-base font-bold shadow-sm hover:shadow-md"
              >
                <User size={18} className="mr-2" /> Member Portal
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary-dark focus:outline-none p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 animate-fade-in-up">
           <div className="flex flex-col space-y-4">
             {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-primary/5 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-4"></div>
             <Link
                to="/login"
                className="py-3 px-4 rounded-xl bg-primary text-white font-bold flex justify-center items-center shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
               <User size={18} className="mr-2" /> Member Access
              </Link>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
