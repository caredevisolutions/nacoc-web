import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-bgAlt pt-20 pb-10 border-t border-theme-border relative z-10 text-theme-text-body">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="md:col-span-2 lg:col-span-1">
                    <Link to="/" className="inline-flex items-center gap-2 font-heading font-medium text-2xl mb-6 text-theme-text-main hover:text-gold-DEFAULT transition-colors group">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-DEFAULT to-gold-dark flex items-center justify-center text-white font-bold text-lg shadow-gold">B</span>
                        <span>BMB <span className="text-gold-DEFAULT">Tax</span></span>
                    </Link>
                    <p className="text-sm leading-relaxed mb-8 font-light pr-4">
                        Premier accounting firm serving Euless, Waco, and beyond. We translate complex financial data into actionable growth strategies.
                    </p>
                    <div className="flex gap-3">
                        {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-theme-surface border border-theme-border flex items-center justify-center text-theme-text-body hover:bg-gold-DEFAULT hover:text-white hover:border-gold-DEFAULT hover:-translate-y-1 transition-all duration-300"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-heading font-medium text-theme-text-main mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'About', path: '/about' },
                            { name: 'Contact', path: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="hover:text-gold-DEFAULT transition-colors hover:pl-1.5 block duration-200">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-heading font-medium text-theme-text-main mb-6">Contact</h4>
                    <div className="space-y-6 text-sm">
                        <div>
                            <h5 className="text-gold-DEFAULT font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <MapPin size={11} /> Euless
                            </h5>
                            <p className="mb-1 text-theme-text-body">1201 W Airport Fwy STE 259</p>
                            <a href="tel:8175542777" className="text-theme-text-main hover:text-gold-DEFAULT transition-colors font-medium">
                                (817) 554-2777
                            </a>
                        </div>
                        <div>
                            <h5 className="text-gold-DEFAULT font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <MapPin size={11} /> Waco
                            </h5>
                            <p className="mb-1 text-theme-text-body">6625 Cascade Dr</p>
                            <a href="tel:2543500233" className="text-theme-text-main hover:text-gold-DEFAULT transition-colors font-medium">
                                (254) 350-0233
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-heading font-medium text-theme-text-main mb-6">Legal</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link to="/privacy" className="hover:text-gold-DEFAULT transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-gold-DEFAULT transition-colors">Terms of Service</Link></li>
                        <li className="pt-4 text-xs text-theme-text-light border-t border-theme-border mt-4">
                            &copy; {currentYear} BMB Tax. All rights reserved.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

