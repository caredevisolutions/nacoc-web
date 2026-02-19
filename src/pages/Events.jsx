import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Events = () => {
  const { events } = useData();

  // In a real app, loading might come from initial fetch. 
  // checking if data is ready.
  if (!events) {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="bg-primary-dark relative overflow-hidden py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-4xl lg:text-5xl font-heading font-bold mb-4"
          >
            Events Calendar
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Connect and grow with our community events.
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {events.length === 0 ? (
             <div className="text-center py-20">
                <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-500">No events found</h3>
             </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              // Parse date from "August 9, 2025" or "2025-08-09"
              const dateObj = new Date(event.date);
              const month = isNaN(dateObj.getTime()) ? event.date.split(' ')[0].substring(0,3) : dateObj.toLocaleDateString('en-US', { month: 'short' });
              const day = isNaN(dateObj.getTime()) ? event.date.split(' ')[1].replace(',','') : dateObj.toLocaleDateString('en-US', { day: 'numeric' });

              const imageUrl = event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
              
              return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}
              >
                <div className="relative overflow-hidden h-64">
                   <img 
                     src={imageUrl} 
                     alt={event.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'; }}
                   />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-md">
                      <span className="block text-xs font-bold text-slate-500 uppercase">{month}</span>
                      <span className="block text-xl font-bold text-slate-900">{day}</span>
                   </div>
                </div>
                
                <div className="p-8 flex flex-col justify-between flex-1">
                   <div>
                      {event.time && (
                          <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wider mb-2">
                            <Clock size={14} className="mr-1" /> {event.time}
                          </div>
                      )}
                      <h3 className="font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors text-2xl">
                        {event.title}
                      </h3>
                      <div className="flex items-start text-slate-500 mb-4 text-sm font-medium">
                         <MapPin size={16} className="mr-2 mt-0.5 text-slate-400 shrink-0" />
                         <span>{event.location || 'TBA'}</span>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                   </div>
                   
                   <Link 
                     to={`/events/${event.slug || event.id}`}
                     className="text-slate-900 font-bold text-sm inline-flex items-center hover:text-primary transition-colors group/btn"
                   >
                      Event Details <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </motion.div>
              );
            })}
          </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
