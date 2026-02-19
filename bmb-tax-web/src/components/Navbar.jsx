import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
    ];

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 border-b ${
                scrolled 
                ? 'bg-black-rich/95 backdrop-blur-md py-4 border-white/5 shadow-2xl' 
                : 'bg-black-rich/50 backdrop-blur-sm py-6 border-transparent'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="font-heading font-bold text-2xl md:text-3xl text-white tracking-wide">
                        BMB <span className="text-gold-DEFAULT group-hover:text-gold-light transition-colors">Tax</span>
                    </div>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link 
                                to={item.path}
                                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                                    location.pathname === item.path 
                                    ? 'text-gold-DEFAULT' 
                                    : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </Link>
                            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gold-DEFAULT transition-all duration-300 ${
                                location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </div>
                    ))}
                    
                    <Link 
                        to="/contact" 
                        className="bg-transparent border border-gold-DEFAULT text-gold-DEFAULT px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gold-DEFAULT hover:text-black-rich transition-all duration-500 shadow-[0_0_15px_-3px_rgba(198,164,92,0.3)] hover:shadow-[0_0_25px_-3px_rgba(198,164,92,0.6)]"
                    >
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white hover:text-gold-DEFAULT transition-colors p-2" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black-rich/95 backdrop-blur-xl transition-all duration-500 md:hidden flex justify-center items-center ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}>
                 <div className="flex flex-col items-center gap-8">
                    {navLinks.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path}
                            className="text-2xl font-heading text-white hover:text-gold-DEFAULT transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link 
                        to="/contact"
                        className="mt-4 bg-gold-DEFAULT text-black-rich px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all shadow-lg shadow-gold-DEFAULT/20"
                        onClick={() => setIsOpen(false)}
                    >
                        Free Consultation
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
