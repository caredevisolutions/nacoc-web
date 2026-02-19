import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-rich text-white pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                     <Link to="/" className="inline-block font-heading font-bold text-3xl mb-6 text-white group">
                        BMB <span className="text-gold-DEFAULT group-hover:text-gold-light transition-colors">Tax</span>
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Premier accounting firm serving Euless, Waco, and beyond. We translate complex financial data into actionable growth strategies.
                    </p>
                    
                    <div className="text-slate-400 text-sm space-y-6">
                        <div className="group">
                            <h5 className="text-gold-DEFAULT font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                 <MapPin size={12} /> Euless Branch
                            </h5>
                            <p className="text-slate-300">1201 W Airport Fwy STE 259</p>
                            <p className="text-slate-300 mb-1">Euless, TX 76040</p>
                            <a href="tel:8175542777" className="font-bold text-white hover:text-gold-DEFAULT transition-colors">
                                (817) 554-2777
                            </a>
                        </div>
                        
                        <div className="group">
                             <h5 className="text-gold-DEFAULT font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                                <MapPin size={12} /> Waco Branch
                            </h5>
                            <p className="text-slate-300">6625 Cascade Dr</p>
                            <p className="text-slate-300 mb-1">Woodway, TX 76712</p>
                            <a href="tel:2543500233" className="font-bold text-white hover:text-gold-DEFAULT transition-colors">
                                (254) 350-0233
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-gold-DEFAULT transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        {['Tax Preparation', 'Bookkeeping', 'Payroll', 'Notary Public', 'Consulting'].map((item) => (
                            <li key={item}>
                                <Link to="/services" className="hover:text-gold-DEFAULT transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Connect</h4>
                    <div className="flex gap-4">
                        {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-DEFAULT hover:text-black-rich transition-all duration-300 text-slate-400">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
                <p>&copy; {currentYear} BMB Tax and Financial Service. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-gold-DEFAULT transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-gold-DEFAULT transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
