import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Users, Briefcase, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    setQuery('');
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const searchableItems = [
    { title: 'Home', path: '/', type: 'Page', icon: <FileText size={16} /> },
    { title: 'About Us', path: '/about-us', type: 'Page', icon: <Users size={16} /> },
    { title: 'Mission & Vision', path: '/about-us', type: 'Section', icon: <FileText size={16} /> },
    { title: 'Executive Committee', path: '/about-us', type: 'Team', icon: <Users size={16} /> },
    { title: 'Strategic Programs', path: '/programs', type: 'Page', icon: <Briefcase size={16} /> },
    { title: 'Start-Up Academy', path: '/programs', type: 'Program', icon: <RocketIcon /> },
    { title: 'Business Assistance Center', path: '/programs', type: 'Program', icon: <Briefcase size={16} /> },
    { title: 'Business Directory', path: '/directory', type: 'Tool', icon: <Search size={16} /> },
    { title: 'Find a Business', path: '/directory', type: 'Tool', icon: <Search size={16} /> },
    { title: 'Membership', path: '/membership', type: 'Page', icon: <Users size={16} /> },
    { title: 'Events Calendar', path: '/programs', type: 'Events', icon: <Calendar size={16} /> },
    { title: 'Contact Us', path: '/contact-us', type: 'Page', icon: <FileText size={16} /> },
  ];

  const filteredItems = searchableItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5); // Limit to 5 results

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={onClose}
        >
            <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Search Header */}
                <div className="flex items-center p-4 border-b border-slate-100">
                    <Search className="text-slate-400 w-6 h-6 ml-2" />
                    <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="Search pages, programs, and more..." 
                        className="flex-1 px-4 py-3 text-lg text-slate-700 placeholder-slate-400 focus:outline-none bg-transparent"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button 
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <span className="sr-only">Close</span>
                        <X size={20} />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {query && filteredItems.length === 0 ? (
                         <div className="p-8 text-center text-slate-500">
                             <p>No results found for "{query}"</p>
                         </div>
                    ) : (
                        <div className="p-2">
                             {(query ? filteredItems : searchableItems.slice(0, 5)).map((item, idx) => (
                                 <button
                                    key={idx}
                                    onClick={() => handleSelect(item.path)}
                                    className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl group transition-colors text-left"
                                 >
                                     <div className="flex items-center gap-4">
                                         <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                             {item.icon}
                                         </div>
                                         <div>
                                             <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors">{item.title}</h4>
                                             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.type}</span>
                                         </div>
                                     </div>
                                     <ArrowRight size={16} className="text-slate-300 group-hover:text-primary -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                 </button>
                             ))}
                        </div>
                    )}
                    
                    {!query && (
                        <div className="bg-slate-50 p-3 text-xs font-bold text-slate-400 text-center uppercase tracking-widest border-t border-slate-100">
                            Quick Links
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Icon helper
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
)

export default SearchModal;
