import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Globe, Phone, Filter, ChevronRight, Star, ChevronDown, ChevronUp, Mail, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const BusinessCard = ({ biz }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white border ${biz.featured ? 'border-secondary/40 ring-1 ring-secondary/20' : 'border-slate-100'} p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden`}
        >
             {biz.featured && (
                <div className="absolute top-0 right-0 p-4">
                     <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full flex items-center">
                        <Star size={10} className="mr-1 fill-secondary" /> FEATURED
                    </span>
                </div>
            )}
            
            {/* Summary Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                <div className="mb-4 md:mb-0 pr-4 flex-1">
                     <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{biz.category}</span>
                        {biz.discount && <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{biz.discount} Discount</span>}
                     </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{biz.name}</h3>
                    <div className="flex flex-wrap items-center text-slate-500 gap-4 text-sm font-medium">
                        <span className="flex items-center"><MapPin size={16} className="mr-1.5 text-primary" /> {biz.address}</span>
                        <span className="flex items-center"><Phone size={16} className="mr-1.5 text-slate-400" /> {biz.phone}</span>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full md:w-auto">
                    <button 
                         onClick={() => setIsExpanded(!isExpanded)}
                         className="inline-flex justify-center items-center px-4 py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all text-sm"
                    >
                        {isExpanded ? 'Less Info' : 'More Info'}
                        {isExpanded ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                    </button>
                    <Link 
                        to={`/directory/${biz.slug || biz.id}`}
                        className="inline-flex justify-center items-center px-6 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-white hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all text-sm group/btn"
                    >
                        View Profile <ChevronRight size={16} className="ml-2 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                    </Link>
                </div>
            </div>

            {/* Expanded Section */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-100 pt-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-800 mb-2 text-sm">About</h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{biz.description || "A trusted member of the Nepalese-American Chamber of Commerce. Contact us for more information."}</p>
                                <div className="flex items-center text-sm text-primary font-bold hover:underline">
                                    <Globe size={16} className="mr-2" />
                                    <a href={`https://${biz.website}`} target="_blank" rel="noreferrer">{biz.website}</a>
                                </div>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4">
                                <h4 className="font-bold text-slate-800 mb-3 text-sm">Contact Information</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center text-slate-600">
                                        <User size={16} className="mr-3 text-slate-400" />
                                        <span>{biz.owner || "Management Team"}</span>
                                    </div>
                                    <div className="flex items-center text-slate-600">
                                        <Mail size={16} className="mr-3 text-slate-400" />
                                        <span>{biz.email}</span>
                                    </div>
                                    <div className="flex items-center text-slate-600">
                                        <Phone size={16} className="mr-3 text-slate-400" />
                                        <span>{biz.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const BusinessDirectory = () => {
    const { businesses } = useData();
    const [textFilter, setTextFilter] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const categories = ['All Categories', ...new Set(businesses.map(b => b.category))];

    const filteredBusinesses = businesses.filter(b => {
        const matchesText = b.name.toLowerCase().includes(textFilter.toLowerCase()) || 
                            b.category.toLowerCase().includes(textFilter.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || b.category === selectedCategory;
        return matchesText && matchesCategory;
    });

  return (
    <div className="bg-surface-50 min-h-screen pt-20">
      
       {/* Header */}
       <section className="bg-primary-dark relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl lg:text-6xl font-heading font-bold text-white mb-6">
                    Business Directory
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto font-body mb-10">
                    Discover and connect with trusted Nepalese-American businesses in the DFW area.
                </p>
            </motion.div>
            
            {/* Search Bar */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto relative group"
            >
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Search className="text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                    type="text" 
                    className="w-full pl-14 pr-6 py-4 rounded-full text-base lg:text-lg shadow-xl shadow-blue-900/20 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all placeholder-slate-400 text-slate-800"
                    placeholder="Search businesses..."
                    onChange={(e) => setTextFilter(e.target.value)}
                />
            </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
          
          <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-1/4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-32 border border-slate-100">
                      <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
                          <Filter size={20} className="text-primary mr-2" />
                          <h3 className="font-bold text-lg text-slate-900">Categories</h3>
                      </div>
                      <div className="space-y-2">
                          {categories.map((cat) => (
                              <label key={cat} className="flex items-center space-x-3 cursor-pointer group p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                  <input 
                                    type="radio" 
                                    name="category"
                                    checked={selectedCategory === cat}
                                    onChange={() => setSelectedCategory(cat)}
                                    className="hidden" 
                                  />
                                   <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedCategory === cat ? 'border-primary' : 'border-slate-300 group-hover:border-slate-400'}`}>
                                      {selectedCategory === cat && <div className="w-2 h-2 bg-primary rounded-full" />}
                                   </div>
                                  <span className={`font-medium transition-colors ${selectedCategory === cat ? 'text-primary' : 'text-slate-600 group-hover:text-primary'}`}>
                                    {cat}
                                  </span>
                              </label>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Listings */}
              <div className="lg:w-3/4 flex flex-col gap-5">
                  <AnimatePresence>
                  {filteredBusinesses.length > 0 ? (
                      filteredBusinesses.map((biz) => (
                        <BusinessCard key={biz.id} biz={biz} />
                      ))
                  ) : (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white rounded-2xl border border-slate-100"
                      >
                          <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Search className="text-slate-400" size={24} />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2">No businesses found</h3>
                          <p className="text-slate-500 text-sm">Try adjusting your search or filters.</p>
                      </motion.div>
                  )}
                  </AnimatePresence>
              </div>
          </div>

      </div>
    </div>
  );
};

export default BusinessDirectory;
