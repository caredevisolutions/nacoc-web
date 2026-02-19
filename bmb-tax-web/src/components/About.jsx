import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#1C1C1E] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Decorative background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-DEFAULT/5 blur-[100px] rounded-full -z-10"></div>
                        
                        <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                             <img 
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                                alt="BMB Team Meeting" 
                                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                             {/* Overlay gradient */}
                             <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/80 to-transparent"></div>
                             
                             {/* Floating Badge */}
                             <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-[#2C2C2E]/90 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg flex items-start gap-4"
                            >
                                <div className="p-3 bg-gold-DEFAULT/10 rounded-lg text-gold-DEFAULT">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Award Winning Service</h4>
                                    <p className="text-[#A1A1AA] text-xs leading-relaxed">Recognized for excellence in tax strategy and client satisfaction.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-gold-DEFAULT"></div>
                            <span className="text-gold-light uppercase tracking-widest text-xs font-medium">Who We Are</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 text-white leading-tight">
                            Strategic Partners in <br/>
                            <span className="text-gold-DEFAULT">Your Success.</span>
                        </h2>
                        
                        <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8 font-light">
                            Based in Euless, Texas, <strong>BMB Tax and Financial Service</strong> isn't just about filing returns. We are architects of financial stability, helping you navigate complex regulations with clarity and confidence.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                { 
                                    icon: ShieldCheck, 
                                    title: "Uncompromising Integrity", 
                                    desc: "We operate with full transparency. Your trust is our most valuable asset." 
                                },
                                { 
                                    icon: Users, 
                                    title: "Personalized Strategies", 
                                    desc: "No two financial situations are alike. We tailor every solution to your specific goals." 
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-12 h-12 bg-[#2C2C2E] rounded-full flex items-center justify-center text-gold-DEFAULT shrink-0 border border-white/5 group-hover:border-gold-DEFAULT/30 group-hover:text-gold-light transition-all duration-300">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-lg text-white mb-1 group-hover:text-gold-DEFAULT transition-colors">{item.title}</h4>
                                        <p className="text-[#71717A] text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/about" className="group inline-flex items-center gap-2 text-gold-DEFAULT font-medium text-sm tracking-wide hover:text-gold-light transition-colors">
                            <span className="border-b border-gold-DEFAULT/30 pb-0.5 group-hover:border-gold-light">Meet Our Team</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
