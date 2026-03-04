import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Check, User, Mail, Phone, MapPin, CreditCard, Loader2, Briefcase, Users, ShieldCheck, ArrowLeft } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your actual Stripe publishable key via Environment Variable
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_TYooMQauvdEDq54NiTphI7jx');

const CATEGORIES = [
  "Technology & Software", "Healthcare & Wellness", "Real Estate & Construction",
  "Finance & Insurance", "Retail & E-commerce", "Education & Training",
  "Marketing & Advertising", "Legal Services", "Non-Profit & Community",
  "Food & Beverage", "Consulting", "Manufacturing", "Other"
];

const CATEGORY_SUBCATEGORIES = {
  "Technology & Software": ["Software Development", "IT Services", "Digital Marketing", "Start-up", "Other"],
  "Healthcare & Wellness": ["Medical Practice", "Fitness Center", "Other"],
  "Real Estate & Construction": ["Residential", "Commercial", "Other"],
  "Finance & Insurance": ["Banking", "Investment", "Other"],
  "Retail & E-commerce": ["Clothing", "Electronics", "Other"],
  "Education & Training": ["School", "University", "Other"],
  "Marketing & Advertising": ["Digital Marketing", "PR", "Agency", "Other"],
  "Legal Services": ["Law Firm", "Notary", "Other"],
  "Non-Profit & Community": ["Charity", "Foundation", "Other"],
  "Food & Beverage": ["Restaurant", "Cafe", "Other"],
  "Consulting": ["Management Consulting", "Freelance", "Other"],
  "Manufacturing": ["Textiles", "Machinery", "Other"],
  "Other": ["Other"] 
};

const SOCIAL_PLATFORMS = ["LinkedIn", "Facebook", "Instagram", "Twitter / X", "YouTube", "TikTok", "Pinterest", "Other"];

const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    return Math.round(num * 100); // cents
};

const CheckoutContent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    
    // Get plan from navigation state or fallback
    const plan = location.state?.plan;

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});
    const [clientSecret, setClientSecret] = useState('');
    
    // Use environment variable for API URL in production
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4242';

    // Redirect if no plan selected
    useEffect(() => {
        if (!plan) {
            navigate('/membership');
        } else {
            // Create PaymentIntent as soon as the page loads
            const amount = parsePrice(plan.price);
            fetch(`${API_URL}/create-payment-intent`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, currency: 'usd' }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret))
                .catch((err) => console.error('Error fetching client secret:', err));
        }
    }, [plan, navigate]);
    
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        businessAddress: '',
        city: '',
        state: '',
        zip: '',
        category: '',
        subCategory: '',
        primaryContact: '',
        email: '',
        phone: '',
        website: '',
        description: '',
        socialLinks: [{ platform: 'LinkedIn', url: '' }],
        logo: null
    });

    if (!plan) return null;

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName || formData.fullName.length < 3) errors.fullName = "Full name must be at least 3 characters";
        if (!formData.businessName || formData.businessName.length < 2) errors.businessName = "Business name is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email address";
        if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) errors.phone = "Phone number must be at least 10 digits";
        if (!formData.businessAddress) errors.businessAddress = "Address is required";
        
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        
        // Clear specific error when user types
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: null }));
        }

        setFormData(prev => {
            if (type === 'file') {
                return { ...prev, [name]: files[0] };
            }
            if (name === 'category') {
                return { ...prev, category: value, subCategory: '' };
            }
            return { ...prev, [name]: value };
        });
    };

    const handleAddSocial = () => {
        setFormData(prev => ({
            ...prev,
            socialLinks: [...prev.socialLinks, { platform: 'LinkedIn', url: '' }]
        }));
    };

    const handleRemoveSocial = (index) => {
        setFormData(prev => ({
            ...prev,
            socialLinks: prev.socialLinks.filter((_, i) => i !== index)
        }));
    };

    const handleSocialChange = (index, field, value) => {
        setFormData(prev => {
            const updatedLinks = prev.socialLinks.map((link, i) => {
                if (i === index) {
                    return { ...link, [field]: value };
                }
                return link;
            });
            return { ...prev, socialLinks: updatedLinks };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            // Scroll to top or first error could be good, but for now just stop
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (!stripe || !elements || !clientSecret) {
            setError("Payment system initializing... Please wait.");
            return;
        }

        setLoading(true);
        setError(null);

        const cardElement = elements.getElement(CardElement);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    address: {
                        line1: formData.businessAddress,
                        city: formData.city,
                        state: formData.state,
                        postal_code: formData.zip,
                    },
                },
            },
        });

        if (result.error) {
            setError(result.error.message);
            setLoading(false);
        } else {
             if (result.paymentIntent.status === 'succeeded') {
                // Save membership data to backend
                try {
                    await fetch(`${API_URL}/confirm-membership`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            paymentIntentId: result.paymentIntent.id,
                            registrationData: stripFiles(formData) // Helper to remove file objects before sending JSON
                        })
                    });
                } catch (err) {
                    console.error('Error saving membership:', err);
                    // Continue to success screen as payment was successful
                }
                
                setTimeout(() => {
                    setSuccess(true);
                    setLoading(false);
                }, 1500);
             }
        }
    };

    // Helper to strip File objects as they can't be JSON stringified directly
    const stripFiles = (data) => {
        const { logo, ...rest } = data;
        // If logo needs to be uploaded, it should happen via S3 signed URL separately. 
        // For now, we skip sending the File object to the JSON API.
        return rest;
    };

    if (success) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-fade-in-up">
                    <Check size={48} strokeWidth={3} />
                </div>
                <h1 className="text-4xl font-heading font-bold text-slate-900 mb-4">Welcome Aboard!</h1>
                <p className="text-xl text-slate-600 mb-8 max-w-lg">
                    Your <span className="font-bold text-primary">{plan.name}</span> membership has been activated successfully. Check your email for confirmation.
                </p>
                <div className="flex gap-4">
                    <Link to="/" className="bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-800 transition-colors">
                        Go Home
                    </Link>
                    <Link to="/directory" className="bg-white border border-slate-200 text-slate-900 font-bold py-3 px-8 rounded-xl hover:bg-slate-50 transition-colors">
                        View Directory
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-6 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link to="/membership" className="inline-flex items-center text-slate-500 hover:text-primary font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plans
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    
                    {/* Left Column: Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">Registration Details</h2>
                            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
                                
                                {/* 1. Identity */}
                                <div>
                                    <h4 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">
                                        <Briefcase className="w-4 h-4 mr-2 text-primary" /> Business Info
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="businessName" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Business Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Briefcase className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
                                                    <input 
                                                        id="businessName"
                                                        type="text" 
                                                        name="businessName" 
                                                        required 
                                                        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border ${fieldErrors.businessName ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-primary'} rounded-xl text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300`}
                                                        placeholder="Business Name"
                                                        onChange={handleChange} 
                                                        value={formData.businessName} 
                                                    />
                                                </div>
                                                {fieldErrors.businessName && <span className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.businessName}</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="fullName" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
                                                    <input 
                                                        id="fullName"
                                                        type="text" 
                                                        name="fullName" 
                                                        required 
                                                        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border ${fieldErrors.fullName ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-primary'} rounded-xl text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300`}
                                                        placeholder="Full Name"
                                                        onChange={handleChange} 
                                                        value={formData.fullName} 
                                                    />
                                                </div>
                                                {fieldErrors.fullName && <span className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.fullName}</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="category" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Category / Industry <span className="text-red-500">*</span>
                                                </label>
                                                <input 
                                                    id="category"
                                                    list="category-list"
                                                    type="text" 
                                                    name="category" 
                                                    required 
                                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                    placeholder="Select or type..." 
                                                    onChange={handleChange} 
                                                    value={formData.category} 
                                                />
                                                <datalist id="category-list">
                                                    {CATEGORIES.map((cat, i) => <option key={i} value={cat} />)}
                                                </datalist>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="subCategory" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Sub-category <span className="text-red-500">*</span>
                                                </label>
                                                <input 
                                                    id="subCategory"
                                                    list="subcategory-list"
                                                    type="text" 
                                                    name="subCategory" 
                                                    required 
                                                    disabled={!formData.category}
                                                    className={`w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300 ${!formData.category ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    placeholder={formData.category ? "Select or type..." : "Select Category first"} 
                                                    onChange={handleChange} 
                                                    value={formData.subCategory} 
                                                />
                                                <datalist id="subcategory-list">
                                                    {(CATEGORY_SUBCATEGORIES[formData.category] || []).map((sub, i) => <option key={i} value={sub} />)}
                                                </datalist>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="relative group">
                                            <label htmlFor="description" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                Brief Description <span className="text-red-500">*</span>
                                            </label>
                                            <textarea 
                                                id="description"
                                                name="description" 
                                                required 
                                                rows="3" 
                                                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white resize-none transition-all duration-300"
                                                onChange={handleChange} 
                                                value={formData.description}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Contact */}
                                <div className="pt-4">
                                    <h4 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                                        <MapPin className="w-4 h-4 mr-2 text-primary" /> Contact & Location
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="primaryContact" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Primary Contact <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
                                                    <input 
                                                        id="primaryContact"
                                                        type="text" 
                                                        name="primaryContact" 
                                                        required 
                                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                        placeholder="Primary Contact"
                                                        onChange={handleChange} 
                                                        value={formData.primaryContact} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="email" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
                                                    <input 
                                                        id="email"
                                                        type="email" 
                                                        name="email" 
                                                        required 
                                                        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border ${fieldErrors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-primary'} rounded-xl text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300`}
                                                        placeholder="Email"
                                                        onChange={handleChange} 
                                                        value={formData.email} 
                                                    />
                                                </div>
                                                {fieldErrors.email && <span className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.email}</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="phone" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
                                                    <input 
                                                        id="phone"
                                                        type="tel" 
                                                        name="phone" 
                                                        required 
                                                        className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border ${fieldErrors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-primary'} rounded-xl text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300`}
                                                        placeholder="(numbers only)" 
                                                        onChange={handleChange} 
                                                        value={formData.phone} 
                                                    />
                                                </div>
                                                {fieldErrors.phone && <span className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.phone}</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="relative group">
                                                <label htmlFor="website" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                    Website
                                                </label>
                                                <input 
                                                    id="website"
                                                    type="url" 
                                                    name="website" 
                                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                    placeholder="https://" 
                                                    onChange={handleChange} 
                                                    value={formData.website} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="relative group mb-4">
                                            <label htmlFor="businessAddress" className="absolute -top-2.5 left-3 bg-white px-2 text-[10px] font-bold text-slate-500 uppercase transition-colors group-focus-within:text-primary z-10">
                                                Address <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
                                                <input 
                                                    id="businessAddress"
                                                    type="text" 
                                                    name="businessAddress" 
                                                    required 
                                                    className={`w-full pl-12 pr-4 py-3.5 bg-slate-50 border ${fieldErrors.businessAddress ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-primary'} rounded-xl text-sm font-medium text-slate-800 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all duration-300`}
                                                    placeholder="Street Address" 
                                                    onChange={handleChange} 
                                                    value={formData.businessAddress} 
                                                />
                                            </div>
                                            {fieldErrors.businessAddress && <span className="text-xs text-red-500 mt-1 ml-1">{fieldErrors.businessAddress}</span>}
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="relative">
                                                <input 
                                                    id="city"
                                                    type="text" 
                                                    name="city" 
                                                    required 
                                                    aria-label="City"
                                                    placeholder="City" 
                                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                    onChange={handleChange} 
                                                    value={formData.city} 
                                                />
                                            </div>
                                            <div className="relative">
                                                <input 
                                                    id="state"
                                                    type="text" 
                                                    name="state" 
                                                    required 
                                                    aria-label="State"
                                                    placeholder="State" 
                                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                    onChange={handleChange} 
                                                    value={formData.state} 
                                                />
                                            </div>
                                            <div className="relative">
                                                <input 
                                                    id="zip"
                                                    type="text" 
                                                    name="zip" 
                                                    required 
                                                    aria-label="Zip Code"
                                                    placeholder="Zip" 
                                                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                    onChange={handleChange} 
                                                    value={formData.zip} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Upload & Social */}
                                <div className="pt-4">
                                    <h4 className="flex items-center text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                                        <Users className="w-4 h-4 mr-2 text-primary" /> Digital Presence
                                    </h4>
                                    <div className="mb-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h4 className="text-xs font-bold text-slate-500 uppercase">Social Media Profiles</h4>
                                            <button 
                                                type="button" 
                                                onClick={handleAddSocial}
                                                className="text-xs font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-md"
                                            >
                                                <span>+</span> Add Another
                                            </button>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            {formData.socialLinks.map((link, index) => (
                                                <div key={index} className="flex gap-2">
                                                    <div className="w-1/3 min-w-[120px]">
                                                        <div className="relative group">
                                                            <div className="relative">
                                                                <select
                                                                    value={link.platform}
                                                                    onChange={(e) => handleSocialChange(index, "platform", e.target.value)}
                                                                    className="w-full pl-3 pr-8 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                                                                >
                                                                    {SOCIAL_PLATFORMS.map(platform => (
                                                                        <option key={platform} value={platform}>{platform}</option>
                                                                    ))}
                                                                </select>
                                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 relative group">
                                                        <input 
                                                            type="url" 
                                                            value={link.url}
                                                            onChange={(e) => handleSocialChange(index, "url", e.target.value)}
                                                            placeholder="Profile URL" 
                                                            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300"
                                                        />
                                                        {formData.socialLinks.length > 1 && (
                                                            <button 
                                                                type="button" 
                                                                onClick={() => handleRemoveSocial(index)}
                                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-red-500 transition-colors p-1"
                                                                title="Remove"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-3">Business Logo (Optional)</label>
                                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-slate-300 border-dashed rounded-2xl cursor-pointer bg-slate-50 hover:bg-white hover:border-primary hover:shadow-lg transition-all duration-300 group">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                                                    <Users className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                                </div>
                                                <p className="mb-2 text-sm text-slate-500"><span className="font-bold text-primary">Click to upload</span> or drag and drop</p>
                                                {formData.logo ? (
                                                    <p className="mt-2 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{formData.logo.name}</p>
                                                ) : (
                                                    <p className="text-xs text-slate-400">SVG, PNG, JPG (MAX. 800x400px)</p>
                                                )}
                                            </div>
                                            <input type="file" name="logo" className="hidden" accept="image/*" onChange={handleChange} />
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Order Summary & Payment */}
                    <div className="lg:col-span-1 lg:sticky lg:top-24">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
                            <div className={`p-6 bg-gradient-to-r ${plan.color} text-white`}>
                                <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Selected Plan</p>
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <div className="flex items-baseline mt-2">
                                    <span className="text-4xl font-extrabold">{plan.price}</span>
                                    <span className="text-white/80 text-sm ml-1 font-medium">{plan.period}</span>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-b border-slate-100">
                                <ul className="space-y-3">
                                    {plan.features.slice(0, 4).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-600">
                                            <Check size={16} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-3 flex items-center">
                                    <CreditCard className="w-4 h-4 mr-1" /> Payment Details
                                </label>
                                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm mb-6">
                                    <CardElement options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#1e293b',
                                                '::placeholder': { color: '#94a3b8' },
                                                iconColor: '#DC143C', 
                                            },
                                        },
                                    }} />
                                </div>

                                {error && (
                                    <div className="text-red-500 text-xs mb-4 bg-red-50 p-3 rounded-lg border border-red-100 flex items-start">
                                        <ShieldCheck className="w-4 h-4 mr-2 shrink-0 mt-0.5" /> {error}
                                    </div>
                                )}
                                
                                <button 
                                    type="submit" 
                                    form="checkout-form"
                                    disabled={!stripe || loading}
                                    className="w-full bg-slate-900 hover:bg-primary text-white font-bold py-4 px-4 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                                >
                                    {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : `Pay ${plan.price}`}
                                </button>
                                <p className="text-center text-[11px] text-slate-400 mt-4 leading-normal">
                                    By confirming, you agree to our Terms of Service. Secure 256-bit encrypted payment.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const MembershipCheckout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutContent />
        </Elements>
    );
};

export default MembershipCheckout;
