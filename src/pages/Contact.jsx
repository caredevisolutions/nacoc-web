import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="bg-gray-100 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-secondary">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full text-primary mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Address</h3>
                  <p className="text-gray-600">2016 W. Grauwyler Rd,<br/>Irving, TX, 75061</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full text-primary mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 214 995 0137</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-50 p-3 rounded-full text-primary mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@nacoc.org</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-bold text-gray-800 mb-4">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-secondary">Send Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="Inquiry about membership" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded transition-colors flex items-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
