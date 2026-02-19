import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Services', path: '#services' },
        { name: 'About', path: '#about' },
        { name: 'Testimonials', path: '#testimonials' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                scrolled 
                ? 'bg-[#1C1C1E]/90 backdrop-blur-xl py-4 border-white/5 shadow-2xl shadow-black/50' 
                : 'bg-transparent py-6 border-transparent'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group relative z-50">
                     <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gold-DEFAULT rounded-lg flex items-center justify-center text-black-rich font-bold text-lg">B</div>
                        <div className="font-heading font-medium text-xl md:text-2xl text-white tracking-tight">
                            BMB <span className="text-gold-DEFAULT">Tax</span>
                        </div>
                     </div>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex bg-[#2C2C2E]/50 backdrop-blur-md rounded-full px-6 py-2 border border-white/5">
                        {navLinks.map((item) => (
                            <a 
                                key={item.name}
                                href={item.path}
                                className={`relative px-4 py-1 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                                    location.hash === item.path 
                                    ? 'text-white' 
                                    : 'text-[#A1A1AA] hover:text-white'
                                }`}
                            >
                                {item.name}
                                {location.hash === item.path && (
                                    <motion.span 
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    ></motion.span>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                     <Link 
                        to="/contact" 
                        className="group flex items-center gap-2 bg-white text-black-rich px-5 py-2.5 rounded-full font-medium text-xs uppercase tracking-wider hover:bg-gold-DEFAULT hover:text-black-rich transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-gold-DEFAULT/20"
                    >
                        <span>Free Consultation</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white hover:text-gold-DEFAULT transition-colors p-2 relative z-50 backdrop-blur-sm bg-white/5 rounded-full"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#1C1C1E] flex flex-col pt-32 px-6 md:hidden"
                    >
                         <div className="flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.path}
                                    className="text-3xl font-heading font-medium text-white hover:text-gold-DEFAULT transition-colors flex items-center justify-between group border-b border-white/5 pb-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                </a>
                            ))}
                            <Link 
                                to="/contact"
                                className="mt-8 w-full bg-gold-DEFAULT text-black-rich px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-white transition-all text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Free Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
