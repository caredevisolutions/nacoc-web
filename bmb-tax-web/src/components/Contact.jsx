import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black-rich relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 text-gold-light font-bold text-xs uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-gold-DEFAULT animate-pulse"></span> Contact Us
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                        Let's Discuss <br/>
                        <span className="text-gold-DEFAULT">Your Financial Future</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed">
                        Ready to maximize your returns? Visit our expert team in Euless or Woodway. We're here to answer your questions and guide you to success.
                    </p>
                </motion.div>
                
                <div className="space-y-8">
                    {/* Locations */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="font-bold text-xl text-white flex items-center gap-2">
                            <MapPin className="text-gold-DEFAULT" size={24} /> Our Locations
                        </h3>

                        {/* Euless Branch */}
                        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 relative group hover:border-gold-DEFAULT/30 transition-all duration-300 shadow-sm hover:shadow-md">
                            <h4 className="font-bold text-lg text-white mb-2">Euless Branch</h4>
                            <p className="text-slate-400 mb-4">1201 W Airport Fwy, Ste 259, Euless, TX 76040</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                                <a href="tel:+18175542777" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black-rich border border-slate-700 hover:border-gold-DEFAULT/30 text-slate-300 transition-all duration-300">
                                    <Phone size={16} /> (817) 554-2777
                                </a>
                                <a href="https://maps.google.com/?q=1201+W+Airport+Fwy,+Ste+259,+Euless,+TX" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black-rich border border-slate-700 hover:border-gold-DEFAULT/30 text-slate-300 transition-all duration-300">
                                    <ArrowRight size={16} /> Directions
                                </a>
                            </div>
                        </div>

                         {/* Waco/Woodway Branch */}
                         <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 relative group hover:border-gold-DEFAULT/30 transition-all duration-300 shadow-sm hover:shadow-md">
                            <h4 className="font-bold text-lg text-white mb-2">Waco (Woodway) Branch</h4>
                            <p className="text-slate-400 mb-4">6625 Cascade Dr, Woodway, TX 76712</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                                <a href="tel:+12543500233" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black-rich border border-slate-700 hover:border-gold-DEFAULT/30 text-slate-300 transition-all duration-300">
                                    <Phone size={16} /> (254) 350-0233
                                </a>
                                <a href="https://maps.google.com/?q=6625+Cascade+Dr,+Woodway,+TX+76712" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black-rich border border-slate-700 hover:border-gold-DEFAULT/30 text-slate-300 transition-all duration-300">
                                    <ArrowRight size={16} /> Directions
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-start gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-sm"
                        >
                             <div className="w-10 h-10 bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 rounded-lg flex items-center justify-center shrink-0 text-gold-DEFAULT">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-base mb-1 text-white">Business Hours</h4>
                                <p className="text-slate-400 text-sm">Mon - Fri: 9am - 6pm</p>
                                <p className="text-slate-400 text-xs mt-1">Weekend by appointment</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-start gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-700 shadow-sm"
                        >
                             <div className="w-10 h-10 bg-gold-DEFAULT text-black-rich rounded-lg flex items-center justify-center shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-base mb-1 text-white">Email Us</h4>
                                <a href="mailto:info@bmbtax.com" className="text-slate-400 hover:text-gold-DEFAULT transition-colors text-sm break-all">info@bmbtax.com</a>
                                <p className="text-slate-400 text-xs mt-1">Quick Online Support</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 relative overflow-hidden shadow-xl"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-DEFAULT/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                
                <h3 className="text-2xl font-bold mb-2 text-white relative z-10">Send us a Message</h3>
                <p className="text-slate-400 mb-8 relative z-10 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-5 relative z-10">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-black-rich border border-slate-700 focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 text-white placeholder:text-slate-500" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                             <input type="text" className="w-full px-4 py-3 rounded-xl bg-black-rich border border-slate-700 focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 text-white placeholder:text-slate-500" placeholder="Doe" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-black-rich border border-slate-700 focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 text-white placeholder:text-slate-500" placeholder="john@example.com" />
                    </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Needed</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 rounded-xl bg-black-rich border border-slate-700 focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 appearance-none text-white cursor-pointer">
                                <option>Tax Preparation</option>
                                <option>Bookkeeping & Payroll</option>
                                <option>Business Consulting</option>
                                <option>Notary Services</option>
                                <option>Insurance & Other</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                    
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Preferred Location</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 rounded-xl bg-black-rich border border-slate-700 focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 appearance-none text-white cursor-pointer">
                                <option>Euless, TX</option>
                                <option>Woodway (Waco), TX</option>
                            </select>
                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                        <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-black-rich border border-slate-700 focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 resize-none text-white placeholder:text-slate-500" placeholder="Tell us about your needs..."></textarea>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button" 
                        className="w-full bg-gold-DEFAULT hover:bg-gold-light text-black-rich font-bold py-4 rounded-xl transition-all text-lg flex items-center justify-center gap-2 group mt-2 shadow-lg hover:shadow-gold-DEFAULT/30"
                    >
                        <span>Send Message</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
