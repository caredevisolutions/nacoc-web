import React from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black-rich">
             {/* Dynamic Background */}
             <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/95 to-black-rich/80 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90" 
                    alt="Financial District" 
                    className="w-full h-full object-cover opacity-20 transform scale-105"
                />
            </div>

            {/* Floating Gold Effects */}
            <motion.div 
                animate={{ 
                    y: [0, -30, 0], 
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1] 
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-DEFAULT/5 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

             <motion.div 
                animate={{ 
                    x: [0, 30, 0], 
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-dark/10 rounded-full blur-[100px] pointer-events-none"
            ></motion.div>

            <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                            opacity: 1, 
                            x: 0,
                            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                        }
                    }}
                    className="flex flex-col gap-8 text-left"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
                         <div className="h-[2px] w-12 bg-gold-DEFAULT"></div>
                         <span className="text-gold-DEFAULT font-bold tracking-[0.2em] uppercase text-xs">Excellence in Finance</span>
                    </motion.div>

                    <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1]">
                        Wealth Built on <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-DEFAULT to-gold-light">Integrity.</span>
                    </motion.h1>
                    
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-slate-300 max-w-lg leading-relaxed font-light border-l-2 border-slate-700 pl-6">
                        Expert tax strategies and financial planning for businesses and families in Texas. We turn complex numbers into clear growth paths.
                    </motion.p>
                    
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 pt-4">
                        <a href="#contact" className="group relative bg-gold-DEFAULT text-black-rich px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-[0_0_20px_-5px_rgba(198,164,92,0.4)] hover:shadow-[0_0_30px_-5px_rgba(198,164,92,0.6)] hover:-translate-y-1 flex items-center gap-3 overflow-hidden">
                            <span className="relative z-10">Start Your Journey</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>
                         <a href="#services" className="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider text-white border border-slate-700 hover:border-gold-DEFAULT hover:text-gold-DEFAULT transition-all">
                            Our Services
                        </a>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center gap-8 pt-8">
                         <div className="flex -space-x-4">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-black-rich bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500">
                                   <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Client" className="w-full h-full rounded-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"/>
                                </div>
                            ))}
                             <div className="w-12 h-12 rounded-full border-2 border-black-rich bg-gold-DEFAULT flex items-center justify-center text-xs font-bold text-black-rich">500+</div>
                         </div>
                         <div className="text-left">
                            <div className="flex text-gold-DEFAULT gap-1 mb-1">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="text-slate-400 text-sm font-medium">Trusted by Locals</span>
                         </div>
                    </motion.div>
                </motion.div>

                {/* Visual Element */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative z-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] shadow-2xl">
                         <div className="absolute top-0 right-0 p-6 opacity-20">
                            <TrendingUp size={120} className="text-gold-DEFAULT" />
                         </div>
                         
                         <div className="relative z-10">
                            <h3 className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Annual Savings</h3>
                            <div className="text-5xl font-heading font-bold text-white mb-8">,548<span className="text-gold-DEFAULT text-xl">+</span></div>
                            
                            <div className="space-y-4">
                                <div className="space-y-2">
                                     <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                                        <span>Tax Efficiency</span>
                                        <span className="text-gold-DEFAULT">94%</span>
                                     </div>
                                     <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: "94%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-gradient-to-r from-gold-dark to-gold-DEFAULT"
                                        ></motion.div>
                                     </div>
                                </div>
                                <div className="space-y-2">
                                     <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                                        <span>Risk Mitigation</span>
                                        <span className="text-gold-DEFAULT">100%</span>
                                     </div>
                                     <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1.5, delay: 1.2 }}
                                            className="h-full bg-gradient-to-r from-gold-dark to-gold-DEFAULT"
                                        ></motion.div>
                                     </div>
                                </div>
                            </div>

                             <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Client Satisfaction</span>
                                    <span className="text-white font-bold text-lg">#1 Ranked</span>
                                </div>
                                <div className="w-12 h-12 bg-gold-DEFAULT rounded-full flex items-center justify-center text-black-rich shadow-lg shadow-gold-DEFAULT/20">
                                    <CheckCircle size={24} />
                                </div>
                             </div>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
