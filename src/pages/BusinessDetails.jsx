import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Globe, Phone, Mail, Clock, ShieldCheck, Share2, ArrowLeft, Star, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useData } from '../context/DataContext';

const BusinessDetails = () => {
    const { slug } = useParams();
    const { businesses } = useData();
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (businesses && businesses.length > 0) {
            // Find by slug or ID
            const found = businesses.find(b => b.slug === slug || b.id.toString() === slug);
            setBusiness(found);
            setLoading(false);
        }
    }, [slug, businesses]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!business) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Business Not Found</h2>
                <Link to="/directory" className="text-primary hover:underline flex items-center">
                    <ArrowLeft className="mr-2" size={20} /> Back to Directory
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 min-h-screen pt-20 pb-20">
            {/* Hero / Header with Image Background */}
            <div className="relative h-64 lg:h-80 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img src={business.image || "/api/placeholder/1200/400"} alt="Office" className="w-full h-full object-cover opacity-40 key-visual" />
                </div>
                <div className="relative container mx-auto px-6 h-full flex items-end pb-8 sm:pb-12">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white w-full"
                     >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {business.category}
                            </span>
                            {business.featured && (
                                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center">
                                    <Star size={12} className="mr-1 fill-black" /> Verified Member
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-2">{business.name}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm sm:text-base">
                            <span className="flex items-center"><MapPin size={16} className="mr-1.5" /> {business.address}</span>
                            <span className="hidden sm:inline text-slate-500">•</span>
                            <span className="flex items-center"><Star size={16} className="mr-1.5 text-yellow-500 fill-yellow-500" /> 4.9 (120 Reviews)</span>
                        </div>
                     </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Main Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        {/* About Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">About {business.name}</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {business.description}
                            </p>
                            
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Our Services</h3>
                            <div className="flex flex-wrap gap-2">
                                {business.services && business.services.map((service, idx) => (
                                    <span key={idx} className="bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200">
                                        {service}
                                    </span>
                                ))}
                                {!business.services && <span className="text-slate-400 italic">No specific services listed.</span>}
                            </div>
                        </div>

                        {/* Gallery / Visuals Placeholder */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[1,2,3].map((img) => (
                                    <div key={img} className="bg-slate-100 rounded-xl aspect-square w-full relative overflow-hidden group">
                                         <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold bg-slate-200">
                                            IMAGE {img}
                                         </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Sidebar */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 border border-slate-100">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-slate-900">Contact Info</h3>
                                <button className="text-slate-400 hover:text-primary transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>
                            
                            <div className="space-y-5">
                                {business.phone && (
                                <a href={`tel:${business.phone}`} className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Phone</p>
                                        <p className="font-semibold text-slate-800 font-heading">{business.phone}</p>
                                    </div>
                                </a>
                                )}

                                {business.email && (
                                <a href={`mailto:${business.email}`} className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mr-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Email</p>
                                        <p className="font-semibold text-slate-800 font-heading">{business.email}</p>
                                    </div>
                                </a>
                                )}

                                {business.website && (
                                <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mr-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Website</p>
                                        <p className="font-semibold text-slate-800 font-heading truncate max-w-[180px]">{business.website}</p>
                                    </div>
                                </a>
                                )}

                                {business.hours && (
                                <div className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mr-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">Hours</p>
                                        <p className="font-semibold text-slate-800 font-heading text-sm">{business.hours}</p>
                                    </div>
                                </div>
                                )}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase text-center mb-4">Connect Socially</p>
                                <div className="flex justify-center gap-4">
                                    {business.social?.facebook && (
                                        <a href={business.social.facebook} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#1877F2] hover:text-white text-slate-600 flex items-center justify-center transition-all">
                                            <Facebook size={20} />
                                        </a>
                                    )}
                                    {business.social?.twitter && (
                                        <a href={business.social.twitter} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#1DA1F2] hover:text-white text-slate-600 flex items-center justify-center transition-all">
                                            <Twitter size={20} />
                                        </a>
                                    )}
                                    {business.social?.linkedin && (
                                        <a href={business.social.linkedin} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#0A66C2] hover:text-white text-slate-600 flex items-center justify-center transition-all">
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {business.social?.instagram && (
                                        <a href={business.social.instagram} className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#E4405F] hover:text-white text-slate-600 flex items-center justify-center transition-all">
                                            <Instagram size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Safety/Verified Badge */}
                        <div className="bg-emerald-50 rounded-xl p-4 flex items-start gap-3 border border-emerald-100">
                            <ShieldCheck className="text-emerald-600 w-6 h-6 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-emerald-900 text-sm">NACOC Verified Business</h4>
                                <p className="text-xs text-emerald-700 mt-1">This business has been verified by the Nepalese American Chamber of Commerce.</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;
