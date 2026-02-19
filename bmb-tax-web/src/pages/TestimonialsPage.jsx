import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const avatarColors = [
  'from-gold-DEFAULT/30 to-gold-dark/20 text-gold-DEFAULT',
  'from-accent-indigo/30 to-accent-indigo/10 text-accent-indigo',
  'from-accent-emerald/30 to-accent-emerald/10 text-accent-emerald',
  'from-accent-violet/30 to-accent-violet/10 text-accent-violet',
  'from-accent-rose/30 to-accent-rose/10 text-accent-rose',
  'from-accent-sky/30 to-accent-sky/10 text-accent-sky',
];

const testimonials = [
  { name: 'Shady Altllawy', role: 'Client for 5 Years', text: 'The best service. I have been using their services for almost 5 years – always satisfied.', stars: 5 },
  { name: 'Prajwal Bhandari', role: 'Local Resident', text: 'Excellent tax firm with knowledgeable, professional (yet take your case as if their own), and very responsive staff. They explained everything clearly and made the entire tax filing process smooth and stress-free.', stars: 5 },
  { name: 'Shrijesh', role: 'Client for 10 Years', text: 'Great price. They been doing my taxes for last 10 years, amazing all the time, never had an issue.', stars: 5 },
  { name: 'Nabraaz Poudel', role: 'Client', text: 'Efficient process with helpful Service! Smooth experience. Appreciate the help!', stars: 5 },
  { name: 'Michael Rodriguez', role: 'Freelance Designer', text: "I was dreading tax season until I found BMB. They explained everything clearly and found deductions I didn't even know existed.", stars: 5 },
  { name: 'Anita Patel', role: 'Small Business Owner', text: "Trustworthy and thorough. They manage my practice's payroll and taxes flawlessly.", stars: 5 },
];

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Reviews | BMB Tax & Financial Service</title>
        <meta name="description" content="Read what our happy clients in Euless, TX have to say about our tax and financial services. 5.0 Star Rated on Google." />
      </Helmet>

      <section className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-theme-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-[45%] h-[55%] bg-gold-DEFAULT/10 blur-[150px] rounded-full pointer-events-none z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-[35%] h-[40%] bg-accent-indigo/8 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/25 text-gold-DEFAULT font-bold tracking-widest uppercase text-[10px] mb-6"
            >
              <Sparkles size={11} /> Success Stories
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-heading font-medium mt-2 mb-6 text-theme-text-main"
            >
              Loved by Locals in <span className="text-gold-DEFAULT italic">Texas.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-theme-text-body font-light"
            >
              See why hundreds of individuals and businesses in Euless and Waco trust us with their financial future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-theme-card border border-theme-border/80 rounded-2xl"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold-DEFAULT" fill="currentColor" />)}
              </div>
              <span className="text-theme-text-main font-bold text-sm">5.0</span>
              <span className="text-theme-text-body text-sm">on Google Reviews</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-theme-card p-7 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/40 transition-all duration-300 relative group hover:shadow-gold cursor-pointer"
              >
                <Quote className="absolute top-6 right-6 text-theme-border group-hover:text-gold-DEFAULT/25 rotate-12 transition-colors duration-300" size={50} fill="currentColor" />
                <div className="flex gap-1 text-gold-DEFAULT mb-5 relative z-10">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-theme-text-body mb-6 leading-relaxed italic relative z-10 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`w-11 h-11 bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} rounded-full flex items-center justify-center font-bold text-sm border border-white/10`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-theme-text-main text-sm group-hover:text-gold-DEFAULT transition-colors">{t.name}</h4>
                    <p className="text-xs text-theme-text-body uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-20 rounded-3xl overflow-hidden relative bg-theme-bg border border-theme-border/60"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gold-DEFAULT/6 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 py-16 px-10 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-theme-text-main mb-4">Ready to join our <span className="text-gold-DEFAULT italic">happy clients?</span></h2>
              <p className="text-theme-text-body text-lg mb-10 max-w-xl mx-auto font-light">Experience the difference of a dedicated financial partner in Texas.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-10 py-4 rounded-full font-bold shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all">
                  Schedule a Consultation <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 bg-theme-card border border-theme-border text-theme-text-main px-8 py-4 rounded-full font-bold hover:border-gold-DEFAULT/50 hover:text-gold-DEFAULT hover:-translate-y-1 transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;

