import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calculator, FileText, Briefcase, TrendingUp, DollarSign, PenTool } from 'lucide-react';

const servicesList = [
  {
    icon: Calculator,
    title: "Tax Preparation",
    description: "We go beyond simple data entry. We analyze your financial situation to maximize deductions and credits, ensuring you pay only what you owe.",
    features: ["Individual Tax Returns", "Business Tax Returns (LLC, Corp, Partnership)", "IRS Audit Support", "Tax Planning Strategy"]
  },
  {
    icon: FileText,
    title: "Bookkeeping Services",
    description: "Keep your business finances organized and up-to-date. Our bookkeeping services give you a clear picture of your financial health.",
    features: ["Monthly Reconciliation", "Financial Statements (P&L, Balance Sheet)", "Accounts Payable/Receivable", "QuickBooks Setup & Training"]
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Starting a new venture or looking to expand? We provide actionable insights to help you make informed business decisions.",
    features: ["Entity Selection & Setup", "Business Plan Development", "Cash Flow Analysis", "Growth Strategy"]
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    description: "Build a secure future with personalized financial roadmaps. We help you set goals and create a path to achieve them.",
    features: ["Retirement Planning", "Investment Strategy Review", "Education Savings", "Estate Planning Basics"]
  },
  {
    icon: DollarSign,
    title: "Payroll Services",
    description: "Ensure your employees are paid on time and correctly. we handle all payroll tax filings and compliance issues.",
    features: ["Direct Deposit Setup", "Payroll Tax Filing", "W-2 & 1099 Processing", "Employee Portal Access"]
  },
  {
    icon: PenTool,
    title: "Notary Public & More",
    description: "Convenient and authorized notary services for your important legal and financial documents.",
    features: ["Affidavits", "Contracts", "Loan Documents", "Real Estate Deeds"]
  }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | BMB Tax & Financial Service</title>
        <meta name="description" content="Comprehensive financial services including tax preparation, bookkeeping, payroll, and consulting in Euless, TX." />
      </Helmet>

      <section className="bg-theme-bg min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-gold-light/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-5xl font-heading font-medium mb-6 text-theme-text-main"
                >
                    Expertise You Can <span className="text-gold-DEFAULT italic">Count On.</span>
                </motion.h1>
                <p className="text-xl text-theme-text-body font-light">
                    Comprehensive financial solutions tailored to your unique needs. From personal taxes to corporate strategy.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesList.map((service, idx) => (
                    <motion.div 
                        key={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { 
                                    delay: idx * 0.1, duration: 0.5
                                } 
                            }
                        }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/30 transition-all duration-300 group shadow-soft hover:shadow-xl"
                    >
                        <div className="w-14 h-14 bg-theme-bg rounded-xl flex items-center justify-center text-gold-DEFAULT mb-6 group-hover:scale-110 transition-transform duration-300 border border-theme-border group-hover:border-gold-DEFAULT/50 shadow-sm">
                            <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="text-2xl font-heading font-medium text-theme-text-main mb-4">{service.title}</h3>
                        <p className="text-theme-text-body mb-6 leading-relaxed text-sm font-light">
                            {service.description}
                        </p>
                        
                        <ul className="space-y-3 border-t border-theme-border/60 pt-6">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm text-theme-text-body font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full mr-3 bg-gold-DEFAULT"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
