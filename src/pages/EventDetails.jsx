import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowLeft, Share2 } from 'lucide-react';
import { api } from '../services/api';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      const data = await api.getEventById(id);
      setEvent(data);
      setLoading(false);
    };
    fetchEvent();
  }, [id]);

  if (loading) {
     return (
        <div className="bg-slate-50 min-h-screen pt-32 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Event not found</h2>
          <Link to="/events" className="text-primary hover:underline font-bold">Back to Events</Link>
        </div>
      </div>
    );
  }

  // Data Extraction (Tribe V1 API)
  const image = event.image?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
  
  const dateStr = event.start_date; 
  const dateObj = new Date(dateStr);
  const dateFormatted = dateObj.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const timeFormatted = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const isFutureEvent = dateObj > new Date();

  // Location logic
  let locationStr = 'Online';
  if (event.venue && typeof event.venue === 'object') {
      const parts = [];
      if (event.venue.venue) parts.push(event.venue.venue);
      if (event.venue.address) parts.push(event.venue.address);
      if (event.venue.city) parts.push(event.venue.city);
      if (event.venue.state) parts.push(event.venue.state);
      if (parts.length > 0) locationStr = parts.join(', ');
  } else if (typeof event.venue === 'string') {
      // In rare cases if API returns a string
      locationStr = event.venue;
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Hero Header with Glassmorphism */}
      <div className="relative bg-slate-900 min-h-[50vh] lg:min-h-[60vh] flex items-end pb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
             <img 
               src={image} 
               alt={event.title} 
               className="w-full h-full object-cover opacity-50 contrast-125 key-visual"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
             {/* Decorative gradients */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary-dark/30 to-transparent mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
           <Link to="/events" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider">
               <ArrowLeft size={16} className="mr-2" /> Back to Calendar
           </Link>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
           >
             <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-xl" dangerouslySetInnerHTML={{ __html: event.title }}>
             </h1>
             
             <div className="flex flex-wrap gap-4 text-white font-medium">
                <span className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors">
                    <Calendar size={18} className="mr-2 text-secondary" /> {dateFormatted}
                </span>
                <span className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors">
                    <MapPin size={18} className="mr-2 text-secondary" /> {locationStr}
                </span>
             </div>
           </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
            
           {/* Main Content (Order 2 on mobile, 1 on desktop) */}
           <div className="lg:w-2/3 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 prose prose-lg max-w-none text-slate-600 leading-relaxed font-body prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary prose-img:rounded-2xl"
              >
                  {/* Render content */}
                  {/* Note: Tribe V1 description often wraps content in basic HTML needs */}
                  <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </motion.div>
           </div>

           {/* Sidebar Actions (Order 1 on mobile, 2 on desktop for visual hierarchy of actions) */}
           <div className="lg:w-1/3 order-1 lg:order-2">
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
                 className="sticky top-32 space-y-6"
              >
                 <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Calendar size={120} className="text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-6 font-heading relative z-10">Event Information</h3>
                    
                    <div className="space-y-6 relative z-10">
                        <div className="flex items-start group">
                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-1">
                               <Calendar size={18} />
                           </div>
                           <div className="ml-4">
                              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Date</span>
                              <span className="block text-base font-bold text-slate-900">{dateFormatted}</span>
                           </div>
                        </div>
                        
                        <div className="flex items-start group">
                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-1">
                               <Clock size={18} />
                           </div>
                           <div className="ml-4">
                              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Time</span>
                              <span className="block text-base font-bold text-slate-900">{timeFormatted}</span>
                           </div>
                        </div>

                        <div className="flex items-start group">
                           <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-1">
                               <MapPin size={18} />
                           </div>
                           <div className="ml-4">
                              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Location</span>
                              <span className="block text-base font-bold text-slate-900">{locationStr}</span>
                           </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100 relative z-10">
                       {isFutureEvent ? (
                          <>
                           <button className="w-full py-4 bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary text-slate-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-secondary/30 transform hover:-translate-y-1">
                              Register Now
                           </button>
                           <p className="text-center text-xs text-slate-400 mt-4 font-medium">Limited spots available</p>
                          </>
                       ) : (
                          <div className="w-full py-4 bg-slate-100 text-slate-400 font-bold rounded-xl text-center cursor-not-allowed border border-slate-200">
                              Event Has Ended
                          </div>
                       )}
                    </div>
                 </div>

                 <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-lg text-white text-center">
                    <h4 className="font-bold text-lg mb-4">Share this Event</h4>
                    <div className="flex justify-center gap-4">
                        <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"><Share2 size={20} /></button>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
