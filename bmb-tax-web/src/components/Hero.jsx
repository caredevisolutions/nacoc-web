import React from 'react';
import { ArrowRight, Star, TrendingUp, Award, Sparkles, Shield, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const stats = [
        { value: '$4M+', label: 'Tax Saved', color: 'text-accent-emerald', bg: 'bg-emerald-50', border: 'border-emerald-100' },
        { value: '500+', label: 'Happy Clients', color: 'text-accent-indigo', bg: 'bg-indigo-50', border: 'border-indigo-100' },
        { value: '15+', label: 'Years Experience', color: 'text-gold-dark', bg: 'bg-amber-50', border: 'border-amber-100' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ede8df] via-[#e8e2d4] to-[#f0ebe3]"></div>
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#c8a96030_1px,transparent_1px),linear-gradient(to_bottom,#c8a96030_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            {/* Colorful orbs */}
            <div className="absolute top-10 right-[5%] w-[500px] h-[500px] bg-gold-light/30 blur-[130px] rounded-full pointer-events-none z-[1]"></div>
            <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-indigo-100/40 blur-[110px] rounded-full pointer-events-none z-[1]"></div>
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-emerald-50/50 blur-[100px] rounded-full pointer-events-none z-[1]"></div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* ── Text Content ── */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.8 } }
                    }}
                    className="flex flex-col gap-7 text-left"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-DEFAULT/15 border border-gold-DEFAULT/30 text-gold-dark font-bold tracking-widest uppercase text-[10px] shadow-sm">
                            <Sparkles size={11} className="text-gold-DEFAULT" />
                            Premium Financial Services · Euless, TX
                        </span>
                    </motion.div>

                    <motion.h1 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                        className="text-5xl md:text-7xl font-heading font-medium text-theme-text-main leading-[1.05] tracking-tight"
                    >
                        Wealth Built on <br/>
                        <span className="text-gold-DEFAULT italic relative inline-block">
                            Integrity.
                            <svg className="absolute -bottom-1 left-0 w-full h-3 text-gold-DEFAULT/40" viewBox="0 0 200 10" preserveAspectRatio="none">
                                <path d="M0 8 Q 50 2 100 8 Q 150 14 200 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                        className="text-lg text-theme-text-body max-w-lg leading-relaxed font-light"
                    >
                        Expert tax strategies and financial planning for businesses and families in Texas. We turn complex numbers into <span className="font-semibold text-gold-dark underline decoration-gold-DEFAULT/40 decoration-2 underline-offset-2">clear growth paths.</span>
                    </motion.p>
                    
                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/contact" className="group bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all shadow-gold hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                            <span>Start Your Journey</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="group px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-theme-text-main border border-theme-border hover:border-gold-DEFAULT/50 hover:bg-white/80 transition-all bg-white/50 backdrop-blur-sm shadow-soft flex items-center gap-2">
                            Our Services
                            <ChevronRight size={15} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div 
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} 
                        className="flex items-center gap-6 pt-6 border-t border-theme-border mt-2"
                    >
                        <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/men/${i*10 + 5}.jpg`} alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"/>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gold-light flex items-center justify-center text-[10px] font-bold text-gold-dark shadow-sm">+500</div>
                        </div>
                        <div>
                            <div className="flex text-gold-DEFAULT gap-0.5 mb-1 items-center">
                                {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
                                <span className="text-gold-dark text-xs font-bold ml-1.5">5.0</span>
                            </div>
                            <span className="text-theme-text-light text-xs font-medium uppercase tracking-wider">Trusted by 500+ Clients</span>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="grid grid-cols-3 gap-3 pt-2"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className={`${s.bg} ${s.border} border rounded-2xl p-4 text-center shadow-sm`}>
                                <div className={`text-2xl font-heading font-bold ${s.color}`}>{s.value}</div>
                                <div className="text-[10px] text-theme-text-light uppercase tracking-wider font-semibold mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Visual Card ── */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    <motion.div 
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold-light to-gold-DEFAULT rounded-2xl rotate-12 opacity-50 blur-lg"
                    ></motion.div>
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-indigo-200 to-indigo-400 rounded-2xl -rotate-12 opacity-40 blur-md"
                    ></motion.div>

                    <div className="relative z-10 bg-white/75 backdrop-blur-2xl border border-white/70 p-10 rounded-[2.5rem] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.12)]">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-theme-text-light text-xs uppercase tracking-[0.15em] font-bold mb-1">Total Tax Savings</h3>
                                <div className="text-5xl font-heading font-semibold text-theme-text-main flex items-baseline gap-1">
                                    $4<span className="text-3xl">.2M</span><span className="text-gold-DEFAULT text-2xl">+</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-xs font-bold text-accent-emerald bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">↑ +18% this year</span>
                                </div>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-light/60 to-gold-DEFAULT/20 flex items-center justify-center text-gold-dark border border-gold-light/50 shadow-gold">
                                <Award size={26} strokeWidth={1.5} />
                            </div>
                        </div>
                        
                        <div className="h-48 flex items-end justify-between gap-3 px-1 mb-6">
                            {[
                                { h: 40, gradient: 'from-indigo-300 to-indigo-500', label: 'Jan' },
                                { h: 65, gradient: 'from-gold-light to-gold-DEFAULT', label: 'Feb' },
                                { h: 50, gradient: 'from-emerald-300 to-emerald-500', label: 'Mar' },
                                { h: 80, gradient: 'from-gold-DEFAULT to-gold-dark', label: 'Apr' },
                                { h: 70, gradient: 'from-violet-300 to-violet-500', label: 'May' },
                                { h: 95, gradient: 'from-amber-300 to-gold-DEFAULT', label: 'Jun' },
                            ].map(({ h, gradient, label }, i) => (
                                <div key={i} className="w-full flex flex-col items-center gap-1 group cursor-pointer">
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 0.8, delay: 0.7 + (i * 0.1), ease: "backOut" }}
                                        style={{ height: `${h}%` }}
                                        className={`w-full bg-gradient-to-t ${gradient} rounded-xl relative overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}
                                    >
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </motion.div>
                                    <span className="text-[9px] text-theme-text-light font-semibold uppercase">{label}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mb-5">
                            {[
                                { Icon: Shield, label: 'IRS Protected', color: 'text-accent-emerald', bg: 'bg-emerald-50' },
                                { Icon: TrendingUp, label: '+18% Growth', color: 'text-accent-indigo', bg: 'bg-indigo-50' },
                                { Icon: Users, label: '500+ Clients', color: 'text-gold-dark', bg: 'bg-amber-50' },
                            ].map(({ Icon, label, color, bg }) => (
                                <div key={label} className={`${bg} rounded-xl px-2 py-2.5 flex flex-col items-center gap-1`}>
                                    <Icon size={15} className={color} strokeWidth={2} />
                                    <span className={`text-[9px] font-bold uppercase tracking-wide ${color}`}>{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-gold-light/30 to-amber-50/60 rounded-xl p-4 flex items-center justify-between border border-gold-light/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gold-DEFAULT/20 text-gold-dark">
                                    <TrendingUp size={15} strokeWidth={2} />
                                </div>
                                <span className="text-sm font-semibold text-theme-text-body">Portfolio Growth</span>
                            </div>
                            <span className="text-xs font-bold text-gold-dark bg-gold-light/60 px-3 py-1 rounded-full border border-gold-DEFAULT/20">+12.5% YTD</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
