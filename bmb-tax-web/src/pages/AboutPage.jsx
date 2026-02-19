import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, CheckCircle, MapPin, TrendingUp, Heart } from 'lucide-react';

const AboutPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

  return (
    <>
      <Helmet>
        <title>About Us | BMB Tax & Financial Service</title>
        <meta name="description" content="Learn about BMB Tax, the leading accounting firm in Euless and Waco, TX. Professional, trustworthy, and rated 5 stars by locals." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-theme-bg relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute inset-0 bg-gold-DEFAULT/5 opacity-50"></div>
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gold-light/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-3xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-theme-border text-gold-dark font-bold text-xs uppercase tracking-widest mb-8 shadow-sm">
                    <Award size={14} /> Since 2010
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-medium text-theme-text-main mb-6 leading-tight">
                    Beyond Numbers. <br/>
                    <span className="text-gold-DEFAULT italic">We Build Futures.</span>
                </h1>
                <p className="text-xl text-theme-text-body leading-relaxed max-w-2xl mx-auto font-light">
                    BMB Tax & Financial Service isn't just about filing returns. It's about empowering families and businesses in Texas to achieve true financial freedom.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white border-t border-theme-border/60">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                 >
                    <div className="flex items-center gap-3 mb-4">
                         <div className="h-px w-10 bg-gold-DEFAULT"></div>
                         <h2 className="text-sm uppercase tracking-widest font-bold text-gold-DEFAULT">The Founder</h2>
                    </div>
                    <h3 className="text-4xl font-heading font-medium mb-8 text-theme-text-main">Basuram ("Basu") Bhandari</h3>
                    
                    <div className="space-y-6 text-theme-text-body text-lg leading-relaxed font-light">
                        <p>
                            With over a decade of experience in the financial sector, Basu established BMB Tax with a singular vision: to bring <strong className="text-theme-text-main font-bold">Wall Street expertise to Main Street.</strong>
                        </p>
                        <p>
                            Known for his meticulous attention to detail and personal approach, Basu treats every client's finances with the same care as his own. He believes that understanding the "why" behind the numbers is just as important as the numbers themselves.
                        </p>
                    </div>

                     <div className="mt-8 flex items-center gap-4">
                        <span className="font-heading italic text-gold-dark text-xl">"Trust is our greatest asset."</span>
                    </div>
                 </motion.div>
                 
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative"
                 >
                     <div className="aspect-[4/5] bg-theme-bg rounded-3xl border border-theme-border flex items-center justify-center p-8 relative overflow-hidden shadow-soft">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-gold-DEFAULT border border-theme-border">
                                <ShieldCheck size={36} />
                            </div>
                            <h4 className="text-2xl font-bold text-theme-text-main mb-1">Integrity First</h4>
                            <p className="text-theme-text-light text-sm tracking-widest uppercase">The Core of BMB Tax</p>
                        </div>
                    </div>
                 </motion.div>
            </div>
        </div>
      </section>

      {/* Locations Highlight */}
      <section className="py-24 bg-theme-bg relative">
           <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-medium text-theme-text-main mb-4">Serving Texas</h2>
                    <p className="text-theme-text-body max-w-2xl mx-auto font-light">Proudly operating from two strategic locations to serve you better.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Euless */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/30 transition-all shadow-soft hover:shadow-xl group"
                    >
                        <div className="w-12 h-12 bg-theme-bg rounded-xl flex items-center justify-center text-gold-DEFAULT mb-6 border border-theme-border group-hover:bg-gold-DEFAULT group-hover:text-white transition-colors duration-300">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-theme-text-main mb-2">Euless Branch</h3>
                        <p className="text-theme-text-light mb-4 text-sm font-bold uppercase tracking-wide">The Heart of DFW</p>
                        <p className="text-theme-text-body font-medium leading-relaxed">1201 W Airport Fwy, Ste 259<br/>Euless, TX 76040</p>
                        <div className="mt-8 pt-6 border-t border-theme-border/60 flex justify-between items-center text-sm">
                            <span className="font-bold text-theme-text-light uppercase tracking-wider">Main Office</span>
                            <span className="text-theme-text-main font-bold text-lg">(817) 554-2777</span>
                        </div>
                    </motion.div>

                    {/* Waco */}
                     <motion.div 
                        whileHover={{ y: -5 }}
                         className="bg-white p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/30 transition-all shadow-soft hover:shadow-xl group"
                    >
                        <div className="w-12 h-12 bg-theme-bg rounded-xl flex items-center justify-center text-gold-DEFAULT mb-6 border border-theme-border group-hover:bg-gold-DEFAULT group-hover:text-white transition-colors duration-300">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-theme-text-main mb-2">Waco Branch</h3>
                        <p className="text-theme-text-light mb-4 text-sm font-bold uppercase tracking-wide">Serving Central Texas</p>
                        <p className="text-theme-text-body font-medium leading-relaxed">6625 Cascade Dr<br/>Woodway, TX 76712</p>
                        <div className="mt-8 pt-6 border-t border-theme-border/60 flex justify-between items-center text-sm">
                            <span className="font-bold text-theme-text-light uppercase tracking-wider">Woodway Location</span>
                            <span className="text-theme-text-main font-bold text-lg">(254) 350-0233</span>
                        </div>
                    </motion.div>
                </div>
           </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white border-t border-theme-border/60">
        <div className="container mx-auto px-6">
             <div className="grid md:grid-cols-3 gap-12">
                {[
                    { icon: ShieldCheck, title: "Uncompromising Integrity", desc: "We operate with total transparency. Your trust is sacred, and we protect it with strict ethical standards." },
                    { icon: TrendingUp, title: "Proactive Growth", desc: "We don't just record history; we help write your future. Our advice is forward-looking and growth-oriented." },
                    { icon: Heart, title: "Community Focused", desc: "We are locals helping locals. We invest in long-term relationships, not just transactions." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="text-center group p-6 hover:bg-theme-bg rounded-2xl transition-colors border border-transparent hover:border-theme-border"
                    >
                        <div className="w-16 h-16 mx-auto bg-theme-bg rounded-full flex items-center justify-center text-gold-DEFAULT mb-6 group-hover:scale-110 transition-transform duration-300 border border-theme-border group-hover:border-gold-DEFAULT/30 shadow-sm group-hover:bg-white">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-theme-text-main mb-3">{item.title}</h3>
                        <p className="text-theme-text-body leading-relaxed px-4 text-sm font-light">{item.desc}</p>
                    </motion.div>
                ))}
             </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
