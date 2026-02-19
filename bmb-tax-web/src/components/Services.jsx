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
      <section id="services" className="py-24 bg-[#1C1C1E] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute right-0 top-1/4 w-[30%] h-[30%] bg-gold-DEFAULT/5 blur-[120px] rounded-full pointer-events-none"></div>
          
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-4">
                      <div className="h-[1px] w-8 bg-gold-DEFAULT"></div>
                      <span className="text-gold-light uppercase tracking-widest text-xs font-medium">What We Do</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-medium text-white leading-tight">
                      Comprehensive <span className="text-gold-DEFAULT">Financial Solutions.</span>
                  </h2>
              </div>
              <div className="max-w-md">
                  <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
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
                      className="group relative bg-[#2C2C2E] p-8 rounded-2xl border border-white/5 hover:border-gold-DEFAULT/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-DEFAULT/5 overflow-hidden"
                  >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                          <div className="w-14 h-14 bg-[#1C1C1E] rounded-xl flex items-center justify-center text-gold-DEFAULT mb-6 border border-white/5 group-hover:border-gold-DEFAULT/30 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/20">
                              <service.icon size={26} strokeWidth={1.5} />
                          </div>
                          
                          <h3 className="text-xl font-heading font-medium mb-3 text-white group-hover:text-gold-light transition-colors">{service.title}</h3>
                          
                          <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 group-hover:text-[#D4D4D8] transition-colors">
                              {service.desc}
                          </p>
                          
                          <div className="flex items-center text-gold-DEFAULT text-xs font-medium uppercase tracking-wider opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                              <span>Learn More</span>
                              <ArrowRight size={14} className="ml-2" />
                          </div>
                      </div>
                  </motion.div>
              ))}
          </motion.div>
          
          <div className="mt-16 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gold-DEFAULT/30 text-gold-light font-medium text-sm tracking-wide hover:bg-gold-DEFAULT hover:text-black-rich transition-all duration-300 hover:shadow-lg hover:shadow-gold-DEFAULT/20">
                  <span>View All Services</span>
                  <ArrowRight size={16} />
              </Link>
          </div>
        </div>
      </section>
    );
  };

export default Services;
