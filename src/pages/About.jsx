import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Quote } from 'lucide-react';

const About = () => {
  const leadership = [
     { name: 'Smriti Karki', role: 'President', img: 'https://ui-avatars.com/api/?name=Smriti+Karki&background=0F2C59&color=fff' },
     { name: 'Suraj Poudyal', role: 'Senior Vice President', img: 'https://ui-avatars.com/api/?name=Suraj+Poudyal&background=C19A6B&color=fff' },
     { name: 'Amrit Paudel', role: 'Vice President', img: 'https://ui-avatars.com/api/?name=Amrit+Paudel&background=0F2C59&color=fff' },
     { name: 'Dr. Rabindra K. Karki', role: 'General Secretary', img: 'https://ui-avatars.com/api/?name=Rabindra+Karki&background=0F2C59&color=fff' },
     { name: 'Sajan Silwal', role: 'Secretary', img: 'https://ui-avatars.com/api/?name=Sajan+Silwal&background=0F2C59&color=fff' },
     { name: 'Balaram Paudel', role: 'Treasurer', img: 'https://ui-avatars.com/api/?name=Balaram+Paudel&background=0F2C59&color=fff' },
     { name: 'Manish Pandey', role: 'Joint Treasurer', img: 'https://ui-avatars.com/api/?name=Manish+Pandey&background=0F2C59&color=fff' }
  ];

  const guidelines = [
    { title: "Lifelong Learning", desc: "Promote continuous education to stay ahead in a changing market.", color: "bg-blue-50 text-blue-600" },
    { title: "Economic Prosperity", desc: "Encourage business and community wealth through strategic programs.", color: "bg-amber-50 text-amber-600" },
    { title: "Overcoming Obstacles", desc: "Identify and remove barriers detrimental to the business climate.", color: "bg-red-50 text-red-600" },
    { title: "Unified Voice", desc: "Serve as a non-partisan advocate for the DFW Nepali business community.", color: "bg-green-50 text-green-600" },
    { title: "Civic Engagement", desc: "Support programs that increase the community's functional and aesthetic value.", color: "bg-purple-50 text-purple-600" },
    { title: "Key Leadership", desc: "Provide direction on economic growth, education, quality of life, and diversity.", color: "bg-indigo-50 text-indigo-600" }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-28 bg-surface-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2 mb-12 lg:mb-0"
           >
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Advancing the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Economic Future</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-body border-l-4 border-secondary pl-6">
                The Nepalese American Chamber of Commerce (NACOC) is dedicated to advocating for responsive government, quality education, and preserving the unique characteristics of the DFW Nepali community.
              </p>
           </motion.div>
           
           <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:w-1/2 relative"
           >
              <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100 max-w-md mx-auto">
                  <Quote className="text-primary/20 w-16 h-16 mb-4 absolute top-6 left-6" />
                  <p className="text-lg italic text-slate-700 relative z-10 mb-6 pt-8 px-4">
                      "Our mission is simple yet profound: to create an environment where businesses don't just survive, but truly thrive through connection and support."
                  </p>
                  <div className="flex items-center px-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">SK</div>
                      <div>
                          <div className="font-bold text-slate-900">Smriti Karki</div>
                          <div className="text-xs text-secondary uppercase font-bold tracking-widest">President</div>
                      </div>
                  </div>
              </div>
              <div className="absolute top-10 right-10 w-full h-full bg-secondary/10 rounded-full blur-3xl -z-10"></div>
           </motion.div>
        </div>
      </section>

      {/* Guidelines Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
             <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Our Guiding Principles</h2>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto">To accomplish our goals, we adhere to these core values that drive every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidelines.map((item, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="p-10 border border-slate-100 rounded-3xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 group bg-surface-50 hover:bg-white"
               >
                 <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-8 transition-transform transform group-hover:scale-110 shadow-sm`}>
                    <CheckCircle size={28} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   {item.desc}
                 </p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 opacity-20 bg-mesh mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Executive Committee</h2>
            <p className="text-blue-200 text-lg">Meet the dedicated leaders serving the 2024-2025 term.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-6">
                    <img 
                        src={leader.img} 
                        alt={leader.name} 
                        className="w-full h-full rounded-full object-cover ring-4 ring-white/10 group-hover:ring-secondary transition-all"
                    />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{leader.name}</h3>
                <p className="text-primary-200 text-sm font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                
                <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    {/* Social placeholders could go here */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
