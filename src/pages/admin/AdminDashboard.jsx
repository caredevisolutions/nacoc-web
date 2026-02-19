import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Users, CreditCard, Calendar, TrendingUp, MoreVertical, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const initialData = [
  { name: 'Jan', members: 40, events: 2 },
  { name: 'Feb', members: 30, events: 1 },
  { name: 'Mar', members: 20, events: 3 },
  { name: 'Apr', members: 27, events: 2 },
  { name: 'May', members: 18, events: 4 },
  { name: 'Jun', members: 23, events: 2 },
  { name: 'Jul', members: 34, events: 5 },
];

const pieData = [
  { name: 'Membership', value: 400 },
  { name: 'Events', value: 300 },
  { name: 'Donations', value: 300 },
  { name: 'Sponsorship', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const StatCard = ({ title, value, sub, icon: Icon, color, onClick, isHidden, onToggleHidden }) => (
    <div 
        className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all hover:shadow-lg cursor-pointer transform hover:-translate-y-1 relative group"
        onClick={onClick}
    >
        {onToggleHidden && (
            <button 
                onClick={(e) => { e.stopPropagation(); onToggleHidden(); }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 z-10 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {isHidden ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
        )}
        <div className="flex justify-between items-start">
            <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    {isHidden ? '****' : value}
                </h3>
                <p className={`text-xs font-bold ${sub.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {sub} <span className="text-slate-400 dark:text-slate-500 font-normal ml-1">from last period</span>
                </p>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                <Icon size={24} className="text-white" />
            </div>
        </div>
    </div>
);

const AdminDashboard = () => {
    const { members, events } = useData();
    const [timeRange, setTimeRange] = useState('This Year');
    const [chartData, setChartData] = useState(initialData);
    const [showRevenue, setShowRevenue] = useState(false); // Default hidden
    const [stats, setStats] = useState({
        members: 0,
        revenue: 0,
        events: 0,
        engagement: '0%'
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Mock data update based on filter
        // In a real app, this would query the API with date ranges.
        // Here we simulate different datasets for visual feedback.
        let mCount = members.length;
        let eCount = events.length;
        let rCount = members.reduce((acc, curr) => acc + (curr.paid ? curr.amount : 0), 0);

        if (timeRange === 'Last 7 Days') {
            setChartData([
                { name: 'Mon', members: 5, events: 0 },
                { name: 'Tue', members: 8, events: 1 },
                { name: 'Wed', members: 4, events: 0 },
                { name: 'Thu', members: 12, events: 1 },
                { name: 'Fri', members: 15, events: 0 },
                { name: 'Sat', members: 20, events: 2 },
                { name: 'Sun', members: 10, events: 0 },
            ]);
            // Simulate filtered counts
            setStats({
                members: Math.round(mCount * 0.1),
                revenue: `$${Math.round(rCount * 0.05).toLocaleString()}`,
                events: 2,
                engagement: '92%'
            });
        } else if (timeRange === 'Last 30 Days') {
             setChartData([
                { name: 'Wk 1', members: 45, events: 5 },
                { name: 'Wk 2', members: 38, events: 3 },
                { name: 'Wk 3', members: 60, events: 8 },
                { name: 'Wk 4', members: 52, events: 6 },
            ]);
             setStats({
                members: Math.round(mCount * 0.3),
                revenue: `$${Math.round(rCount * 0.25).toLocaleString()}`,
                events: 8,
                engagement: '88%'
            });
        } else {
            setChartData(initialData);
            setStats({
                members: mCount,
                revenue: `$${rCount.toLocaleString()}`,
                events: eCount,
                engagement: '84%'
            });
        }
    }, [timeRange, members, events]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Dashboard</h1>
                    <p className="text-slate-500 dark:text-slate-400">Overview of your organization's performance.</p>
                </div>
                <div className="flex gap-3">
                    <select 
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    >
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Year</option>
                    </select>
                    <button 
                        disabled
                        title="MFA setup needed"
                        className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 opacity-50 cursor-not-allowed"
                    >
                        Download Report
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    title="Total Members" 
                    value={stats.members} 
                    sub="+12%" 
                    icon={Users} 
                    color="bg-blue-500"
                    onClick={() => navigate('/admin/members')}
                />
                <StatCard 
                    title="Revenue" 
                    value={stats.revenue} 
                    sub="+8.2%" 
                    icon={CreditCard} 
                    color="bg-emerald-500" 
                    onClick={() => navigate('/admin/revenue')}
                    isHidden={!showRevenue}
                    onToggleHidden={() => setShowRevenue(!showRevenue)}
                />
                <StatCard 
                    title="Events Held" 
                    value={stats.events} 
                    sub="+4%" 
                    icon={Calendar} 
                    color="bg-purple-500" 
                    onClick={() => navigate('/admin/events')}
                />
                <StatCard 
                    title="Engagement" 
                    value={stats.engagement} 
                    sub="-2%" 
                    icon={TrendingUp} 
                    color="bg-orange-500" 
                    onClick={() => navigate('/admin/engagement')}
                />
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 dark:text-white">Growth Overview</h3>
                        <button className="text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 p-1 rounded"><MoreVertical size={20} /></button>
                    </div>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" opacity={0.5} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="members" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorMembers)" />
                                <Area type="monotone" dataKey="events" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorEvents)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-800 dark:text-white">Revenue Sources</h3>
                         <button className="text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 p-1 rounded"><MoreVertical size={20} /></button>
                    </div>
                     <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            
            {/* Recent Items Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                     <h3 className="font-bold text-slate-800 dark:text-white">Recent Registrations</h3>
                     <Link to="/admin/members" className="text-sm text-primary dark:text-primary-light font-bold hover:underline">View All</Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-700 text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Join Date</th>
                                <th className="px-6 py-4">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {members.slice(0, 5).map((member) => (
                                <tr 
                                    key={member.id} 
                                    onClick={() => navigate(`/admin/members/${member.id}`)}
                                    className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                                >
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">{member.name}</td>
                                    <td className="px-6 py-4">{member.tier}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                                            member.paid ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                                        }`}>
                                            {member.paid ? 'Paid' : 'Unpaid'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{member.joinDate}</td>
                                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-slate-200">${member.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
