import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Globe, Phone, Filter, ChevronDown, ChevronUp, Star } from 'lucide-react';

const BusinessCard = ({ biz }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white border ${biz.featured ? 'border-secondary/40 ring-1 ring-secondary/20' : 'border-slate-100'} p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group`}
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                        {biz.featured && (
                            <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                                <Star size={10} className="mr-1 fill-white" /> FEATURED
                            </span>
                        )}
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{biz.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{biz.name}</h3>
                    <div className="flex items-center text-slate-500 mb-1">
                        <MapPin size={16} className="mr-2 text-primary" /> {biz.address}
                    </div>
                </div>
                
                <div className="flex gap-3">
                    <a 
                    href={`https://${biz.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-surface-50 border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all text-sm"
                    >
                        Website <Globe size={14} className="ml-2" />
                    </a>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="p-2.5 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-slate-800 mb-3">Contact Information</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center text-slate-600">
                                        <Phone size={18} className="mr-3 text-secondary" /> 
                                        {biz.phone}
                                    </div>
                                    <div className="flex items-center text-slate-600">
                                        <Globe size={18} className="mr-3 text-secondary" /> 
                                        {biz.website}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">About {biz.name}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Serving the community with excellence in {biz.category}. Contact us today for more information about our services and special offers for NACOC members.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const BusinessDirectory = () => {
    const businesses = [
        { name: "Yeti Homes", category: "Real Estate", address: "Irving, TX", phone: "+1 214-555-0101", website: "yetihomes.com", featured: true },
        { name: "Smriti CPA", category: "Financial Services", address: "Euless, TX", phone: "+1 817-555-0102", website: "smriticpa.com", featured: true },
        { name: "NepIT LLC", category: "Technology", address: "Dallas, TX", phone: "+1 469-555-0103", website: "nepit.com", featured: true },
        { name: "Curry Leaf Restaurant", category: "Restaurants", address: "1800 Valley View Lane, Irving", phone: "+1 972-555-0104", website: "curryleaf.com", featured: false },
        { name: "SmallBusinessHelpDFW", category: "Consulting", address: "Plano, TX", phone: "+1 214-555-0105", website: "sbhdfw.com", featured: true },
        { name: "Everest Insurance", category: "Insurance", address: "Fort Worth, TX", phone: "+1 817-555-0106", website: "everestins.com", featured: false },
    ];

    const [textFilter, setTextFilter] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const categories = ['All Categories', 'Real Estate', 'Restaurants', 'Technology', 'Financial Services', 'Consulting', 'Insurance'];

    const filteredBusinesses = businesses.filter(b => {
        const matchesText = b.name.toLowerCase().includes(textFilter.toLowerCase()) || 
                            b.category.toLowerCase().includes(textFilter.toLowerCase());
        const matchesCategory = selectedCategory === "All Categories" || b.category === selectedCategory;
        return matchesText && matchesCategory;
    });

  return (
    <div className="bg-surface-50 min-h-screen pt-20">
      
       {/* Header */}
       <section className="bg-primary-dark relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
                    Business Directory
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto font-body mb-12">
                    Discover and connect with trusted Nepalese-American businesses in the DFW area.
                </p>
            </motion.div>
            
            {/* Search Bar */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto relative group"
            >
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Search className="text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                    type="text" 
                    className="w-full pl-16 pr-6 py-5 rounded-full text-lg shadow-xl shadow-blue-900/20 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all placeholder-slate-400 text-slate-800"
                    placeholder="Search by name, category, or industry..."
                    onChange={(e) => setTextFilter(e.target.value)}
                />
            </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
          
          <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-1/4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-32 border border-slate-100">
                      <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
                          <Filter size={20} className="text-primary mr-2" />
                          <h3 className="font-bold text-lg text-slate-900">Categories</h3>
                      </div>
                      <div className="space-y-3">
                          {categories.map((cat) => (
                              <label key={cat} className="flex items-center space-x-3 cursor-pointer group p-2 hover:bg-slate-50 rounded-lg transition-colors">
                                  <input 
                                    type="radio" 
                                    name="category"
                                    checked={selectedCategory === cat}
                                    onChange={() => setSelectedCategory(cat)}
                                    className="form-radio h-5 w-5 text-primary border-slate-300 focus:ring-primary" 
                                  />
                                  <span className={`font-medium transition-colors ${selectedCategory === cat ? 'text-primary' : 'text-slate-600 group-hover:text-primary'}`}>
                                    {cat}
                                  </span>
                              </label>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Listings */}
              <div className="lg:w-3/4 flex flex-col gap-6">
                  {filteredBusinesses.length > 0 ? (
                      filteredBusinesses.map((biz, index) => (
                        <BusinessCard key={index} biz={biz} />
                      ))
                  ) : (
                      <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                          <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Search className="text-slate-400" size={32} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">No businesses found</h3>
                          <p className="text-slate-500">Try adjusting your search or filters.</p>
                      </div>
                  )}
              </div>
          </div>

      </div>
    </div>
  );
};

export default BusinessDirectory;
