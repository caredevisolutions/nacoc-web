import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Search, MapPin, Globe, Phone, Plus, Edit, Trash2, X, Eye, EyeOff, Building, Mail, User, AlignLeft, ArrowUp, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Copied from MembershipCheckout.jsx
const CATEGORIES = [
  "Technology & Software", "Healthcare & Wellness", "Real Estate & Construction",
  "Finance & Insurance", "Retail & E-commerce", "Education & Training",
  "Marketing & Advertising", "Legal Services", "Non-Profit & Community",
  "Food & Beverage", "Consulting", "Manufacturing", "Other"
];

const CATEGORY_SUBCATEGORIES = {
    "Technology & Software": ["Software Development", "IT Services", "Digital Marketing", "Start-up", "Other"],
    "Healthcare & Wellness": ["Medical Practice", "Fitness Center", "Other"],
    "Real Estate & Construction": ["Residential", "Commercial", "Other"],
    "Finance & Insurance": ["Banking", "Investment", "Other"],
    "Retail & E-commerce": ["Clothing", "Electronics", "Other"],
    "Education & Training": ["School", "University", "Other"],
    "Marketing & Advertising": ["Digital Marketing", "PR", "Agency", "Other"],
    "Legal Services": ["Law Firm", "Notary", "Other"],
    "Non-Profit & Community": ["Charity", "Foundation", "Other"],
    "Food & Beverage": ["Restaurant", "Cafe", "Other"],
    "Consulting": ["Management Consulting", "Freelance", "Other"],
    "Manufacturing": ["Textiles", "Machinery", "Other"],
    "Other": ["Other"] 
};

const Directory = () => {
    const { businesses, addBusiness, updateBusiness, deleteBusiness } = useData();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Sorting
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

     const sortedBusinesses = React.useMemo(() => {
        let sortableItems = [...businesses];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                let aVal = a[sortConfig.key] || '';
                let bVal = b[sortConfig.key] || '';
                
                if (typeof aVal === 'string') aVal = aVal.toLowerCase();
                if (typeof bVal === 'string') bVal = bVal.toLowerCase();

                if (aVal < bVal) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aVal > bVal) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [businesses, sortConfig]);

    // Search Filter
    const filteredBusinesses = sortedBusinesses.filter(biz => 
        biz.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        biz.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        biz.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const SortIcon = ({ column }) => {
        if (sortConfig.key !== column) return <span className="ml-1 text-slate-300 opacity-50"><ArrowUp size={16} className="inline" /></span>;
        return (
            <span className="ml-1 text-primary inline-flex">
                {sortConfig.direction === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            </span>
        );
    };

    const handleAddClick = () => {
        setSelectedBusiness(null);
        setIsEditMode(true);
        setIsModalOpen(true);
    };

    const handleRowClick = (biz) => {
        setSelectedBusiness(biz);
        setIsEditMode(false);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this business?')) {
            deleteBusiness(id);
            setIsModalOpen(false);
        }
    };

    const handleSave = (formData) => {
        if (selectedBusiness && selectedBusiness.id) {
            updateBusiness(selectedBusiness.id, formData);
        } else {
            addBusiness(formData);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold dark:text-white text-slate-800">Business Directory</h1>
                    <p className="dark:text-slate-400 text-slate-500">Manage business listings and memberships.</p>
                </div>
                <button 
                    onClick={handleAddClick}
                    className="bg-primary text-white font-bold py-2 px-4 rounded-lg flex items-center shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                >
                    <Plus size={18} className="mr-2" /> Add Business
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border dark:border-slate-700 border-slate-100 shadow-sm">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search businesses by name, category, or keyword..." 
                        className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-slate-600 border-slate-200 bg-transparent dark:text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-slate-700 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700 border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left dark:text-slate-300 text-slate-600">
                        <thead className="bg-slate-50 dark:bg-slate-700/50 text-xs font-bold uppercase dark:text-slate-400 text-slate-500">
                            <tr>
                                <th onClick={() => handleSort('name')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Business Name <SortIcon column="name" />
                                </th>
                                <th onClick={() => handleSort('category')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Category <SortIcon column="category" />
                                </th>
                                <th onClick={() => handleSort('fullName')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Contact <SortIcon column="fullName" />
                                </th>
                                <th onClick={() => handleSort('featured')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Status <SortIcon column="featured" />
                                </th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {filteredBusinesses.map((biz) => (
                                <tr 
                                    key={biz.id} 
                                    onClick={() => handleRowClick(biz)}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-bold dark:text-white text-slate-900">{biz.name}</div>
                                        <div className="flex items-center text-xs text-slate-400 mt-1">
                                            <MapPin size={12} className="mr-1" /> {biz.city}, {biz.state}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300 text-slate-600 px-2 py-1 rounded text-xs font-bold">{biz.category}</span>
                                        {biz.subCategory && <div className="text-[10px] text-slate-400 mt-1">{biz.subCategory}</div>}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <User size={14} className="text-slate-400"/>
                                            <span className="truncate max-w-[150px]">{biz.fullName}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {biz.featured ? (
                                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Featured</span>
                                        ) : (
                                            <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">Standard</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                                        <button 
                                            onClick={() => handleRowClick(biz)}
                                            className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                                        >
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {filteredBusinesses.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-slate-500 dark:text-slate-400">
                                        No businesses found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <BusinessModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                business={selectedBusiness}
                isEditMode={isEditMode}
                setEditMode={setIsEditMode}
                onSave={handleSave}
                onDelete={handleDelete}
            />
        </div>
    );
};

const BusinessModal = ({ isOpen, onClose, business, isEditMode, setEditMode, onSave, onDelete }) => {
    const [showSensitive, setShowSensitive] = useState(false);
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        fullName: '',
        category: '',
        subCategory: '',
        description: '',
        primaryContact: '',
        email: '',
        phone: '',
        website: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        featured: false
    });

    // Populate form on open
    React.useEffect(() => {
        if (business) {
            setFormData({
                name: business.name || '',
                fullName: business.fullName || '',
                category: business.category || '',
                subCategory: business.subCategory || '',
                description: business.description || '',
                primaryContact: business.primaryContact || '',
                email: business.email || '',
                phone: business.phone || '',
                website: business.website || '',
                address: business.address || '',
                city: business.city || '',
                state: business.state || '',
                zip: business.zip || '',
                featured: business.featured || false
            });
            setShowSensitive(false); // Reset privacy toggle
        } else {
            // Defaults for new
            setFormData({
                name: '',
                fullName: '',
                category: '',
                subCategory: '',
                description: '',
                primaryContact: '',
                email: '',
                phone: '',
                website: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                featured: false
            });
            setShowSensitive(true); // Show everything when creating
        }
    }, [business, isOpen]);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData(prev => ({ ...prev, [e.target.name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                            <div>
                                <h2 className="text-xl font-bold dark:text-white text-slate-900">
                                    {isEditMode ? (business ? 'Edit Business' : 'Add New Business') : 'Business Details'}
                                </h2>
                                {!isEditMode && <div className="text-sm text-slate-500">View and manage listing details</div>}
                            </div>
                            <div className="flex items-center gap-2">
                                {!isEditMode && (
                                    <>
                                        <button 
                                            onClick={() => setEditMode(true)}
                                            className="p-2 text-slate-500 hover:text-primary hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                            title="Edit"
                                        >
                                            <Edit size={20} />
                                        </button>
                                        <button 
                                            onClick={() => onDelete(business.id)}
                                            className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2"></div>
                                    </>
                                )}
                                <button 
                                    onClick={onClose}
                                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {isEditMode ? (
                                <form id="business-form" onSubmit={handleSubmit} className="space-y-6">
                                    {/* 1. Identity */}
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2 mb-4">
                                            <Building size={16} /> Business Identity
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Business Name *</label>
                                                <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none" placeholder="e.g. Acme Corp" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Owner Full Name *</label>
                                                <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Full Name" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category *</label>
                                                <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none">
                                                    <option value="">Select Category</option>
                                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Sub-Category</label>
                                                <select name="subCategory" value={formData.subCategory} onChange={handleChange} disabled={!formData.category} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none disabled:opacity-50">
                                                    <option value="">Select Sub-Category</option>
                                                    {(CATEGORY_SUBCATEGORIES[formData.category] || []).map(sc => <option key={sc} value={sc}>{sc}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                                            <textarea name="description" rows="3" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Brief description of the business..."></textarea>
                                        </div>
                                    </div>

                                    {/* 2. Contact */}
                                    <div className="space-y-4 pt-4 border-t dark:border-slate-700">
                                        <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2 mb-4">
                                            <MapPin size={16} /> Location & Contact
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="md:col-span-2">
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Street Address</label>
                                                <input name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 md:col-span-2">
                                                <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none" />
                                                <input name="state" placeholder="State" value={formData.state} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none" />
                                                <input name="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                                                <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone</label>
                                                <input name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Website</label>
                                                <input name="website" placeholder="https://" value={formData.website} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white outline-none" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Featured?</label>
                                                <div className="flex items-center h-10">
                                                     <label className="flex items-center cursor-pointer">
                                                        <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="rounded border-slate-300 text-primary focus:ring-primary/20" />
                                                        <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">Mark as Featured Listing</span>
                                                     </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-8">
                                    {/* View Mode */}
                                    
                                    {/* Meta Header */}
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{formData.name}</h1>
                                                {formData.featured && <span className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">Featured</span>}
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                                <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded"><Building size={14}/> {formData.category}</span>
                                                {formData.subCategory && <span>• {formData.subCategory}</span>}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-slate-900 dark:text-white">{formData.fullName}</div>
                                            <div className="text-xs text-slate-500">Owner / Contact</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                        <h4 className="text-xs font-bold uppercase text-slate-400 mb-2 flex items-center gap-2"><AlignLeft size={14}/> About</h4>
                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                            {formData.description || "No description provided."}
                                        </p>
                                    </div>

                                    {/* Contact & Privacy */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4 border-b dark:border-slate-700 pb-2">
                                            <h4 className="text-sm font-bold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                                                <User size={16} /> Contact Information
                                            </h4>
                                            <button 
                                                onClick={() => setShowSensitive(!showSensitive)}
                                                className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${showSensitive ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                            >
                                                {showSensitive ? <><EyeOff size={14}/> Sensitive Info Visible</> : <><Eye size={14}/> Show Sensitive Info</>}
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <InfoCard label="Email Address" value={formData.email} icon={<Mail size={16}/>} isHidden={!showSensitive} />
                                            <InfoCard label="Phone Number" value={formData.phone} icon={<Phone size={16}/>} isHidden={!showSensitive} />
                                            <InfoCard label="Website" value={formData.website} icon={<Globe size={16}/>} isLink />
                                            <InfoCard label="Physical Address" value={`${formData.address}, ${formData.city} ${formData.state} ${formData.zip}`} icon={<MapPin size={16}/>} isHidden={!showSensitive} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
                            <button 
                                onClick={onClose}
                                className="px-6 py-2 rounded-xl text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {isEditMode ? 'Cancel' : 'Close'}
                            </button>
                            {isEditMode && (
                                <button 
                                    type="submit" 
                                    form="business-form"
                                    className="px-6 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-primary transition-colors shadow-lg shadow-primary/20"
                                >
                                    Save Changes
                                </button>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const InfoCard = ({ label, value, icon, isHidden, isLink }) => {
    if (!value) return null;
    
    return (
        <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg p-3 flex flex-col relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-1">
                <span className="text-slate-400">{icon}</span>
                <span className="text-xs font-bold uppercase text-slate-400">{label}</span>
            </div>
            
            <div className="relative">
                <div className={`font-medium dark:text-slate-200 ${isHidden ? 'blur-sm select-none' : ''}`}>
                    {isLink && !isHidden ? (
                        <a href={value.startsWith('http') ? value : `https://${value}`} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                            {value}
                        </a>
                    ) : (
                        value
                    )}
                </div>
                
                {isHidden && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-500 bg-slate-200/50 px-2 py-1 rounded">Hidden</span>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Directory;