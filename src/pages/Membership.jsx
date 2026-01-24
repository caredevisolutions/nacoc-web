import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Membership = () => {
  const tiers = [
    {
      name: 'General Member',
      price: '$100',
      period: '/ year',
      description: 'Perfect for individuals and small startups looking to connect.',
      features: ['Directory Listing', 'Free Access to Mixers', 'Newsletter Subscription', 'Member Badge'],
      popular: false
    },
    {
      name: 'Corporate Member',
      price: '$500',
      period: '/ year',
      description: 'Ideal for established businesses seeking visibility and growth.',
      features: ['Priority Directory Listing', 'Free Access to Mixers', 'Newsletter Subscription', 'Logo on Website Homepage', 'Event Sponsorship Discount', 'Job Posting Privileges'],
      popular: true
    },
    {
      name: 'Life Member',
      price: '$1,000',
      period: ' one time',
      description: 'For committed leaders who want to leave a lasting legacy.',
      features: ['Lifetime Directory Listing', 'VIP Access to All Events', 'Newsletter Subscription', 'Recognition Plaque', 'Voting Rights', 'Advisory Board Eligibility'],
      popular: false
    }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Join the Chamber</span>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-secondary mt-2 mb-6">Choose Your Membership</h1>
          <p className="text-gray-600 text-lg">
            Invest in your business and your community. Join the premier network of Nepalese American businesses and professionals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${tier.popular ? 'border-2 border-primary transform md:-translate-y-4' : 'border border-gray-100'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-secondary mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-6 h-10">{tier.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-secondary">{tier.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{tier.period}</span>
                </div>
                
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${tier.popular ? 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20' : 'bg-gray-100 hover:bg-gray-200 text-secondary'}`}>
                  Choose Plan
                </button>
              </div>

              <div className="p-8 bg-surface-50 flex-grow border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">WHAT'S INCLUDED</p>
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`p-1 rounded-full mr-3 flex-shrink-0 ${tier.popular ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-500'}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ or Trust Section */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Trusted by over 600+ businesses in the DFW Metroplex</p>
          <div className="flex justify-center space-x-2 text-yellow-400">
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
            <Star fill="currentColor" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
