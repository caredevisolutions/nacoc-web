import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BMB Tax & Financial Service | Euless, TX</title>
        <meta name="description" content="Top-rated tax preparation, bookkeeping, and financial planning in Euless, Texas. 5.0 Star Google Rated. Call (254) 350-0233." />
      </Helmet>
      
      <main className="overflow-hidden">
        <Hero />
        
        {/* Animated Section Wrapper */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
             <Services />
        </motion.div>

        <About />
        
        {/* CTA / Testimonial Teaser could go here */}
        
        <Contact />
      </main>
    </>
  );
};

export default Home;