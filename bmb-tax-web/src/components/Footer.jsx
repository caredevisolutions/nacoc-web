import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1E] pt-20 pb-10 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                <div className="md:col-span-2 lg:col-span-1">
                     <Link to="/" className="inline-flex items-center gap-2 font-heading font-medium text-2xl mb-6 text-white group">
                         <span className="w-8 h-8 rounded-lg bg-gold-DEFAULT flex items-center justify-center text-black-rich font-bold text-lg">B</span>
                        <span>BMB <span className="text-gold-DEFAULT">Tax</span></span>
                    </Link>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 font-light pr-4">
                        Premier accounting firm serving Euless, Waco, and beyond. We translate complex financial data into actionable growth strategies.
                    </p>
                    
                    <div className="flex gap-4">
                        {[
                            { Icon: Facebook, link: '#' },
                            { Icon: Linkedin, link: '#' },
                            { Icon: Twitter, link: '#' },
                            { Icon: Instagram, link: '#' }
                        ].map(({ Icon, link }, i) => (
                            <a 
                                key={i} 
                                href={link} 
                                className="w-10 h-10 rounded-full bg-[#2C2C2E] flex items-center justify-center text-[#A1A1AA] hover:bg-gold-DEFAULT hover:text-black-rich transition-all duration-300 border border-white/5 hover:border-gold-DEFAULT group"
                            >
                                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-medium text-white mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-[#A1A1AA]">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Services', path: '/services' },
                            { name: 'About', path: '/about' },
                            { name: 'Contact', path: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="hover:text-gold-DEFAULT transition-colors hover:pl-1 block">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-medium text-white mb-6">Contact</h4>
                    <div className="space-y-6 text-sm">
                        <div>
                            <h5 className="text-gold-light font-medium text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                <MapPin size={12} className="text-gold-DEFAULT" /> Euless
                            </h5>
                            <p className="text-[#A1A1AA] mb-1">1201 W Airport Fwy STE 259</p>
                            <a href="tel:8175542777" className="text-white hover:text-gold-DEFAULT transition-colors">
                                (817) 554-2777
                            </a>
                        </div>
                        
                        <div>
                             <h5 className="text-gold-light font-medium text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
                                <MapPin size={12} className="text-gold-DEFAULT" /> Waco
                            </h5>
                            <p className="text-[#A1A1AA] mb-1">6625 Cascade Dr</p>
                            <a href="tel:2543500233" className="text-white hover:text-gold-DEFAULT transition-colors">
                                (254) 350-0233
                            </a>
                        </div>
                    </div>
                </div>
                
                <div>
                     <h4 className="font-heading font-medium text-white mb-6">Legal</h4>
                     <ul className="space-y-3 text-sm text-[#A1A1AA]">
                        <li><Link to="/privacy" className="hover:text-gold-DEFAULT transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-gold-DEFAULT transition-colors">Terms of Service</Link></li>
                        <li className="pt-4 text-xs text-[#52525B]">
                            &copy; {currentYear} BMB Tax and Financial Service. All rights reserved.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
