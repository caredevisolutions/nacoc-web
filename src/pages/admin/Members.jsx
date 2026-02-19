import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Search, Filter, MoreVertical, Download, ArrowUp, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Members = () => {
    const { members } = useData();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedMembers = React.useMemo(() => {
        let sortableItems = [...members];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [members, sortConfig]);

    const filteredMembers = sortedMembers.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              member.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || member.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const handleRowClick = (member) => {
        navigate(`/admin/members/${member.id}`);
    };

    const SortIcon = ({ column }) => {
        if (sortConfig.key !== column) return <span className="ml-1 text-slate-300 opacity-50"><ArrowUp size={16} className="inline" /></span>;
        return (
            <span className="ml-1 text-primary inline-flex">
                {sortConfig.direction === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            </span>
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Members</h1>
                    <p className="text-slate-500 dark:text-slate-400">Manage your organization's membership.</p>
                </div>
                <button 
                    disabled
                    title="MFA setup needed"
                    className="bg-primary text-white font-bold py-2 px-4 rounded-lg flex items-center shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors opacity-50 cursor-not-allowed"
                >
                    <Download size={18} className="mr-2" /> Export CSV
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row gap-4 transition-colors">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search members..." 
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Filter size={20} className="text-slate-400" />
                    <select 
                        className="border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 outline-none focus:border-primary bg-white dark:bg-slate-700 transition-colors"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-700/50 text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                            <tr>
                                <th onClick={() => handleSort('name')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Name <SortIcon column="name" />
                                </th>
                                <th onClick={() => handleSort('status')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Status <SortIcon column="status" />
                                </th>
                                <th onClick={() => handleSort('tier')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Tier <SortIcon column="tier" />
                                </th>
                                <th onClick={() => handleSort('joinDate')} className="px-6 py-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors select-none">
                                    Join Date <SortIcon column="joinDate" />
                                </th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {filteredMembers.map((member) => (
                                <tr 
                                    key={member.id} 
                                    onClick={() => handleRowClick(member)}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900 dark:text-slate-200">{member.name}</div>
                                        <div className="text-xs text-slate-400">ID: #{member.id}</div>
                                    </td>
                                    
                                     <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                                            member.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 
                                            member.status === 'Pending' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                                        }`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold">{member.tier}</span>
                                    </td>
                                     <td className="px-6 py-4 text-sm">
                                        {member.joinDate}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors p-2">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredMembers.length === 0 && (
                     <div className="p-8 text-center text-slate-500 dark:text-slate-400">
                         No members found matching your filters.
                     </div>
                )}
            </div>
        </div>
    );
};

export default Members;
