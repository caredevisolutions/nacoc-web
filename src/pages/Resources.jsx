import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mic, BookOpen, ExternalLink, Download, Play, ArrowRight } from 'lucide-react';

const Resources = () => {
  const newsletters = [
    { month: 'November', year: '2025', link: '#' },
    { month: 'August', year: '2025', link: '#' },
    { month: 'May', year: '2025', link: '#' },
    { month: 'October', year: '2024', link: '#' },
    { month: 'July', year: '2024', link: '#' },
    { month: 'April', year: '2024', link: '#' },
  ];

  const podcasts = [
    {
      title: "All About Entrepreneurship",
      desc: "Join us as we discuss the journey of successful Nepalese business owners in Texas.",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Is Entrepreneurship For You?",
      desc: "Deep dive into the risks and rewards of starting your own business.",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const guides = [
     {
        title: "Steps to Finding a Mentor",
        desc: "A comprehensive guide on how to connect with experienced professionals who can help you grow.",
        link: "https://www.sba.gov/content/steps-finding-mentor",
        gradient: "from-blue-600 to-blue-800"
     },
     {
        title: "20 Questions Before Starting",
        desc: "Ask yourself these critical questions to ensure you're ready for the business journey.",
        link: "https://www.sba.gov/content/20-questions-before-starting-business",
        gradient: "from-secondary to-secondary-dark"
     }
  ];

  return (
    <div className="bg-surface-50 min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-primary-dark relative py-24 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-slate-900 opacity-90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl lg:text-7xl font-heading font-bold text-white mb-6"
            >
                Knowledge Hub
            </motion.h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
                Access our library of newsletters, podcasts, and business guides designed to help you thrive.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        
        {/* Newsletters Section */}
        <div className="mb-32">
            <div className="flex items-center mb-10">
                <div className="p-4 bg-white shadow-md rounded-2xl mr-6 text-primary border border-slate-100">
                    <FileText size={32} />
                </div>
                <div>
                     <h2 className="text-3xl font-heading font-bold text-slate-900">Monthly Newsletters</h2>
                     <p className="text-slate-500 text-lg">Stay updated with chamber news and community highlights.</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsletters.map((item, index) => (
                    <motion.a 
                        href={item.link}
                        key={index}
                        whileHover={{ y: -5 }}
                        className="block bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/2 -translate-y-1/2">
                            <FileText size={100} />
                        </div>
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider group-hover:bg-primary/10 group-hover:text-primary transition-colors">{item.year}</span>
                            <div className="p-2 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                                <Download size={20} />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 relative z-10">{item.month} Newsletter</h3>
                        <p className="text-slate-500 relative z-10">Featuring Dr. Shilu Ghimire & Team</p>
                    </motion.a>
                ))}
            </div>
        </div>

        {/* Podcast Section */}
        <div className="mb-32 bg-slate-900 rounded-3xl p-10 lg:p-16 relative overflow-hidden text-white shadow-2xl shadow-blue-900/20">
            <div className="absolute inset-0 bg-mesh opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
             
             <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="lg:w-1/3">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl inline-block text-secondary mb-8 border border-white/10">
                        <Mic size={32} />
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-white mb-6">Podcast Series</h2>
                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                        Tune in to <span className="text-white font-bold">"All About Entrepreneurship"</span>. Authentic conversations with leaders who have walked the path, shared stories of failure and triumph.
                    </p>
                    <button className="px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all shadow-lg shadow-secondary/20 flex items-center">
                        <Play size={20} className="mr-2 fill-current" /> Listen on Spotify
                    </button>
                </div>

                <div className="lg:w-2/3 grid gap-6">
                    {podcasts.map((pod, idx) => (
                        <motion.div 
                            key={idx} 
                            whileHover={{ scale: 1.01 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                             <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative shadow-lg">
                                 <img src={pod.image} alt={pod.title} className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                     <Play size={24} className="fill-white" />
                                 </div>
                             </div>
                             <div className="flex-grow text-center md:text-left">
                                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{pod.title}</h3>
                                 <p className="text-slate-400 text-sm leading-relaxed">{pod.desc}</p>
                             </div>
                             <div className="flex-shrink-0 text-xs font-bold text-slate-400 border border-white/10 px-4 py-2 rounded-full uppercase tracking-wider">
                                 {pod.duration}
                             </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </div>

        {/* Entrepreneur Guides */}
        <div>
             <div className="flex items-center mb-10">
                <div className="p-4 bg-white shadow-md rounded-2xl mr-6 text-green-600 border border-slate-100">
                    <BookOpen size={32} />
                </div>
                <div>
                     <h2 className="text-3xl font-heading font-bold text-slate-900">Entrepreneur Guides</h2>
                     <p className="text-slate-500 text-lg">Essential reading for starting your business.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                     <motion.div 
                        key={index}
                        whileHover={{ y: -5 }}
                        className={`bg-gradient-to-br ${guide.gradient} p-10 rounded-3xl text-white relative overflow-hidden shadow-xl`}
                     >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">{guide.title}</h3>
                                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                                    {guide.desc}
                                </p>
                            </div>
                            <a href={guide.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-white/90 hover:text-white transition-colors bg-white/10 w-fit px-6 py-3 rounded-full hover:bg-white/20">
                                Read Guide <ExternalLink size={18} className="ml-2" />
                            </a>
                        </div>
                        <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-10 translate-y-10">
                            <BookOpen size={200} />
                        </div>
                     </motion.div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Resources;
