import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
        <Helmet>
            <title>Contact Us | BMB Tax & Financial Service</title>
        </Helmet>
        <div className="pt-20 bg-theme-bg min-h-screen">
            <Contact />
        </div>
    </>
  );
};
export default ContactPage;
