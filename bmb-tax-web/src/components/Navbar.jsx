import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Testimonials', path: '/testimonials' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                scrolled
                ? 'bg-theme-bg/95 backdrop-blur-xl py-4 border-theme-border/60 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
                : 'bg-transparent py-6 border-transparent'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group relative z-50">
                    <div className="w-9 h-9 bg-gradient-to-br from-gold-DEFAULT to-gold-dark rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-gold group-hover:shadow-gold-lg transition-shadow">
                        B
                    </div>
                    <div className="font-heading font-medium text-xl md:text-2xl text-theme-text-main tracking-tight">
                        BMB <span className="text-gold-DEFAULT">Tax</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex bg-theme-surface backdrop-blur-md rounded-full px-2 py-1.5 border border-theme-border/80 gap-1">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                                    isActive(item.path)
                                    ? 'text-gold-DEFAULT'
                                    : 'text-theme-text-main hover:text-gold-DEFAULT'
                                }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-gold-DEFAULT/20 border border-gold-DEFAULT/50 rounded-full -z-10"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="group flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300 shadow-gold"
                    >
                        <Sparkles size={13} className="group-hover:rotate-12 transition-transform" />
                        <span>Free Consultation</span>
                        <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-theme-text-main hover:text-gold-DEFAULT transition-colors p-2 relative z-50 bg-theme-surface/80 rounded-full border border-theme-border/50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-theme-bg flex flex-col pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`text-3xl font-heading font-medium transition-colors flex items-center justify-between group border-b border-theme-border pb-4 ${
                                        isActive(item.path) ? 'text-gold-DEFAULT' : 'text-theme-text-main hover:text-gold-DEFAULT'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="mt-8 w-full bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-center shadow-gold"
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

