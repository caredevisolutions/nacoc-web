import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Shady Altllawy",
    role: "Client for 5 Years",
    text: "The best service. I have been using their services for almost 5 years – always satisfied.",
    stars: 5,
  },
  {
    name: "Prajwal Bhandari",
    role: "Local Resident",
    text: "Excellent tax firm with knowledgeable, professional (yet take your case as if their own), and very responsive staff. They explained everything clearly and made the entire tax filing process smooth and stress-free.",
    stars: 5,
  },
  {
    name: "Shrijesh",
    role: "Client for 10 Years",
    text: "Great price. They been doing my taxes for last 10 years, amazing all the time, never had an issue.",
    stars: 5,
  },
  {
    name: "Nabraaz Poudel",
    role: "Client",
    text: "Efficient process with helpful Service! Smooth experience. Appreciate the help!",
    stars: 5,
  },
   {
    name: "Michael Rodriguez",
    role: "Freelance Designer",
    text: "I was dreading tax season until I found BMB. They explained everything clearly and found deductions I didn't even know existed.",
    stars: 5,
  },
  {
    name: "Anita Patel",
    role: "Small Business Owner",
    text: "Trustworthy and thorough. They manage my practice's payroll and taxes flawlessly.",
    stars: 5,
  }
];

const TestimonialsPage = () => {
    
  return (
    <>
      <Helmet>
        <title>Client Reviews | BMB Tax & Financial Service</title>
        <meta name="description" content="Read what our happy clients in Euless, TX have to say about our tax and financial services. 5.0 Star Rated on Google." />
      </Helmet>

      <section className="pt-32 pb-24 bg-theme-bg min-h-screen relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-light/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-DEFAULT/5 rounded-full blur-[80px] pointer-events-none"></div>
                             
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gold-dark font-bold tracking-widest uppercase text-xs border border-gold-DEFAULT/20 px-3 py-1 rounded-full bg-white shadow-sm"
                >
                    Success Stories
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-heading font-medium mt-6 mb-6 text-theme-text-main"
                >
                    Loved by Locals in <span className="text-gold-DEFAULT italic">Texas.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-theme-text-body font-light"
                >
                    See why hundreds of individuals and businesses in Euless and Waco trust us with their financial future.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-white p-8 rounded-2xl border border-theme-border transition-all duration-300 relative group cursor-pointer hover:shadow-xl shadow-soft"
                    >
                        <Quote className="absolute top-8 right-8 text-theme-bg group-hover:text-gold-light/20 rotate-12 transition-colors duration-300" size={64} fill="currentColor" />
                        
                        <div className="flex gap-1 text-gold-DEFAULT mb-6 relative z-10">
                            {[...Array(t.stars)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        
                        <p className="text-theme-text-body mb-6 leading-relaxed italic relative z-10 text-sm font-medium">
                            "{t.text}"
                        </p>
                        
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 bg-theme-bg rounded-full flex items-center justify-center font-bold text-gold-dark border border-theme-border shadow-sm">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-theme-text-main group-hover:text-gold-DEFAULT transition-colors">{t.name}</h4>
                                <p className="text-xs text-theme-text-light uppercase tracking-wide">{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.01 }}
                className="mt-20 text-center bg-white rounded-3xl p-12 relative overflow-hidden border border-theme-border shadow-xl"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/10 rounded-full -mr-20 -mt-20 blur-[80px]"></div>
                
                <h2 className="text-3xl md:text-4xl font-heading font-medium text-theme-text-main mb-6 relative z-10">Ready to join our happy clients?</h2>
                <p className="text-theme-text-body text-lg mb-10 max-w-xl mx-auto relative z-10 font-light">Experience the difference of a dedicated financial partner.</p>
                
                <a href="/#contact" className="inline-block bg-theme-text-main text-white font-bold px-10 py-4 rounded-full hover:bg-gold-DEFAULT transition-all shadow-lg hover:shadow-2xl relative z-10">
                    Schedule a Consultation
                </a>
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;
