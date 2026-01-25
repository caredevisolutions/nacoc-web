import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, User, ChevronRight, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Programs', path: '/programs' },
    { 
      name: 'News', 
      path: '#',
      children: [
        { name: 'Events', path: '/events' },
        { name: 'Blogs', path: '/blogs' }
      ]
    },
    { name: 'Directory', path: '/directory' },
    { name: 'Resources', path: '/resources' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact-us' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Top Bar - Increased text size slightly */}
      <div className="bg-primary-dark text-white py-3 relative z-50">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-2 lg:gap-0">
            {/* Left: Contact */}
            <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center lg:justify-start items-center text-slate-300 text-sm gap-1 lg:gap-0">
               <span className="flex items-center hover:text-white transition-colors cursor-pointer">
                 <Phone size={14} className="mr-2 text-secondary" /> +1 (214) 995-0137
               </span>
               <span className="flex items-center hover:text-white transition-colors cursor-pointer">
                 <Mail size={14} className="mr-2 text-secondary" /> info@nacoc.org
               </span>
            </div>
            
            {/* Center: Organization Name */}
            <div className="hidden lg:block text-center font-bold tracking-wide uppercase text-secondary/90 text-xs lg:text-sm">
               
            </div>

            {/* Right: Social/Extras */}
            <div className="hidden lg:flex justify-end items-center space-x-5 text-slate-300 text-sm">
               <span className="text-secondary font-bold">EN</span>
            </div>
         </div>
      </div>

      <header 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white py-4 lg:py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center group gap-2 flex-shrink-0">
               <div className="bg-white p-1 rounded-md">
                  <img src="https://nacoc.org/wp-content/uploads/2021/06/logo.png" alt="NACOC Logo" className="h-10 lg:h-12 w-auto" />
               </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.children ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-full text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${
                         openDropdown === link.name ? 'text-primary' : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                      }`}
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.name}
                      <ChevronDown size={14} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 rounded-full text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${
                        isActive(link.path) 
                          ? 'text-primary bg-primary/5' 
                          : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.children && (
                     <div 
                        className={`absolute top-full left-0 w-48 pt-2 transition-all duration-300 ${
                           openDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                        }`}
                        onMouseEnter={() => setOpenDropdown(link.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                     >
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-2 flex flex-col gap-1">
                           {link.children.map(child => (
                              <Link 
                                 key={child.name} 
                                 to={child.path}
                                 className="block px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors"
                              >
                                 {child.name}
                              </Link>
                           ))}
                        </div>
                     </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Navigation (Compact for smaller LG screens) */}
             <nav className="hidden lg:flex xl:hidden items-center space-x-0">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                   {link.children ? (
                     <button
                        className="flex items-center gap-1 px-2 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 text-slate-600 hover:text-primary hover:bg-slate-50"
                     >
                        {link.name}
                     </button>
                   ) : (
                      <Link
                        to={link.path}
                        className={`relative px-2 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                          isActive(link.path) 
                            ? 'text-primary bg-primary/5' 
                            : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                   )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Search */}
            <div className="hidden lg:flex items-center flex-shrink-0 ml-4 gap-3">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-slate-500 hover:text-primary hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link 
                to="/login"
                className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 text-sm whitespace-nowrap"
              >
                <span>Member Portal</span>
                <User size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-4 lg:hidden">
                <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    <Search size={24} />
                </button>
                <button
                className="text-slate-800 focus:outline-none p-2 hover:bg-slate-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-40 px-6 lg:hidden overflow-y-auto"
          >
             <div className="flex flex-col space-y-2 pb-10">
               {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {link.children ? (
                     <div className="flex flex-col">
                        <div className="flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-slate-700">
                           <span>{link.name}</span>
                        </div>
                        <div className="pl-8 flex flex-col gap-2">
                           {link.children.map(child => (
                              <Link
                                 key={child.name}
                                 to={child.path}
                                 className="py-2 px-4 rounded-lg text-base text-slate-600 hover:text-primary transition-colors"
                                 onClick={() => setIsOpen(false)}
                              >
                                 {child.name}
                              </Link>
                           ))}
                        </div>
                     </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium transition-colors ${
                        isActive(link.path)
                          ? 'bg-primary/5 text-primary border border-primary/10'
                          : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={16} className="text-slate-300" />
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="h-px bg-slate-100 my-6"></div>
               <Link
                  to="/login"
                  className="w-full py-4 text-center rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                 Access Member Portal
                </Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
