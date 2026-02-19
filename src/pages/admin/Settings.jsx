import React, { useState, useEffect } from 'react';
import { Moon, Sun, Bell, Shield, Globe, Activity, Save, User, Lock, Clock, FileText, ChevronRight, Mail, Key, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_AUDIT_LOGS = [
    { id: 1, action: "User Login", user: "Admin", details: "Logged in successfully", time: "2 mins ago", type: "info" },
    { id: 2, action: "Create Event", user: "Admin", details: "Created 'Annual Gala' event", time: "1 hour ago", type: "success" },
    { id: 3, action: "Update Member", user: "Admin", details: "Updated profile for 'John Doe'", time: "3 hours ago", type: "warning" },
    { id: 4, action: "Delete Member", user: "Admin", details: "Deleted member 'Test Account'", time: "Yesterday", type: "danger" },
    { id: 5, action: "Settings Change", user: "Admin", details: "Enabled Dark Mode", time: "Yesterday", type: "info" },
    { id: 6, action: "Export Data", user: "Admin", details: "Exported member list to CSV", time: "2 days ago", type: "info" },
];

const Settings = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifs, setEmailNotifs] = useState(true);
    const [siteName, setSiteName] = useState('NACOC Admin Portal');

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const tabs = [
        { id: 'general', label: 'General', icon: Globe, description: 'Site preferences and display' },
        { id: 'profile', label: 'My Profile', icon: User, description: 'Personal details and password' },
        { id: 'notifications', label: 'Notifications', icon: Bell, description: 'Email and push alerts' },
        { id: 'security', label: 'Security', icon: Shield, description: '2FA and login activity' },
        { id: 'audit', label: 'Audit Logs', icon: Activity, description: 'System track record' },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Settings</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your workspace preferences and view logs.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Check that we use a vertical layout for tabs on large screens */}
                <div className="w-full lg:w-64 flex-shrink-0 space-y-1">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group
                                ${activeTab === tab.id 
                                    ? 'bg-white dark:bg-slate-800 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 font-bold' 
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <tab.icon size={18} className={activeTab === tab.id ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'} />
                                <span>{tab.label}</span>
                            </div>
                            {activeTab === tab.id && <ChevronRight size={16} className="text-primary hidden lg:block" />}
                        </button>
                    ))}
                </div>

                <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm min-h-[500px] p-8">
                    
                    {/* General Tab */}
                    {activeTab === 'general' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-2xl">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Site Preferences</h3>
                                <p className="text-sm text-slate-500 mb-6">Customize how the admin portal looks and feels.</p>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Site Name</label>
                                        <input 
                                            value={siteName} 
                                            onChange={(e) => setSiteName(e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none transition-colors" 
                                        />
                                    </div>
                                    
                                    <div className="flex items-center justify-between p-4 border border-slate-100 dark:border-slate-700 rounded-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                                                {darkMode ? <Moon size={20} className="text-slate-700 dark:text-white" /> : <Sun size={20} className="text-orange-500" />}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-700 dark:text-slate-200">Dark Mode</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">Switch between light and dark themes</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={toggleDarkMode}
                                            className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-primary' : 'bg-slate-300'}`}
                                        >
                                            <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${darkMode ? 'left-7' : 'left-1'}`}></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                                <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                                    <Save size={18} /> Save Changes
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Profile Tab */}
                     {activeTab === 'profile' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-2xl">
                            <div className="flex items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                                    A
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Admin User</h3>
                                    <p className="text-slate-500">Super Administrator</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                                    <input defaultValue="Admin" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                                    <input defaultValue="User" className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white outline-none" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                        <input defaultValue="admin@nacoc.org" className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white outline-none" />
                                    </div>
                                </div>
                            </div>

                             <div className="pt-6 border-t border-slate-100 dark:border-slate-700">
                                <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-primary/30 transition-all">
                                    Update Profile
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Notifications Tab */}
                    {activeTab === 'notifications' && (
                         <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-2xl">
                             <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/30 rounded-xl border border-slate-100 dark:border-slate-700">
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-slate-200">Email Notifications</p>
                                    <p className="text-sm text-slate-500">Receive weekly summaries and important alerts</p>
                                </div>
                                <button 
                                    onClick={() => setEmailNotifs(!emailNotifs)}
                                    className={`w-12 h-6 rounded-full transition-colors relative ${emailNotifs ? 'bg-primary' : 'bg-slate-300'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${emailNotifs ? 'left-7' : 'left-1'}`}></div>
                                </button>
                            </div>
                         </motion.div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
                             <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 p-4 rounded-xl flex gap-4">
                                <Shield className="text-yellow-600 dark:text-yellow-500 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200">Security Recommendation</h4>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                                        Enable Two-Factor Authentication (2FA) to add an extra layer of security to your account.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                                        <Key size={20} className="text-slate-600 dark:text-slate-300"/>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-slate-700 dark:text-slate-200">Change Password</p>
                                        <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-slate-400" />
                            </button>
                        </motion.div>
                    )}

                    {/* Audit Tab */}
                    {activeTab === 'audit' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Activity</h3>
                                <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
                                    <FileText size={14}/> Export Logs
                                </button>
                            </div>

                            <div className="rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 font-bold uppercase text-xs">
                                        <tr>
                                            <th className="px-6 py-3">Action</th>
                                            <th className="px-6 py-3">User</th>
                                            <th className="px-6 py-3">Details</th>
                                            <th className="px-6 py-3 text-right">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                        {MOCK_AUDIT_LOGS.map((log) => (
                                            <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full 
                                                            ${log.type === 'success' ? 'bg-green-500' : 
                                                              log.type === 'warning' ? 'bg-orange-500' : 
                                                              log.type === 'danger' ? 'bg-red-500' : 'bg-blue-500'}`} 
                                                        />
                                                        {log.action}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                                    <User size={14} /> {log.user}
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{log.details}</td>
                                                <td className="px-6 py-4 text-right text-slate-400 gap-1">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <Clock size={12}/> {log.time}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
