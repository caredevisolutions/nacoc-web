import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Membership = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (plan) => {
    // Exclude the icon component as it cannot be serialized in navigation state
    const { icon, ...planDetails } = plan;
    navigate('/membership/checkout', { state: { plan: planDetails } });
  };

  const tiers = [
    {
      name: 'General Member',
      icon: <Zap className="w-6 h-6" />,
      price: '$100',
      period: '/ year',
      description: 'Perfect for individuals and small startups looking to connect.',
      features: ['Directory Listing', 'Free Access to Mixers', 'Newsletter Subscription', 'Member Badge'],
      popular: false,
      color: 'from-blue-400 to-cyan-500',
      shadow: 'shadow-blue-200'
    },
    {
      name: 'Corporate Member',
      icon: <Crown className="w-6 h-6" />,
      price: '$500',
      period: '/ year',
      description: 'Ideal for established businesses seeking visibility and growth.',
      features: ['Priority Directory Listing', 'Free Access to Mixers', 'Newsletter Subscription', 'Logo on Website Homepage', 'Event Sponsorship Discount', 'Job Posting Privileges'],
      popular: true,
      color: 'from-primary to-primary-light',
      shadow: 'shadow-primary/30'
    },
    {
      name: 'Life Member',
      icon: <Award className="w-6 h-6" />,
      price: '$1,000',
      period: ' one time',
      description: 'For committed leaders who want to leave a lasting legacy.',
      features: ['Lifetime Directory Listing', 'VIP Access to All Events', 'Newsletter Subscription', 'Recognition Plaque', 'Voting Rights', 'Advisory Board Eligibility'],
      popular: false,
      color: 'from-secondary to-yellow-600',
      shadow: 'shadow-yellow-200'
    }
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-slate-50 min-h-screen">
      {/* Dynamic Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-primary mb-6"
          >
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             Join the Network
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight"
          >
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Invest in your business and your community. Select the tier that best fits your growth strategy.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-3xl p-1 shadow-2xl ${tier.popular ? 'z-10 scale-105 shadow-primary/20' : 'shadow-slate-100'} flex flex-col h-full`}
            >
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 -mt-4 text-center">
                    <div className="inline-block bg-gradient-to-r from-primary to-primary-light text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                        Most Popular
                    </div>
                </div>
              )}
              
              <div className="bg-white rounded-[20px] p-8 flex flex-col h-full overflow-hidden relative">
                 {/* Decorative Gradient Top */}
                 <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
                 
                 <div className="mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${tier.color} text-white shadow-lg`}>
                        {tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">{tier.name}</h3>
                    <p className="text-slate-500 text-sm h-10 leading-relaxed">{tier.description}</p>
                 </div>

                 <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                    <span className="text-slate-400 text-sm font-medium ml-2">{tier.period}</span>
                 </div>

                 <div className="space-y-4 mb-8 flex-grow">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">What's Included</p>
                    <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                                <div className={`mt-0.5 p-0.5 rounded-full mr-3 flex-shrink-0 ${tier.popular ? 'text-primary bg-primary/10' : 'text-slate-400 bg-slate-100'}`}>
                                    <Check size={12} strokeWidth={4} />
                                </div>
                                <span className="text-slate-600 text-sm font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 <button 
                   onClick={() => handleChoosePlan(tier)}
                   className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center group ${tier.popular ? 'bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/25' : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'}`}
                  >
                    Choose Plan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center pb-20 max-w-5xl mx-auto"
        >
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-10">Proudly Supported By</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-xl lg:text-2xl font-bold text-slate-400 group-hover:text-primary transition-colors">Ranger Wholesale</span>
                <span className="h-1 w-12 bg-slate-200 group-hover:bg-primary rounded-full transition-colors"></span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-xl lg:text-2xl font-bold text-slate-400 group-hover:text-primary transition-colors">IBC</span>
                <span className="h-1 w-12 bg-slate-200 group-hover:bg-primary rounded-full transition-colors"></span>
             </div>
             <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-xl lg:text-2xl font-bold text-slate-400 group-hover:text-primary transition-colors">MMB Live Solution</span>
                <span className="h-1 w-12 bg-slate-200 group-hover:bg-primary rounded-full transition-colors"></span>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Membership;
