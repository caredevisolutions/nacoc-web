import React from 'react';
import { ArrowRight, Star, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-black-rich to-[#161618]">
            {/* Subtle Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-black-rich via-black-rich/95 to-black-rich/80 z-[1]"></div>
             
             {/* Background Image - Desaturated for professionalism */}
             <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90" 
                alt="Financial District" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 contrast-[0.9] grayscale-[0.3]"
            />

            {/* Elegant light beams */}
            <div className="absolute top-0 right-[-10%] w-[50%] h-[70%] bg-gold-DEFAULT/5 blur-[150px] rounded-full pointer-events-none z-[2]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-gold-dark/5 blur-[120px] rounded-full pointer-events-none z-[2]"></div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: {
                            opacity: 1, 
                            x: 0,
                            transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.8 }
                        }
                    }}
                    className="flex flex-col gap-6 text-left"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
                         <div className="h-[1px] w-12 bg-gold-DEFAULT text-gold-DEFAULT"></div>
                         <span className="text-gold-light font-medium tracking-[0.2em] uppercase text-xs">Excellence in Finance</span>
                    </motion.div>

                    <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl font-heading font-medium text-white leading-[1.1] tracking-tight">
                        Wealth Built on <br/>
                        <span className="text-gold-DEFAULT italic relative inline-block pr-4">
                             Integrity.
                             <span className="absolute bottom-2 left-0 w-full h-[6px] bg-gold-dark/20 -z-10 skew-x-12"></span>
                        </span>
                    </motion.h1>
                    
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-[#A1A1AA] max-w-lg leading-relaxed font-light">
                        Expert tax strategies and financial planning for businesses and families in Texas. We turn complex numbers into <span className="text-gold-light">clear growth paths</span>.
                    </motion.p>
                    
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 pt-6">
                        <a href="#contact" className="group relative bg-gold-DEFAULT text-black-rich px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all shadow-lg shadow-gold-DEFAULT/10 hover:shadow-gold-DEFAULT/20 hover:bg-gold-light flex items-center gap-2 overflow-hidden">
                            <span>Start Your Journey</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                         <a href="#services" className="px-8 py-4 rounded-full font-medium text-sm tracking-wide text-[#E4E4E7] border border-white/10 hover:border-gold-DEFAULT/50 hover:text-gold-light transition-all bg-black-card/30 backdrop-blur-sm">
                            Our Services
                        </a>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center gap-8 pt-8 border-t border-white/5 mt-4">
                         <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border border-black-rich bg-black-card flex items-center justify-center relative hover:scale-110 transition-transform hover:z-10">
                                   <img src={`https://randomuser.me/api/portraits/men/${i*10 + 5}.jpg`} alt="Client" className="w-full h-full rounded-full object-cover opacity-80 hover:opacity-100 grayscale-[0.5] hover:grayscale-0 transition-all"/>
                                </div>
                            ))}
                             <div className="w-10 h-10 rounded-full border border-black-rich bg-black-light flex items-center justify-center text-[10px] font-bold text-white hover:bg-gold-dark hover:text-black-rich transition-colors">500+</div>
                         </div>
                         <div className="text-left">
                            <div className="flex text-gold-DEFAULT gap-0.5 mb-1.5">
                                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
                            </div>
                            <span className="text-[#A1A1AA] text-xs font-medium uppercase tracking-wider">Top Rated Firm</span>
                         </div>
                    </motion.div>
                </motion.div>

                {/* Elegant Glassmorphism Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    {/* Decorative ring */}
                    <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-gold-dark/20 to-transparent blur-sm opacity-50"></div>

                    <div className="relative z-10 bg-[#1C1C1E]/80 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] shadow-2xl">
                         {/* Card Header */}
                         <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-[#A1A1AA] text-xs uppercase tracking-[0.15em] font-medium mb-1">Total Savings</h3>
                                <div className="text-4xl font-heading font-medium text-white flex items-baseline gap-2">
                                    .4M<span className="text-gold-DEFAULT text-xl">+</span>
                                </div>
                                <p className="text-xs text-gold-muted mt-2 font-medium">For our clients this year</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gold-DEFAULT/10 flex items-center justify-center text-gold-DEFAULT border border-gold-DEFAULT/20">
                                <Award size={24} strokeWidth={1.5} />
                            </div>
                         </div>
                         
                         {/* Chart Visualization */}
                         <div className="h-48 flex items-end justify-between gap-3 px-2">
                             {[40, 65, 55, 80, 70, 95].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: 0.6 + (i * 0.1), ease: "backOut" }}
                                    className="w-full bg-gradient-to-t from-gold-muted/20 to-gold-DEFAULT/80 rounded-t-sm relative group cursor-pointer hover:to-gold-light transition-all"
                                >
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white text-black-rich text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                            +{h}% Growth
                                        </div>
                                        <div className="w-2 h-2 bg-white rotate-45 absolute bottom-[-4px] left-1/2 -translate-x-1/2"></div>
                                    </div>
                                </motion.div>
                            ))}
                         </div>
                         
                         {/* Card Footer */}
                         <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#2C2C2E] flex items-center justify-center text-gold-DEFAULT">
                                    <TrendingUp size={14} />
                                </div>
                                <span className="text-sm text-[#E4E4E7]">Consistent Growth</span>
                            </div>
                            <span className="text-xs text-[#71717A]">Updated today</span>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
