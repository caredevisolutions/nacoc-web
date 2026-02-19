import React from 'react';
import { Calculator, FileText, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
      {
        icon: Calculator,
        title: "Tax Planning & Prep",
        desc: "Proactive strategies to minimize liability and ensure compliance for individuals and businesses.",
      },
      {
        icon: FileText,
        title: "Bookkeeping & Payroll",
        desc: "Precision in every transaction. We keep your books organized so you can focus on growth.",
      },
      {
        icon: Briefcase,
        title: "Business Consulting",
        desc: "Strategic guidance for entity formation, restructuring, and operational efficiency.",
      },
      {
        icon: TrendingUp,
        title: "Wealth Management",
        desc: "Holistic financial planning to build, protect, and transfer your wealth effectively.",
      }
    ];
  
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15
        }
      }
    };
  
    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
    };
  
  
    return (
      <section id="services" className="py-24 bg-theme-bg relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-theme-border to-transparent opacity-50"></div>
          <div className="absolute left-0 bottom-0 w-[40%] h-[40%] bg-gold-light/5 blur-[120px] rounded-full pointer-events-none"></div>
          
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4">
                      <div className="h-[1px] w-8 bg-gold-DEFAULT"></div>
                      <span className="text-gold-dark uppercase tracking-widest text-xs font-bold">What We Do</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-medium text-theme-text-main leading-tight">
                      Comprehensive <span className="text-gold-DEFAULT italic">Financial Solutions.</span>
                  </h2>
              </div>
              <div className="max-w-md">
                  <p className="text-theme-text-body text-lg font-light leading-relaxed">
                      We go beyond standard accounting to provide a full suite of services designed for your long-term success.
                  </p>
              </div>
          </div>
  
          <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
              {services.map((service, idx) => (
                  <motion.div 
                      variants={item}
                      key={idx} 
                      className="group relative bg-white p-8 rounded-2xl border border-theme-border/50 hover:border-gold-DEFAULT/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                  >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                          <div className="w-14 h-14 bg-theme-bg rounded-xl flex items-center justify-center text-gold-dark mb-6 border border-theme-border group-hover:border-gold-DEFAULT/30 group-hover:scale-110 transition-all duration-300 shadow-sm">
                              <service.icon size={26} strokeWidth={1.5} />
                          </div>
                          
                          <h3 className="text-xl font-heading font-medium mb-3 text-theme-text-main group-hover:text-gold-dark transition-colors">{service.title}</h3>
                          
                          <p className="text-theme-text-body text-sm leading-relaxed mb-6 group-hover:text-theme-text-main transition-colors">
                              {service.desc}
                          </p>
                          
                          <div className="flex items-center text-gold-dark text-xs font-bold uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                              <span>Learn More</span>
                              <ArrowRight size={14} className="ml-2" />
                          </div>
                      </div>
                  </motion.div>
              ))}
          </motion.div>
          
          <div className="mt-16 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-theme-border text-theme-text-main font-medium text-sm tracking-wide hover:bg-theme-text-main hover:text-white transition-all duration-300 hover:shadow-lg bg-white">
                  <span>View All Services</span>
                  <ArrowRight size={16} />
              </Link>
          </div>
        </div>
      </section>
    );
  };

export default Services;
