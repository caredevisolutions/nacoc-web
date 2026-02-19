import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';
import { DollarSign, TrendingUp, CreditCard, Download, Calendar, Filter, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialData = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Feb', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Apr', revenue: 2780, expenses: 3908 },
  { name: 'May', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
  { name: 'Jul', revenue: 3490, expenses: 4300 },
];

const pieData = [
  { name: 'Membership Dues', value: 45 },
  { name: 'Event Tickets', value: 25 },
  { name: 'Sponsorships', value: 20 },
  { name: 'Donations', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Revenue = () => {
    const [timeRange, setTimeRange] = useState('This Year');
    const [chartData, setChartData] = useState(initialData);
    const [metrics, setMetrics] = useState({ revenue: '$124,500', invoices: '18', income: '$86,900' });
    const navigate = useNavigate();

    useEffect(() => {
        if (timeRange === 'This Month') {
            setChartData([
                { name: 'Wk 1', revenue: 900, expenses: 400 },
                { name: 'Wk 2', revenue: 1200, expenses: 800 },
                { name: 'Wk 3', revenue: 1100, expenses: 600 },
                { name: 'Wk 4', revenue: 1500, expenses: 900 },
            ]);
            setMetrics({ revenue: '$4,700', invoices: '3', income: '$2,000' });
        } else if (timeRange === 'Last Quarter') {
             setChartData([
                { name: 'Oct', revenue: 3800, expenses: 2100 },
                { name: 'Nov', revenue: 4200, expenses: 2400 },
                { name: 'Dec', revenue: 5100, expenses: 3200 },
            ]);
            setMetrics({ revenue: '$13,100', invoices: '5', income: '$5,400' });
        } else {
            setChartData(initialData);
            setMetrics({ revenue: '$124,500', invoices: '18', income: '$86,900' });
        }
    }, [timeRange]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Revenue & Finance</h1>
                        <p className="text-slate-500 dark:text-slate-400">Financial overview and reports.</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <select 
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm rounded-lg px-4 py-2 outline-none"
                    >
                        <option>This Month</option>
                        <option>Last Quarter</option>
                        <option>This Year</option>
                    </select>
                    <button 
                        disabled
                        title="MFA setup needed"
                        className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold py-2 px-4 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors opacity-50 cursor-not-allowed"
                    >
                        <Download size={18} className="mr-2" /> Export
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">Total Revenue</p>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{metrics.revenue}</h3>
                        </div>
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-600">
                            <DollarSign size={24} />
                        </div>
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="text-emerald-500 font-bold flex items-center mr-2"><TrendingUp size={14} className="mr-1"/> +12.5%</span>
                        <span className="text-slate-400">vs last period</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">Outstanding Invoices</p>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">$4,250</h3>
                        </div>
                        <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-orange-600">
                            <CreditCard size={24} />
                        </div>
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="text-slate-500 font-bold mr-2">{metrics.invoices} Invoices</span>
                        <span className="text-slate-400">pending payment</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase">Net Income</p>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{metrics.income}</h3>
                        </div>
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                            <TrendingUp size={24} />
                        </div>
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="text-emerald-500 font-bold flex items-center mr-2"><TrendingUp size={14} className="mr-1"/> +8.2%</span>
                        <span className="text-slate-400">margin</span>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-6">Revenue vs Expenses</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" opacity={0.5} />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#10B981" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
                                <Area type="monotone" dataKey="expenses" stroke="#EF4444" fillOpacity={1} fill="url(#colorExpense)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-6">Income Sources</h3>
                    <div className="h-64 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    innerRadius={60}
                                    outerRadius={80}
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
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none mb-8">
                            <p className="text-xs text-slate-400 uppercase font-bold">Total</p>
                            <p className="text-xl font-bold text-slate-800 dark:text-white">$124k</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <h3 className="font-bold text-slate-800 dark:text-white">Recent Transactions</h3>
                    <button className="text-primary text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
                        <thead className="bg-slate-50 dark:bg-slate-700/50 text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Transaction ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {[1,2,3,4,5].map((i) => (
                                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs">#TRX-8829{i}</td>
                                    <td className="px-6 py-4">Feb 0{i}, 2026</td>
                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-200">Membership Renewal - Yearly</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-bold">Revenue</span></td>
                                    <td className="px-6 py-4 text-right font-bold text-emerald-600">+$250.00</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Revenue;