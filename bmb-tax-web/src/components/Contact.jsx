import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-theme-bg relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gold-light/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column: Contact Info */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-gold-light/20 text-gold-dark font-bold tracking-widest uppercase text-[10px]">
                                    Get In Touch
                                </span>
                            </div>
                            
                            <h2 className="text-4xl lg:text-5xl font-heading font-medium mb-6 text-theme-text-main leading-tight">
                                Let's Discuss <br/>
                                <span className="text-gold-DEFAULT italic">Your Financial Future</span>
                            </h2>
                            
                            <p className="text-theme-text-body text-lg mb-10 max-w-md leading-relaxed font-light">
                                Ready to maximize your returns? Visit our expert team in Euless or Woodway. We're here to guide you to success.
                            </p>
                        </motion.div>
                        
                        <div className="space-y-6">
                            {/* Locations */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h3 className="font-heading font-medium text-xl text-theme-text-main flex items-center gap-2 mb-4">
                                    <MapPin className="text-gold-DEFAULT" size={20} /> Our Locations
                                </h3>
        
                                {/* Euless Branch */}
                                <div className="bg-white p-6 rounded-2xl border border-theme-border relative group hover:border-gold-DEFAULT/30 transition-all duration-300 shadow-soft hover:shadow-lg">
                                    <h4 className="font-bold text-theme-text-main mb-1">Euless Branch</h4>
                                    <p className="text-theme-text-body text-sm mb-4">1201 W Airport Fwy, Ste 259, Euless, TX 76040</p>
                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                        <a href="tel:+18175542777" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border hover:border-gold-DEFAULT/30 text-theme-text-body hover:text-gold-dark transition-all font-medium">
                                            <Phone size={14} /> (817) 554-2777
                                        </a>
                                        <a href="https://maps.google.com/?q=1201+W+Airport+Fwy,+Ste+259,+Euless,+TX" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border hover:border-gold-DEFAULT/30 text-theme-text-body hover:text-gold-dark transition-all font-medium">
                                            <ArrowRight size={14} /> Directions
                                        </a>
                                    </div>
                                </div>
        
                                 {/* Waco/Woodway Branch */}
                                 <div className="bg-white p-6 rounded-2xl border border-theme-border relative group hover:border-gold-DEFAULT/30 transition-all duration-300 shadow-soft hover:shadow-lg">
                                    <h4 className="font-bold text-theme-text-main mb-1">Waco (Woodway) Branch</h4>
                                    <p className="text-theme-text-body text-sm mb-4">6625 Cascade Dr, Woodway, TX 76712</p>
                                    <div className="flex flex-wrap items-center gap-3 text-sm">
                                        <a href="tel:+12543500233" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border hover:border-gold-DEFAULT/30 text-theme-text-body hover:text-gold-dark transition-all font-medium">
                                            <Phone size={14} /> (254) 350-0233
                                        </a>
                                        <a href="https://maps.google.com/?q=6625+Cascade+Dr,+Woodway,+TX+76712" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-theme-bg border border-theme-border hover:border-gold-DEFAULT/30 text-theme-text-body hover:text-gold-dark transition-all font-medium">
                                            <ArrowRight size={14} /> Directions
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
        
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-start gap-4">
                                     <div className="w-10 h-10 bg-white border border-theme-border rounded-full flex items-center justify-center shrink-0 text-gold-dark shadow-sm">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-theme-text-main mb-0.5">Business Hours</h4>
                                        <p className="text-theme-text-body text-xs">Mon - Fri: 9am - 6pm</p>
                                    </div>
                                </div>
        
                                <div className="flex items-start gap-4">
                                     <div className="w-10 h-10 bg-white border border-theme-border rounded-full flex items-center justify-center shrink-0 text-gold-dark shadow-sm">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-theme-text-main mb-0.5">Email Us</h4>
                                        <a href="mailto:info@bmbtax.com" className="text-theme-text-body hover:text-gold-dark transition-colors text-xs break-all font-medium">info@bmbtax.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    {/* Right Column: Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 md:p-10 rounded-3xl border border-theme-border/60 shadow-xl relative overflow-hidden"
                    >
                        {/* Decorative bloom */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-light/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
                        
                        <h3 className="text-2xl font-heading font-medium mb-2 text-theme-text-main relative z-10">Send us a Message</h3>
                        <p className="text-theme-text-body mb-8 relative z-10 text-sm font-light">Fill out the form below and we'll get back to you shortly.</p>
                        
                        <form className="space-y-5 relative z-10">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-theme-text-light uppercase tracking-wider pl-1">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 text-theme-text-main placeholder:text-theme-text-light text-sm shadow-inner" placeholder="John" />
                                </div>
                                <div className="space-y-1.5">
                                     <label className="text-[10px] font-bold text-theme-text-light uppercase tracking-wider pl-1">Last Name</label>
                                     <input type="text" className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 text-theme-text-main placeholder:text-theme-text-light text-sm shadow-inner" placeholder="Doe" />
                                </div>
                            </div>
                            
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-light uppercase tracking-wider pl-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 text-theme-text-main placeholder:text-theme-text-light text-sm shadow-inner" placeholder="john@example.com" />
                            </div>
        
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-light uppercase tracking-wider pl-1">Service Needed</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 appearance-none text-theme-text-main cursor-pointer text-sm shadow-inner">
                                        <option>Tax Preparation</option>
                                        <option>Bookkeeping & Payroll</option>
                                        <option>Business Consulting</option>
                                        <option>Notary Services</option>
                                        <option>Insurance & Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-theme-text-light">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
        
                             <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-light uppercase tracking-wider pl-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-theme-bg border border-theme-border focus:border-gold-DEFAULT focus:ring-1 focus:ring-gold-DEFAULT outline-none transition-all duration-300 resize-none text-theme-text-main placeholder:text-theme-text-light text-sm shadow-inner" placeholder="Tell us about your needs..."></textarea>
                            </div>
        
                            <motion.button 
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="button" 
                                className="w-full bg-theme-text-main hover:bg-gold-DEFAULT hover:text-white text-white font-bold py-4 rounded-xl transition-all text-sm tracking-wide flex items-center justify-center gap-2 group mt-4 shadow-xl hover:shadow-2xl"
                            >
                                <span>Send Message</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
