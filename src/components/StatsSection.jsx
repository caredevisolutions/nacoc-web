import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2019', members: 120 },
  { name: '2020', members: 180 },
  { name: '2021', members: 250 },
  { name: '2022', members: 310 },
  { name: '2023', members: 450 },
  { name: '2024', members: 600 },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-surface-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl mix-blend-multiply filter"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Stats Text & Counters */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary-dark mb-8 leading-tight">
              Driving Economic <br/><span className="text-accent relative inline-block">
                Growth & Prosperity
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="10" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-slate-600 mb-12 text-lg lg:text-xl font-body leading-relaxed max-w-lg">
              Our community is flourishing. We take pride in the numbers that represent our 
              collective success and the expanding Nepalese-American business ecosystem in DFW.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="group">
                <div className="text-5xl font-bold text-secondary mb-2 font-display">
                  <CountUp end={600} duration={2.5} />+
                </div>
                <div className="h-1 w-12 bg-primary mb-3 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs">Active Members</div>
              </div>
              <div className="group">
                 <div className="text-5xl font-bold text-secondary mb-2 font-display">
                  <CountUp end={50} duration={2.5} />+
                </div>
                <div className="h-1 w-12 bg-accent mb-3 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs">Events Hosted</div>
              </div>
              <div className="group">
                 <div className="text-5xl font-bold text-secondary mb-2 font-display">
                  <CountUp end={10} duration={2.5} />
                </div>
                <div className="h-1 w-12 bg-secondary mb-3 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs">Years of Service</div>
              </div>
              <div className="group">
                 <div className="text-5xl font-bold text-secondary mb-2 font-display">
                  $<CountUp end={5} duration={2.5} />M+
                </div>
                <div className="h-1 w-12 bg-green-600 mb-3 group-hover:w-full transition-all duration-500 ease-out"></div>
                <div className="text-slate-500 font-semibold uppercase tracking-wider text-xs">Revenue Generated</div>
              </div>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div 
            className="h-[400px] w-full bg-white rounded-3xl p-8 shadow-2xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             {/* Decorative blob on card */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>

             <div className="flex justify-between items-center mb-8 relative z-10">
                <div>
                   <h3 className="text-xl font-bold text-primary-dark">Membership Growth</h3>
                   <p className="text-sm text-slate-400">Steady year-over-year increase</p>
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold ring-1 ring-green-100">+24% YOY</div>
             </div>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F2C59" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0F2C59" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '16px' }}
                  itemStyle={{ color: '#0F2C59', fontWeight: 'bold' }}
                  cursor={{ stroke: '#0F2C59', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="members" 
                  stroke="#0F2C59" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorMembers)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
