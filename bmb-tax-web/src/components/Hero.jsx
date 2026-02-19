import React from 'react';
import { ArrowRight, Star, TrendingUp, Award, Sparkles, Shield, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const stats = [
        { value: '$4M+', label: 'Tax Saved', color: 'text-accent-emerald', bg: 'bg-accent-emerald/10', border: 'border-accent-emerald/20' },
        { value: '500+', label: 'Happy Clients', color: 'text-accent-indigo', bg: 'bg-accent-indigo/10', border: 'border-accent-indigo/20' },
        { value: '15+', label: 'Years Experience', color: 'text-gold-DEFAULT', bg: 'bg-gold-DEFAULT/10', border: 'border-gold-DEFAULT/20' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-theme-bg">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            {/* Glow orbs */}
            <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-gold-DEFAULT/10 blur-[160px] rounded-full pointer-events-none z-[1]"></div>
            <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-accent-indigo/10 blur-[140px] rounded-full pointer-events-none z-[1]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-emerald/5 blur-[180px] rounded-full pointer-events-none z-[1]"></div>

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
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/25 text-gold-DEFAULT font-bold tracking-widest uppercase text-[10px] shadow-sm">
                            <Sparkles size={11} />
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
                            <svg className="absolute -bottom-1 left-0 w-full h-3 text-gold-DEFAULT/50" viewBox="0 0 200 10" preserveAspectRatio="none">
                                <path d="M0 8 Q 50 2 100 8 Q 150 14 200 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-lg text-theme-text-body max-w-lg leading-relaxed font-light"
                    >
                        Expert tax strategies and financial planning for businesses and families in Texas. We turn complex numbers into{' '}
                        <span className="font-semibold text-gold-DEFAULT">clear growth paths.</span>
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/contact" className="group bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all shadow-gold hover:shadow-gold-lg hover:-translate-y-1 flex items-center gap-2">
                            <span>Start Your Journey</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="group px-8 py-4 rounded-full font-semibold text-sm tracking-wide text-theme-text-main border border-theme-border hover:border-gold-DEFAULT/70 hover:text-gold-DEFAULT transition-all bg-theme-surface/80 backdrop-blur-sm flex items-center gap-2">
                            Our Services
                            <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="flex items-center gap-6 pt-6 border-t border-theme-border/60 mt-2"
                    >
                        <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/men/${i*10 + 5}.jpg`} alt="Client" className="w-10 h-10 rounded-full border-2 border-theme-surface object-cover"/>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-theme-surface bg-gold-DEFAULT/20 flex items-center justify-center text-[10px] font-bold text-gold-DEFAULT">+500</div>
                        </div>
                        <div>
                            <div className="flex text-gold-DEFAULT gap-0.5 mb-1 items-center">
                                {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
                                <span className="text-gold-DEFAULT text-xs font-bold ml-1.5">5.0</span>
                            </div>
                            <span className="text-theme-text-light text-xs font-medium uppercase tracking-wider">Trusted by 500+ Clients</span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="grid grid-cols-3 gap-3 pt-2"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className={`${s.bg} ${s.border} border rounded-2xl p-4 text-center`}>
                                <div className={`text-2xl font-heading font-bold ${s.color}`}>{s.value}</div>
                                <div className="text-[10px] text-theme-text-body uppercase tracking-wider font-semibold mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Visual Card ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    className="hidden lg:block relative"
                >
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-gold-DEFAULT/30 to-gold-dark/20 rounded-2xl rotate-12 blur-lg"
                    />
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent-indigo/20 to-accent-indigo/10 rounded-2xl -rotate-12 blur-md"
                    />

                    <div className="relative z-10 bg-theme-surface border border-theme-border/80 p-10 rounded-[2.5rem] shadow-card">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-theme-text-body text-xs uppercase tracking-[0.15em] font-bold mb-1">Total Tax Savings</h3>
                                <div className="text-5xl font-heading font-semibold text-theme-text-main flex items-baseline gap-1">
                                    $4<span className="text-3xl">.2M</span><span className="text-gold-DEFAULT text-2xl">+</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-xs font-bold text-accent-emerald bg-accent-emerald/10 px-2 py-0.5 rounded-full border border-accent-emerald/20">↑ +18% this year</span>
                                </div>
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-gold-DEFAULT/15 border border-gold-DEFAULT/25 flex items-center justify-center text-gold-DEFAULT shadow-gold">
                                <Award size={26} strokeWidth={1.5} />
                            </div>
                        </div>

                        <div className="h-48 flex items-end justify-between gap-3 px-1 mb-6">
                            {[
                                { h: 40, gradient: 'from-accent-indigo/70 to-accent-indigo', label: 'Jan' },
                                { h: 65, gradient: 'from-gold-light/80 to-gold-DEFAULT', label: 'Feb' },
                                { h: 50, gradient: 'from-accent-emerald/70 to-accent-emerald', label: 'Mar' },
                                { h: 80, gradient: 'from-gold-DEFAULT to-gold-dark', label: 'Apr' },
                                { h: 70, gradient: 'from-accent-violet/70 to-accent-violet', label: 'May' },
                                { h: 95, gradient: 'from-gold-light/90 to-gold-DEFAULT', label: 'Jun' },
                            ].map(({ h, gradient, label }, i) => (
                                <div key={i} className="w-full flex flex-col items-center gap-1 group cursor-pointer">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 0.8, delay: 0.7 + (i * 0.1), ease: 'backOut' }}
                                        style={{ height: `${h}%` }}
                                        className={`w-full bg-gradient-to-t ${gradient} rounded-xl shadow-sm group-hover:brightness-125 transition-all`}
                                    />
                                    <span className="text-[9px] text-theme-text-body font-semibold uppercase">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-5">
                            {[
                                { Icon: Shield, label: 'IRS Protected', color: 'text-accent-emerald', bg: 'bg-accent-emerald/10 border border-accent-emerald/20' },
                                { Icon: TrendingUp, label: '+18% Growth', color: 'text-accent-indigo', bg: 'bg-accent-indigo/10 border border-accent-indigo/20' },
                                { Icon: Users, label: '500+ Clients', color: 'text-gold-DEFAULT', bg: 'bg-gold-DEFAULT/10 border border-gold-DEFAULT/20' },
                            ].map(({ Icon, label, color, bg }) => (
                                <div key={label} className={`${bg} rounded-xl px-2 py-2.5 flex flex-col items-center gap-1`}>
                                    <Icon size={15} className={color} strokeWidth={2} />
                                    <span className={`text-[9px] font-bold uppercase tracking-wide ${color}`}>{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gold-DEFAULT/10 border border-gold-DEFAULT/20 rounded-xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gold-DEFAULT/20 text-gold-DEFAULT">
                                    <TrendingUp size={15} strokeWidth={2} />
                                </div>
                                <span className="text-sm font-semibold text-theme-text-body">Portfolio Growth</span>
                            </div>
                            <span className="text-xs font-bold text-gold-DEFAULT bg-gold-DEFAULT/15 px-3 py-1 rounded-full border border-gold-DEFAULT/25">+12.5% YTD</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

