import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { 
    User, Mail, Phone, Calendar, DollarSign, Award, ArrowLeft, 
    Briefcase, MapPin, Globe, Activity, Clock, Shield, AlertCircle, Plus
} from 'lucide-react';

const MemberDetails = () => {
    const { id } = useParams();
    const { members, businesses } = useData();
    const [activeTab, setActiveTab] = useState('overview');

    // Find the member
    const member = members.find(m => m.id.toString() === id);
    
    // Find associated business (mock logic - assuming checking by name simply for demo)
    // In real app, member object would have businessId
    const associatedBusiness = businesses.find(b => 
        b.name.toLowerCase().includes(member?.name.split(' ')[0].toLowerCase()) || 
        member?.company?.toLowerCase() === b.name.toLowerCase()
    );

    if (!member) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Member Not Found</h2>
                <Link to="/admin/members" className="text-primary hover:underline flex items-center">
                    <ArrowLeft className="mr-2" size={20} /> Back to Members
                </Link>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'business', label: 'Business Profile' },
        { id: 'engagement', label: 'Engagement' },
        { id: 'billing', label: 'Billing & History' },
    ];

    return (
        <div className="space-y-6">
            {/* Header / Breadcrumb */}
            <div className="flex items-center gap-4">
                <Link 
                    to="/admin/members" 
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                >
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                        {member.name}
                        <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide border ${
                             member.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800' :
                             member.status === 'Pending' ? 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800' :
                             'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                        }`}>
                            {member.status}
                        </span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Member ID: #{member.id} • Joined {member.joinDate}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Column: Profile Card */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary dark:text-primary-light flex items-center justify-center text-3xl font-bold mb-4 border-4 border-slate-50 dark:border-slate-700 shadow-sm">
                                {member.name.charAt(0)}
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">{member.tier} Member</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30">
                                <Mail className="text-slate-400 mr-3 shrink-0" size={18} />
                                <div className="overflow-hidden">
                                     <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                                     <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate" title={member.email}>{member.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30">
                                <Phone className="text-slate-400 mr-3 shrink-0" size={18} />
                                <div>
                                     <p className="text-xs font-bold text-slate-500 uppercase">Phone</p>
                                     <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{member.phone || 'N/A'}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30">
                                <MapPin className="text-slate-400 mr-3 shrink-0" size={18} />
                                <div>
                                     <p className="text-xs font-bold text-slate-500 uppercase">Location</p>
                                     <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{member.location || 'Dallas, TX'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 gap-3">
                             <button className="flex items-center justify-center p-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                Reset Password
                             </button>
                             <button className="flex items-center justify-center p-2 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                                Edit Profile
                             </button>
                        </div>
                    </div>

                    {/* Quick Stats */}
                     <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                            <Shield size={18} className="mr-2 text-primary" /> Compliance
                        </h3>
                         <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Dues Status</span>
                                <span className={`font-bold ${member.paid ? 'text-green-600' : 'text-red-500'}`}>{member.paid ? 'Paid' : 'Overdue'}</span>
                            </div>
                             <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Membership Expiry</span>
                                <span className="font-medium text-slate-800 dark:text-slate-200">Dec 31, 2026</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Verified</span>
                                <span className="font-medium text-emerald-500">Yes</span>
                            </div>
                         </div>
                     </div>
                </div>

                {/* Right Column: Content Tabs */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Tabs Navigation */}
                    <div className="flex overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-700 gap-1 custom-scrollbar">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-4 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors
                                    ${activeTab === tab.id 
                                        ? 'border-primary text-primary dark:text-primary-light' 
                                        : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300'}
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-100 dark:border-slate-700 min-h-[400px]">
                        
                        {activeTab === 'overview' && (
                            <div className="space-y-8 animate-fadeIn">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">About Member</h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {member.bio || "No biography provided. This member has been part of the NST community since " + member.joinDate + ". They are currently mapped to the " + member.tier + " tier plan."}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Briefcase className="text-blue-500" size={20} />
                                            <h4 className="font-bold text-slate-800 dark:text-white">Professional Info</h4>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-1"><span className="font-semibold">Company:</span> {member.company || associatedBusiness?.name || 'N/A'}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400"><span className="font-semibold">Role:</span> {member.role || 'Member/Owner'}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Activity className="text-orange-500" size={20} />
                                            <h4 className="font-bold text-slate-800 dark:text-white">Recent Activity</h4>
                                        </div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Last login: 2 days ago</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Updated profile: 1 week ago</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'business' && (
                            <div className="animate-fadeIn">
                                {associatedBusiness ? (
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            {associatedBusiness.image && (
                                                <img src={associatedBusiness.image} alt={associatedBusiness.name} className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                                            )}
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{associatedBusiness.name}</h3>
                                                <div className="flex gap-2 mt-2">
                                                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs font-bold text-slate-600 dark:text-slate-300">
                                                        {associatedBusiness.category}
                                                    </span>
                                                    {associatedBusiness.featured && (
                                                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded text-xs font-bold">
                                                            Verified Business
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl">
                                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Website</p>
                                                <a href={`https://${associatedBusiness.website}`} target="_blank" rel="noreferrer" className="text-primary hover:underline font-medium flex items-center">
                                                    <Globe size={14} className="mr-1"/> {associatedBusiness.website}
                                                </a>
                                            </div>
                                            <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl">
                                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Business Address</p>
                                                <p className="text-slate-800 dark:text-slate-300 font-medium flex items-center">
                                                    <MapPin size={14} className="mr-1 text-slate-400"/> {associatedBusiness.address}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 className="font-bold text-slate-800 dark:text-white mb-2">Description</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {associatedBusiness.description}
                                            </p>
                                        </div>

                                        <div className="flex justify-end pt-4">
                                            <Link to={`/admin/directory`} className="text-primary font-bold text-sm hover:underline">
                                                Manage in Directory &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <Briefcase className="mx-auto text-slate-300 dark:text-slate-600 mb-4" size={48} />
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">No Business Profile Linked</h3>
                                        <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
                                            This member has not listed a business in the directory yet.
                                        </p>
                                        <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition-colors">
                                            Create Business Listing
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'engagement' && (
                            <div className="animate-fadeIn space-y-8">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-800/30">
                                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</div>
                                        <div className="text-xs font-bold text-purple-400 uppercase">Events Attended</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">98%</div>
                                        <div className="text-xs font-bold text-blue-400 uppercase">Profile Completion</div>
                                    </div>
                                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800/30">
                                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">High</div>
                                        <div className="text-xs font-bold text-orange-400 uppercase">Engagement Score</div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-4">Recent Event Attendance</h3>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-lg transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-slate-500">
                                                        <Calendar size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">Annual Business Summit 202{5-i}</p>
                                                        <p className="text-xs text-slate-500">August 1{i}, 202{5-i}</p>
                                                    </div>
                                                </div>
                                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Checked In</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'billing' && (
                            <div className="animate-fadeIn">
                                <div className="mb-8">
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-4">Billing Profiles</h3>
                                    <div className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-4 border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
                                                <DollarSign size={24} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 dark:text-white">Annual Membership</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">Next billing on Dec 31, 2025</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-slate-800 dark:text-white">${member.amount}/yr</p>
                                            <p className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded inline-block mt-1">Active</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-slate-800 dark:text-white">Invoice History</h3>
                                    <button 
                                        onClick={() => alert('Invoice creation functionality coming soon!')}
                                        className="bg-primary text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark transition-all flex items-center gap-2"
                                    >
                                        <Plus size={16} /> Create Invoice
                                    </button>
                                </div>
                                
                                <div className="border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden">
                                     <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 font-bold uppercase text-xs">
                                            <tr>
                                                <th className="px-4 py-3">Invoice</th>
                                                <th className="px-4 py-3">Date</th>
                                                <th className="px-4 py-3">Amount</th>
                                                <th className="px-4 py-3 text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-200">#INV-2024-001</td>
                                                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Jan 15, 2025</td>
                                                <td className="px-4 py-3 font-bold text-slate-800 dark:text-slate-200">${member.amount}</td>
                                                <td className="px-4 py-3 text-right">
                                                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Paid</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-200">#INV-2023-089</td>
                                                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Jan 15, 2024</td>
                                                <td className="px-4 py-3 font-bold text-slate-800 dark:text-slate-200">$150.00</td>
                                                 <td className="px-4 py-3 text-right">
                                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded">Archived</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                     </table>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberDetails;
