import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-slate-200">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-white text-2xl font-heading font-bold mb-6">About NACOC</h3>
            <p className="text-base leading-relaxed mb-6 text-slate-300">
              Nepalese American Chamber of Commerce was established to advance and promote the 
              economic environment for business, and to advocate responsive government and 
              quality education.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-all"><Facebook size={22} /></a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-all"><Instagram size={22} /></a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-all"><Linkedin size={22} /></a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-secondary hover:text-white transition-all"><Twitter size={22} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-base">
              <li><Link to="/about-us" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Programs</Link></li>
              <li><Link to="/directory" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Business Directory</Link></li>
              <li><Link to="/membership" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Membership</Link></li>
              <li><Link to="/contact-us" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-2xl font-heading font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-base">
              <li><Link to="#" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">News & Events</Link></li>
              <li><Link to="#" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Community Resources</Link></li>
              <li><Link to="#" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Photo Gallery</Link></li>
              <li><Link to="/login" className="hover:text-secondary hover:translate-x-1 inline-block transition-all">Member Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-heading font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6 text-base">
              <li className="flex items-start">
                <MapPin size={24} className="mr-4 mt-1 flex-shrink-0 text-secondary" />
                <span className="text-slate-300">
                  Nepalese American Chamber of Commerce<br />
                  2016 W. Grauwyler Rd, Irving, TX, 75061
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={24} className="mr-4 flex-shrink-0 text-secondary" />
                <a href="tel:+12149950137" className="hover:text-white transition-colors text-slate-300">+1 214 995 0137</a>
              </li>
              <li className="flex items-center">
                <Mail size={24} className="mr-4 flex-shrink-0 text-secondary" />
                <a href="mailto:info@nacoc.org" className="hover:text-white transition-colors text-slate-300">info@nacoc.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-10 text-center text-base text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nepalese American Chamber of Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
