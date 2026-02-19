import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Search, Filter, CalendarPlus, MapPin, Users, Calendar, X, Save, Trash2, Clock, Image as ImageIcon, Type } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EventModal = ({ event, onClose, onSave, onDelete }) => {
    const [formData, setFormData] = useState(event || {
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        image: '',
        type: 'General'
    });
    const [previewImage, setPreviewImage] = useState(event?.image || '');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Create a fake URL for preview
            const url = URL.createObjectURL(file);
            setPreviewImage(url);
            setFormData(prev => ({ ...prev, image: url })); // In a real app, you'd upload here
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl my-8 overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row max-h-[90vh]"
            >
                {/* Visual Side (Left/Top) */}
                <div className="md:w-1/3 bg-slate-900 relative p-8 flex flex-col justify-between overflow-hidden">
                     <div className="absolute inset-0 opacity-40">
                        {previewImage ? (
                             <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                             <div className="w-full h-full bg-gradient-to-br from-primary to-purple-900" />
                        )}
                     </div>
                     <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-2">{formData.title || 'New Event'}</h2>
                        <div className="flex flex-col gap-2 text-white/80 text-sm">
                            {formData.date && <span className="flex items-center"><Calendar size={14} className="mr-2" /> {formData.date}</span>}
                            {formData.location && <span className="flex items-center"><MapPin size={14} className="mr-2" /> {formData.location}</span>}
                        </div>
                     </div>
                     <div className="relative z-10 pt-10">
                         <label className="cursor-pointer group block">
                            <span className="text-xs font-bold text-white/60 uppercase mb-2 block group-hover:text-white transition-colors">Event Cover Image</span>
                            <div className="border-2 border-dashed border-white/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/50 transition-all">
                                <div className="flex flex-col items-center gap-2 text-white/80">
                                    <ImageIcon size={24} />
                                    <span className="text-xs font-bold">Upload Photo</span>
                                </div>
                                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                            </div>
                         </label>
                     </div>
                </div>

                {/* Form Side (Right/Bottom) */}
                <div className="md:w-2/3 flex flex-col h-full bg-white dark:bg-slate-800">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Event Details</h2>
                            <p className="text-xs text-slate-400">Fill in the information below.</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-800 dark:text-white font-medium"
                                    placeholder="Annual Summer Gala"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-800 dark:text-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-800 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Location / Venue</label>
                                <div className="relative">
                                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-800 dark:text-white"
                                        placeholder="Enter full address"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-slate-800 dark:text-white resize-none"
                                    placeholder="Write about the event agenda, speakers, and reason to join..."
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                             {event ? (
                                <button 
                                    type="button"
                                    onClick={() => onDelete(event.id)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-lg font-bold transition-colors flex items-center text-sm"
                                >
                                    <Trash2 size={16} className="mr-2" /> Delete Event
                                </button>
                             ) : <div></div>}
                            
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl font-bold transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center"
                                >
                                    <Save size={18} className="mr-2" /> {event ? 'Save Changes' : 'Publish Event'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

const AdminEvents = () => {
    const { events, addEvent, updateEvent, deleteEvent } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    const filteredEvents = events.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleCreateClick = () => {
        setEditingEvent(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (event) => {
        setEditingEvent(event);
        setIsModalOpen(true);
    };

    const handleSave = (formData) => {
        if (editingEvent) {
            updateEvent(formData);
        } else {
            addEvent(formData);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            deleteEvent(id);
            setIsModalOpen(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Events</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage upcoming and past events.</p>
                </div>
                <button 
                    onClick={handleCreateClick}
                    className="bg-primary text-white font-bold py-2 px-4 rounded-lg flex items-center shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                >
                    <CalendarPlus size={18} className="mr-2" /> Create Event
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search events..." 
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                {filteredEvents.map((event) => {
                     // Normalize date for display
                     const dateObj = new Date(event.date);
                     const displayDate = isNaN(dateObj.getTime()) ? event.date : dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

                     return (
                    <motion.div 
                        key={event.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                         className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-md transition-all group"
                    >
                        <div className="h-2 bg-primary"></div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                                    {event.status || 'Event'}
                                </span>
                                <div className="text-xs font-bold text-slate-400">{event.category || 'General'}</div>
                            </div>
                            
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight line-clamp-2 h-14">{event.title}</h3>
                            
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                    <Calendar size={16} className="mr-2 text-primary" />
                                    {displayDate}
                                </div>
                                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                    <Clock size={16} className="mr-2 text-primary" />
                                    {event.time || 'TBA'}
                                </div>
                                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                    <MapPin size={16} className="mr-2 text-primary" />
                                    <span className="truncate">{event.location}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleEditClick(event)}
                                className="w-full py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary-light hover:border-primary dark:hover:border-primary-light transition-all text-sm"
                            >
                                Manage Event
                            </button>
                        </div>
                    </motion.div>
                )})}
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <EventModal 
                        event={editingEvent} 
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleSave}
                        onDelete={handleDelete}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminEvents;
