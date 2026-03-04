import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CreditCard, Laptop, ArrowRight, Globe, CheckCircle2, Star, Zap, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
    
  return (
    <div className="bg-white min-h-screen pt-20 overflow-x-hidden">
      
      {/* Header - More Immersive */}
         <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-slate-900"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-slate-800/50 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-40 -right-40 w-96 h-96 bg-slate-800/50 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                        Empowering Growth
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 tracking-tight">
                        Strategic <span className="text-slate-400">Programs</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-body leading-relaxed">
                        Designed to empower the Nepalese-American business community through practical tools, education, and connections.
                    </p>
                </motion.div>
            </div>
      </section>

      <div className="container mx-auto px-6 py-24 space-y-32">
         
         {/* Start-up Academy - Vibrant Card */}
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
         >
            <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 text-slate-800 font-bold uppercase tracking-widest text-sm mb-4">
                    <Rocket size={18} /> Entrepreneurship
                </div>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Start-Up Academy</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    An intensive 3-month program that transforms aspiring entrepreneurs into business owners. We don't just teach theory; we help you launch.
                </p>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                    <ul className="space-y-4">
                        {[
                            { text: "Brainstorm & validate business ideas", icon: <Zap className="w-5 h-5 text-slate-500" /> },
                            { text: "Write a comprehensive business plan", icon: <BarChart className="w-5 h-5 text-slate-500" /> },
                            { text: "Pitch to potential investors (Shark Tank style!)", icon: <Star className="w-5 h-5 text-slate-500" /> },
                            { text: "Legally register & launch your business", icon: <CheckCircle2 className="w-5 h-5 text-slate-500" /> }
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-slate-800 font-medium">
                                <div className="bg-white p-2 rounded-lg shadow-sm mr-3 border border-slate-100">
                                    {item.icon}
                                </div>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1">
                    Apply for Next Batch <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
                 <div className="relative">
                    <div className="absolute inset-0 bg-slate-100 rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-2xl"></div>
                    <div className="bg-slate-800 rounded-[2rem] p-10 lg:p-12 text-white relative shadow-2xl overflow-hidden group">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
                         <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/20 rounded-full -ml-10 -mb-10 blur-xl"></div>
                         
                         <Rocket className="w-24 h-24 text-white/10 absolute bottom-10 right-10 transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />

                         <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <div className="text-4xl font-bold mb-1">3</div>
                                <div className="text-xs font-bold uppercase opacity-80 text-slate-300">Months Duration</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <div className="text-4xl font-bold mb-1">1:1</div>
                                <div className="text-xs font-bold uppercase opacity-80 text-slate-300">Expert Mentorship</div>
                            </div>
                            <div className="col-span-2 bg-white text-slate-900 p-6 rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform border border-slate-200">
                                <div className="text-xl font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-slate-800"/> Real World Launch</div>
                                <p className="text-sm text-slate-600 font-medium">Students graduate with a legally registered business ready for customers.</p>
                            </div>
                         </div>
                    </div>
                 </div>
            </div>
         </motion.div>

         {/* Business Assistance Center - Modern Layout */}
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
         >
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-slate-200/50 rounded-[2rem] transform -rotate-2 scale-105 opacity-50 blur-2xl"></div>
                <div className="bg-white rounded-[2rem] p-4 shadow-xl border border-slate-100 relative overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                        alt="Business Meeting" 
                        className="rounded-3xl w-full object-cover h-[400px] grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-8">
                        <div className="text-white">
                             <p className="text-2xl font-bold italic mb-2">"The needs of the client drive the experience."</p>
                             <p className="text-sm font-bold uppercase tracking-widest text-slate-300">NACOC Core Philosophy</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-sm mb-4">
                    <Laptop size={18} /> Support
                </div>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Business Assistance Center</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    A major initiative providing <span className="font-bold text-slate-800">no-cost</span> business development services. We offer in-depth, client-specific coaching to unlock your potential.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {[
                        "Accounting Assistance",
                        "Management Counseling",
                        "Marketing Plan Development",
                        "Contract Procurement",
                        "Govt. Certification Help",
                        "Estimating/Bidding Help"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center text-sm font-bold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:bg-white hover:shadow-md transition-all">
                           <CheckCircle2 size={18} className="text-slate-500 mr-3 flex-shrink-0" /> {item}
                        </div>
                    ))}
                </div>
                <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-1">
                    Get Free Assistance <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
         </motion.div>

        {/* Discount Card - Premium Look */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden"
         >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2"></div>
             
             <div className="relative z-10 flex flex-col xl:flex-row items-center gap-12 lg:gap-20 p-10 lg:p-20">
                 <div className="xl:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                         <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 shadow-inner">
                            <CreditCard size={32} className="text-secondary" />
                         </div>
                         <h2 className="text-3xl lg:text-5xl font-heading font-bold">Member Privilege Card</h2>
                    </div>
                    <p className="text-slate-300 text-xl mb-10 leading-relaxed font-light">
                        Unlock exclusive savings at participating local businesses. It's more than a discount—it's a commitment to supporting the Nepalese-American economy.
                    </p>
                    
                    <div className="mb-8">
                        <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Participating Partners Include:</p>
                        <div className="flex flex-wrap gap-3">
                            {['YETI HOMES', 'SMRITI CPA', 'NEPAIT LLC', 'SMALLBUSINESSHELPDFW'].map((partner, i) => (
                                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-secondary/50 transition-all cursor-default">
                                    {partner}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <Link to="/membership" className="inline-flex items-center text-secondary font-bold hover:text-white transition-colors text-lg group">
                        Become a Member to Get Yours <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
                 
                 {/* Card Visual - Realistic Glassmorphism */}
                 <div className="xl:w-1/2 flex justify-center perspective-1000">
                     <div className="w-full max-w-md aspect-[1.586/1] rounded-3xl shadow-2xl relative overflow-hidden transform rotate-y-6 hover:rotate-y-0 text-white transition-all duration-700 hover:scale-105 group border-t border-l border-white/20 bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-xl">
                         
                         {/* Card Background  */}
                         <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondary-dark opacity-90 z-0"></div>
                         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-0"></div>
                         <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl z-0"></div>

                         <div className="p-8 h-full flex flex-col justify-between relative z-10">
                             <div className="flex justify-between items-start">
                                 <div>
                                     <span className="text-2xl font-bold tracking-widest text-white drop-shadow-md">NACOC</span>
                                     <span className="block text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Privilege Card</span>
                                 </div>
                                 <Globe size={32} className="text-white/90 drop-shadow-md" />
                             </div>
                             
                             <div className="flex items-center gap-4 my-auto">
                                 <div className="w-12 h-8 rounded bg-yellow-400/80 backdrop-blur-sm shadow-sm"></div>
                                 <CreditCard className="opacity-50" />
                             </div>

                             <div>
                                 <div className="text-2xl font-mono tracking-widest mb-4 text-white drop-shadow-md shadow-black">0000 1234 5678 9000</div>
                                 <div className="flex justify-between items-end">
                                     <div>
                                         <span className="block text-[8px] font-bold uppercase opacity-70">Card Holder</span>
                                         <span className="font-bold text-lg tracking-wide drop-shadow-md">YOUR NAME</span>
                                     </div>
                                     <span className="font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded border border-white/30 text-xs">VIP MEMBER</span>
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

export default Programs;
