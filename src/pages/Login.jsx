import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({...formData, [e.target.name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isLogin) {
      alert(`Login attempted for: ${formData.email}`);
    } else {
      if(formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert(`Registration attempted for: ${formData.name}`);
    }
  };

  return (
    <div className="min-h-screen pt-20 flex bg-white font-sans text-slate-800">
      
      {/* Left Side - Visual / Branding */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2301&q=80" 
               alt="Office" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/80"></div>
         </div>

         {/* Animated Shapes */}
         <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
         <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>

         <div className="relative z-10 max-w-lg">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex items-center gap-3 mb-8"
             >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-2xl">
                    <span className="text-primary font-heading font-bold text-2xl">N</span>
                </div>
                <h2 className="text-white text-3xl font-heading font-bold">NACOC<span className="text-secondary">USA</span></h2>
             </motion.div>
             
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
             >
                Connect, Collaborate, and Grow Together.
             </motion.h1>
             
             <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-blue-100 text-lg leading-relaxed"
             >
                Join the largest network of Nepalese American businesses. Access exclusive resources, attend premium events, and drive your professional growth.
             </motion.p>

             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex items-center gap-4 text-sm font-medium text-white/60"
             >
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-primary-dark bg-slate-700 flex items-center justify-center text-[10px] text-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                     </div>
                   ))}
                </div>
                <span>Join 500+ successful members</span>
             </motion.div>
         </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-24 overflow-y-auto">
        <div className="max-w-md w-full">
            <div className="text-center lg:text-left mb-10">
               <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">
                  {isLogin ? 'Welcome back' : 'Create an account'}
               </h2>
               <p className="text-slate-500">
                  {isLogin ? 'Please enter your details to sign in.' : 'Start your 30-day free trial today.'}
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               <AnimatePresence mode='wait'>
                 {!isLogin && (
                   <motion.div 
                      key="name"
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-1 overflow-hidden"
                   >
                     <label className="block text-sm font-bold text-slate-700">Full Name</label>
                     <div className="relative">
                       <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                       <input
                         type="text"
                         name="name"
                         placeholder="Enter your name"
                         className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                         value={formData.name}
                         onChange={handleChange}
                         required={!isLogin}
                       />
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>

               <div className="space-y-1">
                 <label className="block text-sm font-bold text-slate-700">Email Address</label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                   <input
                     type="email"
                     name="email"
                     placeholder="Enter your email"
                     className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                     value={formData.email}
                     onChange={handleChange}
                     required
                   />
                 </div>
               </div>

               <div className="space-y-1">
                 <label className="block text-sm font-bold text-slate-700">Password</label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                   <input
                     type={showPassword ? "text" : "password"}
                     name="password"
                     placeholder="Create a password"
                     className="w-full pl-10 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                     value={formData.password}
                     onChange={handleChange}
                     required
                   />
                   <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                   </button>
                 </div>
               </div>

               <AnimatePresence mode='wait'>
                 {!isLogin && (
                   <motion.div 
                      key="confirm"
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-1 overflow-hidden"
                   >
                     <label className="block text-sm font-bold text-slate-700">Confirm Password</label>
                     <div className="relative">
                       <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                       <input
                         type="password"
                         name="confirmPassword"
                         placeholder="Confirm your password"
                         className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                         value={formData.confirmPassword}
                         onChange={handleChange}
                         required={!isLogin}
                       />
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>

               {isLogin ? (
                  <div className="flex items-center justify-end">
                    <a href="#" className="text-sm font-bold text-primary hover:underline">Forgot password?</a>
                  </div>
               ) : (
                  <div className="flex items-start gap-2">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        required 
                      />
                    </div>
                    <div className="text-sm">
                      <label className="font-medium text-slate-700">I agree to the Terms and Privacy Policy</label>
                    </div>
                  </div>
               )}

               <button 
                  type="submit" 
                  className="w-full py-3.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
               >
                  {isLogin ? 'Sign In' : 'Create Account'} 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </button>

            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
               <p className="text-slate-500">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    onClick={() => setIsLogin(!isLogin)} 
                    className="ml-2 font-bold text-primary hover:underline focus:outline-none"
                  >
                     {isLogin ? 'Sign up for free' : 'Log in'}
                  </button>
               </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
