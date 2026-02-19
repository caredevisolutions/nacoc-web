import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black-rich overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1 relative"
            >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-DEFAULT/20 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="BMB Team Meeting" 
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    />
                     <div className="absolute inset-0 bg-black-rich/20 hover:bg-transparent transition-colors duration-300"></div>
                </div>

                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="absolute -bottom-6 -right-6 z-20 bg-slate-900 p-6 rounded-2xl shadow-xl max-w-xs border border-slate-800"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="text-gold-DEFAULT"><Award size={32} /></div>
                        <div className="font-bold text-white leading-tight">Certified Excellence</div>
                    </div>
                    <p className="text-xs text-slate-400">Recognized for outstanding client service and 5.0-star rated reliability.</p>
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-gold-DEFAULT"></div>
                    <span className="text-gold-DEFAULT font-bold uppercase tracking-wider text-sm">About Us</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
                    Your Strategic Financial <br className="hidden md:block"/>
                    <span className="relative inline-block pb-2">
                        <span className="text-gold-DEFAULT">Partners.</span>
                    </span>
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Based in Euless, Texas, <strong>BMB Tax and Financial Service</strong> is dedicated to providing professional, accurate, and timely financial services. Founded on the principles of integrity and transparency, we help individuals and businesses navigate the complexities of the financial world with confidence.
                </p>

                <div className="space-y-6 mb-8">
                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gold-DEFAULT shrink-0 group-hover:bg-gold-DEFAULT group-hover:text-black-rich transition-colors duration-300">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Reliable & Secure</h4>
                            <p className="text-slate-400">Your data security is our top priority. We use bank-grade encryption to protect your sensitive information.</p>
                        </div>
                    </div>

                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gold-DEFAULT shrink-0 group-hover:bg-gold-DEFAULT group-hover:text-black-rich transition-colors duration-300">
                            <Users size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Client-Centric Approach</h4>
                            <p className="text-slate-400">No cookie-cutter solutions. Every strategy is tailored to your unique financial goals and circumstances.</p>
                        </div>
                    </div>
                </div>

                <Link to="/about" className="inline-flex items-center gap-2 text-gold-DEFAULT font-bold hover:text-white transition-colors group">
                    Get to know our team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
