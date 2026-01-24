import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CreditCard, Laptop, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
    
  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* Header */}
         <section className="bg-primary-dark py-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl lg:text-6xl font-heading font-bold mb-6"
                >
                    Strategic <span className="text-secondary">Programs</span>
                </motion.h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto font-body">
                    Designed to empower the Nepalese-American business community through practical tools, education, and connections.
                </p>
            </div>
      </section>

      <div className="container mx-auto px-6 py-24">
         
         {/* Start-up Academy */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-16 items-center mb-32"
         >
            <div className="lg:w-1/2">
                <div className="inline-block p-4 bg-purple-100 text-purple-700 rounded-2xl mb-6">
                    <Rocket size={40} />
                </div>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Start-Up Academy</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    An intensive 3-month program that teaches aspiring entrepreneurs how to launch and run their own REAL businesses.
                </p>
                <ul className="space-y-4 mb-8">
                    {[
                        "Brainstorm & validate business ideas",
                        "Write a comprehensive business plan",
                        "Pitch to potential investors (Shark Tank style!)",
                        "Legally register & launch your business"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-700">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                            {item}
                        </li>
                    ))}
                </ul>
                <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
                    Apply for Next Batch <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
            <div className="lg:w-1/2 bg-purple-50 rounded-3xl p-10 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                         <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
                         <div className="text-xs font-bold text-slate-400 uppercase">Months Duration</div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm">
                         <div className="text-3xl font-bold text-purple-600 mb-1">1:1</div>
                         <div className="text-xs font-bold text-slate-400 uppercase">Mentorship</div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm col-span-2">
                         <div className="text-xl font-bold text-slate-800 mb-2">Real Launch</div>
                         <p className="text-sm text-slate-500">Students don't just learn; they legally register and launch their ventures.</p>
                     </div>
                </div>
            </div>
         </motion.div>

         {/* Business Assistance Center */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-32"
         >
            <div className="lg:w-1/2">
                <div className="inline-block p-4 bg-blue-100 text-blue-700 rounded-2xl mb-6">
                    <Laptop size={40} />
                </div>
                <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6">Business Assistance Center</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    A major NACOC initiative providing no-cost business development services via our online platform. We offer in-depth, client-specific coaching to unlock your potential.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                        "Accounting Assistance",
                        "Management Counseling",
                        "Marketing Plan Development",
                        "Contract Procurement",
                        "Govt. Certification Help",
                        "Estimating/Bidding Help"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                           <CheckCircle size={16} className="text-blue-500 mr-2 flex-shrink-0" /> {item}
                        </div>
                    ))}
                </div>
                <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-blue-200">
                    Get Free Assistance <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
             <div className="lg:w-1/2 bg-blue-50 rounded-3xl p-10 flex items-center justify-center relative overflow-hidden h-[400px]">
                <div className="absolute inset-0 bg-mesh opacity-30"></div>
                <div className="relative z-10 text-center">
                    <p className="text-2xl font-heading font-bold text-primary-dark mb-4">"The needs of the client drive the experience."</p>
                    <p className="text-primary font-medium tracking-wide uppercase text-sm">NACOC Core Philosophy</p>
                </div>
            </div>
         </motion.div>

        {/* Discount Card */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 lg:p-20 text-white relative overflow-hidden"
         >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                 <div className="lg:w-1/2">
                    <div className="flex items-center space-x-4 mb-8">
                         <div className="p-3 bg-white/10 rounded-xl"><CreditCard size={32} /></div>
                         <h2 className="text-3xl lg:text-4xl font-heading font-bold">NACOC Discount Card</h2>
                    </div>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        An exclusive benefit for our members and community. Save money at participating local businesses while supporting the Nepalese-American economy.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['YETI HOMES', 'SMRITI CPA', 'NEPAIT LLC', 'SMALLBUSINESSHELPDFW'].map((partner, i) => (
                             <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors cursor-default">
                                {partner}
                             </span>
                        ))}
                    </div>
                 </div>
                 
                 {/* Card Visual */}
                 <div className="lg:w-1/2 flex justify-center perspective-1000">
                     <div className="w-96 h-56 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl shadow-2xl relative overflow-hidden transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500 border-t border-white/20">
                         <div className="absolute inset-0 bg-pattern opacity-10"></div>
                         <div className="p-8 h-full flex flex-col justify-between relative z-10">
                             <div className="flex justify-between items-start">
                                 <span className="font-bold tracking-widest text-white/90">NACOC</span>
                                 <Globe size={24} className="text-white/80" />
                             </div>
                             <div>
                                 <div className="text-lg tracking-widest mb-1 text-white/90">0000 1234 5678 9000</div>
                                 <div className="flex justify-between items-end">
                                     <span className="text-xs text-white/70 uppercase">Member Since 2024</span>
                                     <span className="font-bold text-white">VIP MEMBER</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </motion.div>

      </div>
    </div>
  );
};

// Simple icon wrapper component used abouce
function CheckCircle({ size, className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    )
}

export default Programs;
