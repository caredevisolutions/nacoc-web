import React from 'react';
import { ArrowRight, Star, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-theme-bg via-[#fdfdfd] to-white">
            {/* Simple Geometric Background Pattern */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             
             {/* Soft Gold Gradient Orb */}
             <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-gold-light/20 blur-[150px] rounded-full pointer-events-none z-[1]"></div>
             <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gold-light/10 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

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
                    className="flex flex-col gap-8 text-left"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
                         <span className="px-3 py-1 rounded-full bg-gold-light/30 border border-gold-DEFAULT/20 text-gold-dark font-bold tracking-widest uppercase text-[10px]">
                            Premium Financial Services
                         </span>
                    </motion.div>

                    <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl font-heading font-medium text-theme-text-main leading-[1.1] tracking-tight">
                        Wealth Built on <br/>
                        <span className="text-gold-DEFAULT italic relative inline-block pr-4">
                             Integrity.
                             {/* Creative Underline */}
                             <svg className="absolute bottom-1 left-0 w-full h-3 text-gold-light opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                             </svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg text-theme-text-body max-w-lg leading-relaxed font-light">
                        Expert tax strategies and financial planning for businesses and families in Texas. We turn complex numbers into <span className="font-medium text-theme-text-main decoration-gold-DEFAULT/50 underline decoration-2 underline-offset-2">clear growth paths</span>.
                    </motion.p>
                    
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 pt-4">
                        <a href="#contact" className="group relative bg-theme-text-main text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 overflow-hidden">
                            <span>Start Your Journey</span>
                            <ArrowRight size={16} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                        </a>
                         <a href="#services" className="px-8 py-4 rounded-full font-medium text-sm tracking-wide text-theme-text-main border border-theme-border hover:border-gold-DEFAULT hover:bg-white transition-all bg-white shadow-soft">
                            Our Services
                        </a>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex items-center gap-6 pt-8 border-t border-theme-border mt-4">
                         <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/men/${i*10 + 5}.jpg`} alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover hover:scale-110 transition-transform relative z-[1]"/>
                            ))}
                             <div className="w-10 h-10 rounded-full border-2 border-white bg-theme-bg flex items-center justify-center text-[10px] font-bold text-theme-text-main shadow-sm z-[2]">+500</div>
                         </div>
                         <div className="text-left">
                            <div className="flex text-gold-DEFAULT gap-0.5 mb-1">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                            </div>
                            <span className="text-theme-text-light text-xs font-medium uppercase tracking-wider">Trusted by Clients</span>
                         </div>
                    </motion.div>
                </motion.div>

                {/* Modern Clean Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    {/* Floating Elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-gold-light to-gold-DEFAULT rounded-2xl rotate-12 blur-xl opacity-40 animate-pulse"></div>

                    <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-white/50 p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                         {/* Header */}
                         <div className="flex justify-between items-start mb-10">
                            <div>
                                <h3 className="text-theme-text-light text-xs uppercase tracking-[0.15em] font-bold mb-2">Total Tax Savings</h3>
                                <div className="text-5xl font-heading font-medium text-theme-text-main flex items-baseline gap-2">
                                    .4M<span className="text-gold-DEFAULT text-2xl">+</span>
                                </div>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light/20 to-white flex items-center justify-center text-gold-dark border border-gold-light/30 shadow-sm">
                                <Award size={28} strokeWidth={1.5} />
                            </div>
                         </div>
                         
                         {/* Clean Chart */}
                         <div className="h-56 flex items-end justify-between gap-4 px-2 mb-6">
                             {[40, 65, 55, 80, 70, 95].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: 0.6 + (i * 0.1), ease: "backOut" }}
                                    className="w-full bg-[#F4F4F5] rounded-t-xl relative group cursor-pointer overflow-hidden"
                                >
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gold-DEFAULT opacity-20 group-hover:opacity-100 transition-all duration-500 rounded-t-xl"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gold-dark/10 to-transparent"></div>
                                    
                                     {/* Tooltip */}
                                     <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 z-20">
                                        <div className="bg-theme-text-main text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                                            +{h}% Growth
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                         </div>
                         
                         {/* Footer info */}
                         <div className="bg-theme-bg rounded-xl p-4 flex items-center justify-between border border-theme-border/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-green-50 text-green-600">
                                    <TrendingUp size={16} />
                                </div>
                                <span className="text-sm font-medium text-theme-text-body">Client Portfolio Growth</span>
                            </div>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12.5%</span>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
