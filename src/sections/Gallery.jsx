import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Luxury hotel lobby",
      height: "h-80"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern bedroom suite",
      height: "h-60"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Elegant living room",
      height: "h-96"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Spacious bathroom",
      height: "h-72"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Presidential suite",
      height: "h-64"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel exterior view",
      height: "h-88"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Rooftop terrace",
      height: "h-56"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel restaurant",
      height: "h-76"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Pool area",
      height: "h-68"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Spa and wellness",
      height: "h-84"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Hotel bar",
      height: "h-72"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Garden view",
      height: "h-60"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Experience <span className="font-normal">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the beauty and luxury that awaits you in every corner of our properties
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="break-inside-avoid mb-4"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.height} object-cover transition-transform duration-500 group-hover:scale-105`}
                  loading="lazy"
                />
                
                {/* Minimal overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom spacing for visual balance */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-gray-500 text-sm"
          >
            <div className="w-12 h-px bg-gray-300"></div>
            <span>More memories await</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;