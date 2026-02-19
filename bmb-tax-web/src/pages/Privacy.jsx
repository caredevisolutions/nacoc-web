import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | BMB Tax & Financial Service</title>
      </Helmet>
      <div className="bg-theme-bg min-h-screen pt-32 pb-24 text-theme-text-body">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-heading font-medium mb-8 text-theme-text-main">Privacy Policy</h1>
            <div className="prose lg:prose-lg prose-headings:text-theme-text-main prose-p:text-theme-text-body prose-li:text-theme-text-body prose-strong:text-theme-text-main prose-a:text-gold-DEFAULT hover:prose-a:text-gold-dark">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>We are committed to protecting your personal information and your right to privacy.</p>
                
                <h3>1. Information We Collect</h3>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.</p>
                <ul>
                    <li>Personal identification (Name, address, SSN/EIN)</li>
                    <li>Financial documents (W-2s, 1099s, bank statements)</li>
                    <li>Contact information (Email, phone number)</li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <p>Your information is used solely for the purpose of:</p>
                <ul>
                    <li>Preparing and filing tax returns</li>
                    <li>Providing bookkeeping and payroll services</li>
                    <li>Communicating with you regarding your financial matters</li>
                </ul>

                <h3>3. Data Security</h3>
                <p>We employ industry-standard security measures, including bank-grade encryption and secure file storage systems, to protect your data from unauthorized access.</p>
                
                <h3>4. Contact Us</h3>
                <p>If you have any questions about this policy, please contact us at (254) 350-0233.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
