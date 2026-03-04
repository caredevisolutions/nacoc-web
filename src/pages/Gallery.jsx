import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // Placeholder images - in production these would come from CMS or API
  const images = [
    { src: "https://nacoc.org/wp-content/uploads/2023/04/340941913_592383802914676_2186987449339655655_n-1024x683.jpg", caption: "Community Gathering 2023" },
    { src: "https://nacoc.org/wp-content/uploads/2023/04/341075727_244838634739564_7284412211425178657_n.jpg", caption: "Cultural Performance" },
    { src: "https://nacoc.org/wp-content/uploads/2023/04/341144983_951012356064516_5665809774697960322_n-1024x683.jpg", caption: "Networking Event" },
    { src: "https://nacoc.org/wp-content/uploads/2023/04/341088463_136893699318182_5657850029314488310_n.jpg", caption: "Award Ceremony" },
    { src: "https://nacoc.org/wp-content/uploads/2023/04/341088463_136893699318182_5657850029314488310_n.jpg", caption: "Annual Dinner" },
    { src: "https://nacoc.org/wp-content/uploads/2023/01/Untitled-design-2-1.png", caption: "Leadership Meeting" }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Photo <span className="text-secondary">Gallery</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Capturing the moments that define our community. From cultural celebrations to professional networking events.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;