import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Calendar, ArrowUpRight, MapPin, Clock } from 'lucide-react';
import StatsSection from '../components/StatsSection';

const Home = () => {
    
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-surface-50 pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
           <div className="absolute inset-0 bg-hero-pattern opacity-[0.05]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="inline-block mb-8 px-5 py-2 rounded-full border border-primary/20 bg-white/60 backdrop-blur-md text-primary-dark text-sm font-bold tracking-widest uppercase shadow-sm"
            >
               EST. 2000 — Dallas, Texas
            </motion.div>
            
            <motion.h1 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-5xl lg:text-7xl xl:text-8xl font-heading font-bold text-slate-900 leading-[1.1] mb-8"
            >
              <motion.span variants={fadeInUp} className="block">Uniting Businesses.</motion.span>
              <motion.span variants={fadeInUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary">Empowering Community.</motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto font-body leading-relaxed"
            >
              The Nepalese American Chamber of Commerce (NACOC) is the premier organization dedicated to fostering economic growth and professional development for Nepalese businesses in the USA.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link to="/membership" className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/30 flex items-center justify-center hover:-translate-y-1 text-lg">
                Show your Support <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about-us" className="px-10 py-5 bg-white text-slate-800 border-2 border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:-translate-y-1 text-lg">
                Our Mission
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards - Overlapping */}
      <section className="relative z-20 -mt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="w-10 h-10 text-white" />, 
                title: "Networking", 
                desc: "Connect with industry leaders and like-minded professionals across the nation.",
                gradient: "bg-gradient-to-br from-primary to-primary-light" 
              },
              { 
                icon: <TrendingUp className="w-10 h-10 text-white" />, 
                title: "Growth", 
                desc: "Access resources, workshops, and mentorship to scale your business.",
                gradient: "bg-gradient-to-br from-secondary to-secondary-dark" 
              },
              { 
                icon: <Calendar className="w-10 h-10 text-white" />, 
                title: "Events", 
                desc: "Participate in high-impact events designed to foster collaboration.",
                gradient: "bg-gradient-to-br from-accent to-red-700" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`${item.gradient} rounded-3xl p-10 text-white shadow-2xl hover:-translate-y-3 transition-transform duration-300 relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 group-hover:scale-125 transition-transform duration-500">
                    {item.icon}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed font-body text-lg mb-8">
                  {item.desc}
                </p>
                <Link to="/programs" className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:underline bg-white/10 px-4 py-2 rounded-full">
                  Read More <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Component */}
      <StatsSection />

      {/* Latest Events Preview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-slate-500">Join us at our next gathering.</p>
            </div>
            <Link to="/programs" className="hidden md:flex items-center text-primary font-bold hover:text-primary-dark transition-colors text-lg">
              View All Events <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Spotlight Event */}
             <motion.div 
                whileHover={{ y: -10 }}
                className="group col-span-1 lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative flex flex-col md:flex-row border border-slate-100"
             >
                <div className="md:w-1/2 bg-slate-900 relative overflow-hidden h-64 md:h-auto min-h-[300px]">
                    <img 
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                        alt="Event" 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur px-4 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg z-10 uppercase tracking-wider">
                      Featured Event
                   </div>
                   <div className="absolute bottom-6 left-6 text-white p-4">
                       <p className="font-bold text-3xl font-heading">10th Annual Gala</p>
                   </div>
                </div>
                <div className="p-10 md:w-1/2 flex flex-col justify-center bg-white relative">
                    <div className="flex items-center text-primary font-bold mb-4 space-x-4">
                        <span className="flex items-center"><Calendar size={18} className="mr-2" /> Aug 9, 2025</span>
                        <span className="flex items-center"><Clock size={18} className="mr-2" /> 6:00 PM</span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">A Night of Excellence</h3>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed">Join us for a night of celebration, networking, and recognition of outstanding achievements in our community.</p>
                    <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-primary text-white text-base font-bold rounded-full hover:bg-primary-dark transition-colors self-start shadow-lg shadow-blue-200">
                        Get Tickets <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
             </motion.div>

             {/* Event Card 2 */}
             <motion.div 
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100 flex flex-col"
             >
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Event"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-center shadow-lg">
                      <span className="block text-xs font-bold text-slate-500 uppercase">AUG</span>
                      <span className="block text-2xl font-bold text-slate-900">31</span>
                   </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                   <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">Past Event</div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">Community Purnima</h3>
                   <div className="flex items-center text-slate-500 mb-6 text-sm">
                       <MapPin size={16} className="mr-2" /> Irving, TX
                   </div>
                   <div className="mt-auto">
                        <Link to="/programs" className="text-base font-bold text-primary flex items-center group/link">
                            View Gallery <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                   </div>
                </div>
             </motion.div>
          </div>
          
           <div className="mt-12 text-center md:hidden">
            <Link to="/programs" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors text-lg">
              View All Events <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8">Ready to Grow Your Business?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
               Join hundreds of other successful business owners in the NACOC network. 
               Your journey to expansion and community support starts here.
            </p>
            <Link to="/membership" className="inline-block px-12 py-5 bg-secondary hover:bg-white hover:text-primary-dark text-white font-bold rounded-full transition-all duration-300 shadow-2xl shadow-secondary/20 transform hover:-translate-y-1 text-lg">
               Join NACOC Today
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;
