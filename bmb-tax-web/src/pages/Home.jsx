import React from 'react';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Briefcase, TrendingUp, Star, ArrowRight, ShieldCheck, Users, Heart, Quote, Sparkles, ChevronRight } from 'lucide-react';

// ── Services Preview ─────────────────────────────────────────────────────────
const servicesPreview = [
    { icon: Calculator, title: 'Tax Planning & Prep', desc: 'Maximize deductions, minimize liability. We plan ahead so tax season is never a surprise.', color: 'text-gold-dark', bg: 'bg-amber-50', border: 'border-amber-100' },
    { icon: FileText, title: 'Bookkeeping & Payroll', desc: 'Precision in every transaction, every pay cycle — so you can focus on what you love.', color: 'text-accent-indigo', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    { icon: Briefcase, title: 'Business Consulting', desc: 'Entity setup, restructuring, and operational guidance from seasoned professionals.', color: 'text-accent-emerald', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    { icon: TrendingUp, title: 'Wealth Management', desc: 'Holistic strategies to build, protect, and grow your long-term financial health.', color: 'text-accent-violet', bg: 'bg-violet-50', border: 'border-violet-100' },
];

// ── Testimonials Preview ─────────────────────────────────────────────────────
const testimonialsPreview = [
    { name: 'Shady Altllawy', role: 'Client for 5 Years', text: 'The best service. I have been using their services for almost 5 years – always satisfied.', stars: 5 },
    { name: 'Prajwal Bhandari', role: 'Local Resident', text: 'Excellent, knowledgeable, and very responsive staff. They made the entire tax filing process smooth and stress-free.', stars: 5 },
    { name: 'Shrijesh', role: 'Client for 10 Years', text: 'They\'ve been doing my taxes for 10 years — amazing every time, never had an issue.', stars: 5 },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BMB Tax & Financial Service | Euless, TX</title>
        <meta name="description" content="Top-rated tax preparation, bookkeeping, and financial planning in Euless, Texas. 5.0 Star Google Rated. Call (254) 350-0233." />
      </Helmet>
      
      <main className="overflow-hidden">
        <Hero />

        {/* ── Services Preview Section ─────────────────────────── */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ede8df] to-[#e8e2d4]"></div>
            <div className="absolute right-0 top-0 w-[40%] h-[60%] bg-gold-light/15 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="flex items-center gap-2 mb-3"
                        >
                            <div className="h-px w-8 bg-gold-DEFAULT"></div>
                            <span className="text-gold-dark uppercase tracking-widest text-xs font-bold">What We Do</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-heading font-medium text-theme-text-main leading-tight"
                        >
                            Comprehensive <span className="text-gold-DEFAULT italic">Financial Solutions.</span>
                        </motion.h2>
                    </div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <Link to="/services" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 border border-theme-border text-theme-text-main font-semibold text-sm hover:bg-white hover:border-gold-DEFAULT/40 transition-all shadow-soft">
                            View All Services <ChevronRight size={15} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesPreview.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-white/80 hover:border-gold-DEFAULT/25 transition-all duration-400 hover:shadow-gold shadow-soft relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className={`w-13 h-13 ${s.bg} ${s.border} border rounded-xl flex items-center justify-center ${s.color} mb-5 w-12 h-12 group-hover:scale-110 transition-transform duration-300`}>
                                <s.icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-heading font-semibold mb-2 text-theme-text-main group-hover:text-gold-dark transition-colors">{s.title}</h3>
                            <p className="text-theme-text-body text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── About Preview Section ───────────────────────────── */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e5dfd6] via-[#ede8e0] to-[#e8e2d9]"></div>
            <div className="absolute left-0 bottom-0 w-[40%] h-[50%] bg-indigo-100/25 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-gold-DEFAULT"></div>
                            <span className="text-gold-dark uppercase tracking-widest text-xs font-bold">Who We Are</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-theme-text-main leading-tight">
                            Strategic Partners in <br/>
                            <span className="text-gold-DEFAULT italic">Your Success.</span>
                        </h2>
                        <p className="text-theme-text-body text-lg leading-relaxed mb-8 font-light">
                            Based in Euless, Texas, <strong className="text-theme-text-main">BMB Tax and Financial Service</strong> isn't just about filing returns. We are architects of financial stability, helping you navigate complex regulations with clarity and confidence.
                        </p>
                        <div className="space-y-5 mb-10">
                            {[
                                { icon: ShieldCheck, label: 'Uncompromising Integrity', desc: 'Full transparency — your trust is our most valuable asset.', color: 'text-accent-emerald', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                                { icon: Users, label: 'Personalized Strategies', desc: 'No two situations are alike. Every solution is tailored to your goals.', color: 'text-accent-indigo', bg: 'bg-indigo-50', border: 'border-indigo-100' },
                                { icon: Heart, label: 'Community Focused', desc: 'Locals helping locals — investing in long-term relationships.', color: 'text-accent-rose', bg: 'bg-rose-50', border: 'border-rose-100' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className={`w-11 h-11 ${item.bg} ${item.border} border rounded-xl flex items-center justify-center ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-theme-text-main mb-0.5 group-hover:text-gold-dark transition-colors">{item.label}</h4>
                                        <p className="text-theme-text-body text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="group inline-flex items-center gap-2 text-theme-text-main font-bold text-sm tracking-wide hover:text-gold-dark transition-colors">
                            <span className="border-b-2 border-gold-light/60 pb-0.5 group-hover:border-gold-DEFAULT">Meet Our Team</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Stat cards grid */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 gap-5"
                    >
                        {[
                            { value: '$4M+', label: 'Tax Savings Delivered', color: 'text-gold-DEFAULT', bg: 'from-gold-light/30 to-amber-50', border: 'border-gold-light/50' },
                            { value: '500+', label: 'Happy Clients Served', color: 'text-accent-indigo', bg: 'from-indigo-50 to-blue-50', border: 'border-indigo-100' },
                            { value: '15+', label: 'Years of Excellence', color: 'text-accent-emerald', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-100' },
                            { value: '5.0★', label: 'Google Rating', color: 'text-accent-amber', bg: 'from-amber-50 to-yellow-50', border: 'border-amber-100' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.04 }}
                                className={`bg-gradient-to-br ${stat.bg} ${stat.border} border rounded-2xl p-7 shadow-soft`}
                            >
                                <div className={`text-4xl font-heading font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                                <div className="text-theme-text-body text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── Testimonials Preview Section ────────────────────── */}
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ede8df] to-[#e8e2d4]"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-light/15 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="flex items-center gap-2 mb-3"
                        >
                            <div className="h-px w-8 bg-gold-DEFAULT"></div>
                            <span className="text-gold-dark uppercase tracking-widest text-xs font-bold">What Clients Say</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-heading font-medium text-theme-text-main"
                        >
                            Loved by Locals in <span className="text-gold-DEFAULT italic">Texas.</span>
                        </motion.h2>
                    </div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <Link to="/testimonials" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 border border-theme-border text-theme-text-main font-semibold text-sm hover:bg-white hover:border-gold-DEFAULT/40 transition-all shadow-soft">
                            All Reviews <ChevronRight size={15} className="text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-7">
                    {testimonialsPreview.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }}
                            whileHover={{ y: -8 }}
                            className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-white/80 hover:border-gold-DEFAULT/25 transition-all duration-400 hover:shadow-gold shadow-soft relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-gold-light/40 group-hover:text-gold-light/70 rotate-12 transition-colors duration-300" size={48} fill="currentColor" />
                            <div className="flex gap-1 text-gold-DEFAULT mb-5">
                                {[...Array(t.stars)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                            </div>
                            <p className="text-theme-text-body leading-relaxed italic text-sm mb-6 relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-gold-light to-amber-100 rounded-full flex items-center justify-center font-bold text-gold-dark border border-gold-light/50 text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-theme-text-main text-sm group-hover:text-gold-DEFAULT transition-colors">{t.name}</h4>
                                    <p className="text-xs text-theme-text-light uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── CTA Strip ─────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold-DEFAULT to-amber-400"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute top-0 right-0 w-[400px] h-full bg-white/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-bold tracking-widest uppercase text-[10px] mb-6">
                        <Sparkles size={11} /> Limited Slots This Season
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-4 leading-tight">
                        Ready to Transform Your <br/>
                        <span className="italic text-amber-100">Financial Future?</span>
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-light">
                        Join 500+ Texans who trust BMB Tax for expert guidance every year.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="bg-white text-gold-dark font-bold px-10 py-4 rounded-full hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group">
                            Book Free Consultation
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="bg-white/15 border border-white/40 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/25 transition-all flex items-center gap-2 group backdrop-blur-sm">
                            Explore Services
                            <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
      </main>
    </>
  );
};

export default Home;