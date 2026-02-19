import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | BMB Tax & Financial Service</title>
      </Helmet>
      <div className="bg-black-rich min-h-screen pt-32 pb-24 text-neutral-300">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-heading font-bold mb-8 text-white">Terms of Service</h1>
            <div className="prose lg:prose-lg prose-headings:text-white prose-p:text-neutral-300 prose-li:text-neutral-300 prose-strong:text-gold-DEFAULT">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>Welcome to BMB Tax and Financial Service. By using our services, you agree to the following terms and conditions.</p>
                
                <h3>1. Services</h3>
                <p>We provide tax preparation, bookkeeping, payroll, and financial consulting services. All services are performed in accordance with professional standards and applicable laws.</p>
                
                <h3>2. Client Responsibilities</h3>
                <p>Clients are responsible for providing accurate and complete information. BMB Tax and Financial Service is not liable for errors resulting from incomplete or incorrect information provided by the client.</p>

                <h3>3. Payment</h3>
                <p>Fees for services are due upon completion unless otherwise agreed upon. We reserve the right to withhold completed documents until payment is received.</p>

                <h3>4. Limitation of Liability</h3>
                <p>Our liability is limited to the fees paid for the specific service in question. We are not liable for consequential or indirect damages.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Terms;