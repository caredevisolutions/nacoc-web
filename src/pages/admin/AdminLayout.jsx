import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, FileText, Settings, LogOut, Menu, X, Moon, Sun, Search, MapPin, Mail, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAdmin, isLoading, logout } = useAuth();
    const { members, events, businesses } = useData();
    
    // UI State
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    
    // Search State
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState({ members: [], events: [], businesses: [] });
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    // Click outside to close search
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Search Logic
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults({ members: [], events: [], businesses: [] });
            return;
        }

        const query = searchQuery.toLowerCase();
        
        const foundMembers = members.filter(m => 
            m.name.toLowerCase().includes(query) || 
            m.email.toLowerCase().includes(query)
        ).slice(0, 3);

        const foundEvents = events.filter(e => 
            e.title.toLowerCase().includes(query)
        ).slice(0, 3);

        const foundBusinesses = businesses.filter(b => 
            b.name.toLowerCase().includes(query)
        ).slice(0, 3);

        setSearchResults({ members: foundMembers, events: foundEvents, businesses: foundBusinesses });
    }, [searchQuery, members, events, businesses]);

    useEffect(() => {
        if (!isLoading && !isAdmin) {
            navigate('/admin/login');
        }
    }, [isAdmin, isLoading, navigate]);

     useEffect(() => {
        // Initials Check
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setDarkMode(true);
        }
    };

    const handleSearchResultClick = (path) => {
        navigate(path);
        setSearchQuery('');
        setShowResults(false);
    };

    if (isLoading) return null; // Or a loading spinner
    if (!isAdmin) return null;

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
        { icon: Users, label: 'Members', path: '/admin/members' },
        { icon: Calendar, label: 'Events', path: '/admin/events' },
        { icon: FileText, label: 'Business', path: '/admin/directory' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
    ];

    const isActive = (path) => {
        if (location.pathname === path) return true;
        // Handle nested paths if necessary
        return false;
    };

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex text-slate-800 dark:text-slate-200 transition-colors">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 w-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 z-50 px-4 py-3 flex justify-between items-center transition-colors">
                <span className="font-bold text-xl text-primary dark:text-primary-light">NACOC <span className="text-slate-500 dark:text-slate-400 font-normal">Admin</span></span>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 dark:text-slate-300">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`
                fixed lg:sticky top-0 h-screen bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-40 transition-all duration-300 flex flex-col
                ${isSidebarOpen ? 'w-64' : 'w-20 hidden lg:flex'}
                ${isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
            `}>
                <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-700 transition-colors">
                    <span className={`font-bold text-xl text-primary dark:text-primary-light transition-opacity ${!isSidebarOpen && 'lg:hidden'}`}>
                        NACOC <span className="text-slate-500 dark:text-slate-400 font-normal">Admin</span>
                    </span>
                    <span className={`font-bold text-xl text-primary dark:text-primary-light ${isSidebarOpen && 'hidden'} mx-auto`}>N</span>
                </div>

                <nav className="flex-1 py-6 px-3 space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center px-3 py-3 rounded-lg transition-colors group relative
                                ${isActive(item.path) ? 'bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-light' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-200'}
                            `}
                        >
                            <item.icon size={20} className={isActive(item.path) ? 'text-primary dark:text-primary-light' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'} />
                            <span className={`ml-3 font-medium whitespace-nowrap transition-opacity ${!isSidebarOpen ? 'lg:opacity-0 lg:w-0 lg:hidden' : ''}`}>
                                {item.label}
                            </span>
                            
                            {!isSidebarOpen && (
                                <div className="absolute left-full ml-2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                                    {item.label}
                                </div>
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="p-3 border-t border-slate-100 dark:border-slate-700 transition-colors space-y-1">
                     <button 
                        onClick={toggleDarkMode}
                        className="flex items-center w-full px-3 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        <span className={`ml-3 font-medium ${!isSidebarOpen ? 'lg:hidden' : ''}`}>
                            {darkMode ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center w-full px-3 py-3 text-slate-500 dark:text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span className={`ml-3 font-medium ${!isSidebarOpen ? 'lg:hidden' : ''}`}>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 pt-16 lg:pt-0 overflow-y-auto">
                <header className="h-16 bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 hidden lg:flex items-center justify-between px-8 sticky top-0 z-30 transition-colors">
                    <div className="flex items-center gap-6 flex-1">
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        >
                            <Menu size={20} />
                        </button>

                        {/* Global Search */}
                        <div className="relative w-full max-w-md" ref={searchRef}>
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <Search size={18} />
                            </div>
                            <input 
                                type="text"
                                placeholder="Search members, events..."
                                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowResults(true);
                                }}
                                onFocus={() => setShowResults(true)}
                            />

                            {/* Search Results Dropdown */}
                            {showResults && searchQuery && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden z-[60]">
                                    
                                    {/* No Results */}
                                    {searchResults.members.length === 0 && searchResults.events.length === 0 && searchResults.businesses.length === 0 && (
                                        <div className="p-4 text-center text-slate-500 text-sm">
                                            No results found for "{searchQuery}"
                                        </div>
                                    )}

                                    {/* Members Section */}
                                    {searchResults.members.length > 0 && (
                                        <div className="border-b border-slate-100 dark:border-slate-700 last:border-0">
                                            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-700/30 text-xs font-bold text-slate-500 uppercase">
                                                Members
                                            </div>
                                            {searchResults.members.map(member => (
                                                <button
                                                    key={member.id}
                                                    onClick={() => handleSearchResultClick(`/admin/members/${member.id}`)}
                                                    className="w-full px-4 py-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs mr-3">
                                                        {member.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{member.name}</div>
                                                        <div className="text-xs text-slate-500 truncate">{member.email}</div>
                                                    </div>
                                                    <ChevronRight size={14} className="ml-auto text-slate-300" />
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Events Section */}
                                    {searchResults.events.length > 0 && (
                                        <div className="border-b border-slate-100 dark:border-slate-700 last:border-0">
                                            <div className="px-4 py-2 bg-slate-50 dark:bg-slate-700/30 text-xs font-bold text-slate-500 uppercase">
                                                Events
                                            </div>
                                            {searchResults.events.map(event => (
                                                <button
                                                    key={event.id}
                                                    onClick={() => handleSearchResultClick(`/admin/events`)} // Just link to events list for now
                                                    className="w-full px-4 py-3 flex items-center hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
                                                >
                                                    <Calendar size={16} className="text-slate-400 mr-3" />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{event.title}</div>
                                                        <div className="text-xs text-slate-500">{event.date}</div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light font-bold text-sm">
                            A
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Admin User</span>
                    </div>
                </header>

                <div className="p-4 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
