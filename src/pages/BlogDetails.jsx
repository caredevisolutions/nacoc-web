import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Calendar, Facebook, Twitter, Linkedin, Share2, ArrowLeft } from 'lucide-react';
import { api } from '../services/api';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPostData = async () => {
      setLoading(true);
      const data = await api.getPostById(id);
      setPost(data);
      
      // Fetch related (recent) posts
      const recent = await api.getPosts(1, 4);
      setRelatedPosts(recent.filter(p => p.id !== parseInt(id)).slice(0, 2));
      
      setLoading(false);
    };

    fetchPostData();
  }, [id]);

  if (loading) {
     return (
        <div className="bg-slate-50 min-h-screen pt-32 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Article not found</h2>
          <Link to="/blogs" className="text-primary hover:underline font-bold">Back to News</Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'News';

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      
      {/* Hero Header */}
      <div className="relative bg-slate-900 min-h-[50vh] flex items-end pb-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
             <img 
               src={featuredImage}
               alt={post.title.rendered} 
               className="w-full h-full object-cover opacity-60 contrast-125"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl">
           <Link to="/blogs" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider">
               <ArrowLeft size={16} className="mr-2" /> Back to News
           </Link>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <span className="inline-block px-4 py-1 rounded-full bg-secondary text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">
                {categoryName}
             </span>
             <h1 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-xl" dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
             </h1>
             
             <div className="flex items-center gap-6 text-white/80 font-medium text-sm lg:text-base">
                <span className="flex items-center"><User size={18} className="mr-2 text-secondary" /> {post._embedded?.['author']?.[0]?.name || 'NACOC'}</span>
                <span className="flex items-center"><Calendar size={18} className="mr-2 text-secondary" /> {new Date(post.date).toLocaleDateString()}</span>
             </div>
           </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20 pb-20 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Social Share (Desktop left sticky) */}
            <div className="hidden lg:flex flex-col gap-4 sticky top-32 h-fit order-2 lg:order-1 pt-12">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide text-center mb-2">Share</span>
                <button className="p-3 rounded-full bg-white shadow-md hover:scale-110 text-slate-400 hover:text-[#1877F2] transition-all">
                    <Facebook size={20} />
                </button>
                <button className="p-3 rounded-full bg-white shadow-md hover:scale-110 text-slate-400 hover:text-[#1DA1F2] transition-all">
                    <Twitter size={20} />
                </button>
                <button className="p-3 rounded-full bg-white shadow-md hover:scale-110 text-slate-400 hover:text-[#0A66C2] transition-all">
                    <Linkedin size={20} />
                </button>
                <button className="p-3 rounded-full bg-white shadow-md hover:scale-110 text-slate-400 hover:text-slate-600 transition-all">
                    <Share2 size={20} />
                </button>
            </div>

            {/* Article Content */}
            <div className="flex-1 order-1 lg:order-2">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 prose prose-lg max-w-none text-slate-600 leading-relaxed font-body prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary prose-img:rounded-2xl"
                >
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </motion.div>

                {/* Related Articles */}
                <div className="mt-16 pt-12 border-t border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-8 font-heading">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {relatedPosts.map(related => (
                            <Link to={`/blogs/${related.id}`} key={related.id} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all flex gap-4 items-start border border-slate-100">
                                <img 
                                    src={related._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/150'} 
                                    alt={related.title.rendered} 
                                    className="w-20 h-20 object-cover rounded-xl shrink-0" 
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-primary transition-colors line-clamp-2 mb-2" dangerouslySetInnerHTML={{ __html: related.title.rendered }}></h4>
                                    <span className="text-xs text-slate-400 font-bold uppercase">{new Date(related.date).toLocaleDateString()}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
