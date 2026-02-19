import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Users, UserPlus, Heart, MessageCircle, Share2, Activity, Calendar, Trophy, ArrowLeft, TrendingUp, X, ChevronRight } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const activityData = [
  { name: 'Mon', visits: 120, actions: 45 },
  { name: 'Tue', visits: 150, actions: 55 },
  { name: 'Wed', visits: 180, actions: 70 },
  { name: 'Thu', visits: 140, actions: 40 },
  { name: 'Fri', visits: 200, actions: 85 },
  { name: 'Sat', visits: 110, actions: 35 },
  { name: 'Sun', visits: 90, actions: 25 },
];

const eventData = [
  { name: 'Jan', attendees: 65 },
  { name: 'Feb', attendees: 59 },
  { name: 'Mar', attendees: 80 },
  { name: 'Apr', attendees: 81 },
  { name: 'May', attendees: 56 },
  { name: 'Jun', attendees: 95 },
];

const Engagement = () => {
    const { members } = useData();
    const navigate = useNavigate();
    const [isNewMembersModalOpen, setIsNewMembersModalOpen] = useState(false);

    // Filter "New" members (e.g., joined in 2024 or 2025 for demo purposes, or just take last 5)
    // Assuming data is sorted by datedesc or we just take a slice
    const newMembers = members.slice(0, 8); 

    // Simulation for "Champions" - taking random members
    const champions = [
        { ...members[0], score: 2490, rank: 1 },
        { ...members[2], score: 2150, rank: 2 },
        { ...members[4], score: 1880, rank: 3 },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Engagement & Analytics</h1>
                        <p className="text-slate-500 dark:text-slate-400">Track member interaction and community growth.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Activity size={16} className="mr-2" /> High Activity
                    </span>
                </div>
            </div>

            {/* Scorecards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-500/20">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Heart size={24} />
                        </div>
                        <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">+12%</span>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-3xl font-bold">84%</h3>
                        <p className="text-purple-100 text-sm font-medium">Retention Rate</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <MessageCircle size={64} className="text-blue-500" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase mb-1">Comm. Interactions</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">3,402</h3>
                        <div className="flex items-center text-sm text-green-500 font-bold">
                            <TrendingUpIcon /> <span className="ml-1">5.4% this week</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Calendar size={64} className="text-orange-500" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase mb-1">Event Attendance</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">452</h3>
                        <div className="flex items-center text-sm text-green-500 font-bold">
                            <TrendingUpIcon /> <span className="ml-1">Higher than avg</span>
                        </div>
                    </div>
                </div>

                <div 
                    onClick={() => setIsNewMembersModalOpen(true)}
                    className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <UserPlus size={64} className="text-emerald-500" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase mb-1">New Members</p>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{newMembers.length}</h3>
                        <div className="flex items-center text-sm text-slate-400 text-emerald-500">
                             <span className="font-bold">View List</span> <ChevronRight size={16} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                            <Activity size={18} className="text-primary"/> Activity Log
                        </h3>
                    </div>
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={activityData}>
                                <defs>
                                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" opacity={0.5} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="visits" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
                                <Area type="monotone" dataKey="actions" stroke="#EC4899" strokeWidth={3} fillOpacity={0} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-6">Top Event Participation</h3>
                    <div className="h-80">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={eventData} layout="vertical">
                                <desc></desc>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={30} tick={{fill: '#94a3b8'}} />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                                <Bar dataKey="attendees" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Top Engaged List */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
                <h3 className="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <Trophy size={18} className="text-yellow-500" /> Community Champions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {champions.map((champ) => (
                        <Link 
                            to={`/admin/members/${champ.id}`}
                            key={champ.id} 
                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 hover:shadow-md hover:bg-white dark:hover:bg-slate-700 transition-all group"
                        >
                             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                                {champ.name.charAt(0)}
                             </div>
                             <div>
                                <h4 className="font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">{champ.name}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{champ.score} points • {champ.tier}</p>
                             </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* New Members Modal */}
            <AnimatePresence>
                {isNewMembersModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]"
                        >
                            <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="font-bold text-slate-800 dark:text-white">Newest Members</h3>
                                <button onClick={() => setIsNewMembersModalOpen(false)} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="overflow-y-auto p-2">
                                {newMembers.map(member => (
                                    <Link 
                                        to={`/admin/members/${member.id}`}
                                        key={member.id}
                                        className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light font-bold">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                                                {member.name}
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Joined {member.joinDate}</div>
                                        </div>
                                        <ChevronRight size={16} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                ))}
                            </div>
                            <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-center">
                                <Link to="/admin/members" className="text-sm font-bold text-primary hover:underline">View All Members</Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const TrendingUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

export default Engagement;