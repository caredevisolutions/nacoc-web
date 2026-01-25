import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

const Blogs = () => {
    
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await api.getPosts();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-[80px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
          >
             <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">News & Insights</h1>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
               Stay up to date with the latest meaningful stories, event recaps, and announcements from the Nepalese American Chamber of Commerce.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
               const dateObj = new Date(post.date);
               const month = dateObj.toLocaleDateString('en-US', { month: 'short' });
               const day = dateObj.toLocaleDateString('en-US', { day: 'numeric' });
               const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';

               return (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
               >
                 <div className="relative overflow-hidden h-64">
                    <img 
                      src={imageUrl}
                      alt={post.title.rendered} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'; }} 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-md">
                        <span className="block text-xs font-bold text-slate-500 uppercase">{month}</span>
                        <span className="block text-xl font-bold text-slate-900">{day}</span>
                    </div>
                 </div>
                 
                 <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                        <div className="flex items-center text-xs font-bold text-primary uppercase tracking-wider mb-2">
                           <User size={14} className="mr-1" /> {post._embedded?.['author']?.[0]?.name || 'NACOC'}
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                        </h2>
                        
                        <div className="text-slate-600 mb-6 leading-relaxed line-clamp-3 text-sm" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}>
                        </div>
                    </div>
                    
                    <Link to={`/blogs/${post.id}`} className="text-slate-900 font-bold text-sm inline-flex items-center hover:text-primary transition-colors group/btn">
                       Read Full Story <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                 </div>
               </motion.div>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
