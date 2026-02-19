import React from 'react';
import { Calculator, FileText, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
      {
        icon: Calculator,
        title: "Tax Preparation",
        desc: "Comprehensive tax filing for individuals and businesses in Euless and beyond. Maximize deductions and minimize liability.",
        color: "bg-gold-DEFAULT",
        iconTv: "text-gold-DEFAULT",
        iconBg: "bg-slate-800",
      },
      {
        icon: FileText,
        title: "Bookkeeping",
        desc: "Accurate monthly bookkeeping to keep your finances organized and ready for tax season. Let us handle the numbers.",
        color: "bg-gold-DEFAULT",
        iconTv: "text-gold-DEFAULT",
        iconBg: "bg-slate-800",
      },
      {
        icon: Briefcase,
        title: "Business Consulting",
        desc: "Strategic advice to start, grow, or restructure your business for optimal financial health and long-term success.",
         color: "bg-gold-DEFAULT",
         iconTv: "text-gold-DEFAULT",
         iconBg: "bg-slate-800",
      },
      {
        icon: TrendingUp,
        title: "Financial Planning",
        desc: "Long-term strategies to build wealth and secure your future with personalized roadmaps tailored to your goals.",
        color: "bg-gold-DEFAULT",
        iconTv: "text-gold-DEFAULT",
        iconBg: "bg-slate-800",
      }
    ];
  
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const item = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };
  
  
    return (
      <section id="services" className="py-24 bg-black-rich relative overflow-hidden">
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-DEFAULT/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
  
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">Our Expertise</h2>
              <div className="w-24 h-1.5 bg-gold-DEFAULT mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-300 text-lg">
                  We provide a full suite of financial services designed to help you navigate complex tax laws and achieve your financial goals.
              </p>
          </div>
  
          <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
              {services.map((service, idx) => (
                  <motion.div 
                      variants={item}
                      key={idx} 
                      whileHover={{ 
                          y: -10,
                          scale: 1.02,
                      }}
                      className="bg-slate-900/50 p-8 rounded-3xl shadow-lg transition-all duration-300 border border-slate-800 group relative overflow-hidden hover:border-gold-DEFAULT/50"
                  >
                       {/* Gradient Hover Border */}
                      <div className={`absolute bottom-0 left-0 w-full h-1 ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                      
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-DEFAULT/5 rounded-bl-full -mr-10 -mt-10 transition-colors group-hover:bg-gold-DEFAULT/10"></div>
  
                      <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.iconTv} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10 border border-slate-700`}>
                          <service.icon size={30} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold-DEFAULT transition-colors">{service.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                          {service.desc}
                      </p>
                  </motion.div>
              ))}
          </motion.div>
          
          <div className="text-center">
              <Link to="/services" className="inline-block px-8 py-3 rounded-full border border-gold-DEFAULT text-gold-DEFAULT font-bold hover:bg-gold-DEFAULT hover:text-black-rich transition-all duration-300 shadow-lg hover:shadow-gold-DEFAULT/20">
                  View All Services
              </Link>
          </div>
        </div>
      </section>
    );
  };

export default Services;
