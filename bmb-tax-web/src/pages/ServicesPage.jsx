import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Briefcase, TrendingUp, DollarSign, PenTool, ArrowRight, Sparkles } from 'lucide-react';

const servicesList = [
  {
    icon: Calculator,
    title: "Tax Preparation",
    description: "We go beyond simple data entry. We analyze your financial situation to maximize deductions and credits, ensuring you pay only what you owe.",
    features: ["Individual Tax Returns", "Business Tax Returns (LLC, Corp, Partnership)", "IRS Audit Support", "Tax Planning Strategy"],
    iconColor: 'text-gold-DEFAULT', iconBg: 'bg-gold-DEFAULT/10', iconBorder: 'border-gold-DEFAULT/20', accent: 'from-gold-DEFAULT/5 to-gold-DEFAULT/0',
  },
  {
    icon: FileText,
    title: "Bookkeeping Services",
    description: "Keep your business finances organized and up-to-date. Our bookkeeping services give you a clear picture of your financial health.",
    features: ["Monthly Reconciliation", "Financial Statements (P&L, Balance Sheet)", "Accounts Payable/Receivable", "QuickBooks Setup & Training"],
    iconColor: 'text-accent-indigo', iconBg: 'bg-accent-indigo/10', iconBorder: 'border-accent-indigo/20', accent: 'from-accent-indigo/5 to-accent-indigo/0',
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Starting a new venture or looking to expand? We provide actionable insights to help you make informed business decisions.",
    features: ["Entity Selection & Setup", "Business Plan Development", "Cash Flow Analysis", "Growth Strategy"],
    iconColor: 'text-accent-emerald', iconBg: 'bg-accent-emerald/10', iconBorder: 'border-accent-emerald/20', accent: 'from-accent-emerald/5 to-accent-emerald/0',
  },
  {
    icon: TrendingUp,
    title: "Financial Planning",
    description: "Build a secure future with personalized financial roadmaps. We help you set goals and create a path to achieve them.",
    features: ["Retirement Planning", "Investment Strategy Review", "Education Savings", "Estate Planning Basics"],
    iconColor: 'text-accent-violet', iconBg: 'bg-accent-violet/10', iconBorder: 'border-accent-violet/20', accent: 'from-accent-violet/5 to-accent-violet/0',
  },
  {
    icon: DollarSign,
    title: "Payroll Services",
    description: "Ensure your employees are paid on time and correctly. We handle all payroll tax filings and compliance issues.",
    features: ["Direct Deposit Setup", "Payroll Tax Filing", "W-2 & 1099 Processing", "Employee Portal Access"],
    iconColor: 'text-accent-sky', iconBg: 'bg-accent-sky/10', iconBorder: 'border-accent-sky/20', accent: 'from-accent-sky/5 to-accent-sky/0',
  },
  {
    icon: PenTool,
    title: "Notary Public & More",
    description: "Convenient and authorized notary services for your important legal and financial documents.",
    features: ["Affidavits", "Contracts", "Loan Documents", "Real Estate Deeds"],
    iconColor: 'text-accent-rose', iconBg: 'bg-accent-rose/10', iconBorder: 'border-accent-rose/20', accent: 'from-accent-rose/5 to-accent-rose/0',
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | BMB Tax & Financial Service</title>
        <meta name="description" content="Comprehensive financial services including tax preparation, bookkeeping, payroll, and consulting in Euless, TX." />
      </Helmet>

      <section className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-theme-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-3/5 bg-gold-DEFAULT/10 blur-[150px] rounded-full pointer-events-none z-[1]"></div>
        <div className="absolute bottom-0 left-0 w-2/5 h-2/5 bg-accent-indigo/8 blur-[120px] rounded-full pointer-events-none z-[1]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-DEFAULT/10 border border-gold-DEFAULT/25 text-gold-DEFAULT font-bold tracking-widest uppercase text-[10px] mb-6"
            >
              <Sparkles size={11} /> Our Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-medium mb-6 text-theme-text-main"
            >
              Expertise You Can <span className="text-gold-DEFAULT italic">Count On.</span>
            </motion.h1>
            <p className="text-xl text-theme-text-body font-light">
              Comprehensive financial solutions tailored to your unique needs. From personal taxes to corporate strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.08, duration: 0.5 } },
                }}
                whileHover={{ y: -6 }}
                className="bg-theme-surface p-8 rounded-2xl border border-theme-border hover:border-gold-DEFAULT/40 transition-all duration-300 group hover:shadow-gold relative overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`w-14 h-14 ${service.iconBg} ${service.iconBorder} border rounded-xl flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <service.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-heading font-medium text-theme-text-main mb-3 relative z-10 group-hover:text-gold-DEFAULT transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-theme-text-body mb-6 leading-relaxed text-sm font-light relative z-10">
                  {service.description}
                </p>
                <ul className="space-y-2.5 border-t border-theme-border pt-5 relative z-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-theme-text-body font-medium">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${service.iconColor.replace('text-', 'bg-')}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold-DEFAULT text-white px-10 py-4 rounded-full font-bold shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all"
            >
              Book a Free Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
