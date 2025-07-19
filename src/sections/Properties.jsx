import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Snowflake, 
  Tv, 
  Coffee, 
  Car, 
  Waves, 
  Utensils, 
  Dumbbell,
  Shield,
  Users,
  Bed,
  Bath
} from 'lucide-react';

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      type: "1BHK Suite",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "₹2,000",
      originalPrice: "₹2,500",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Snowflake, label: "AC" },
        { icon: Tv, label: "Smart TV" },
        { icon: Coffee, label: "Coffee Maker" },
        { icon: Shield, label: "Security" }
      ],
      features: {
        beds: 1,
        baths: 1,
        guests: 2
      }
    },
    {
      id: 2,
      type: "2BHK Deluxe",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "₹3,500",
      originalPrice: "₹4,000",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Snowflake, label: "AC" },
        { icon: Tv, label: "Smart TV" },
        { icon: Car, label: "Parking" },
        { icon: Utensils, label: "Kitchenette" }
      ],
      features: {
        beds: 2,
        baths: 2,
        guests: 4
      }
    },
    {
      id: 3,
      type: "3BHK Premium",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "₹5,000",
      originalPrice: "₹5,800",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Snowflake, label: "AC" },
        { icon: Tv, label: "Smart TV" },
        { icon: Waves, label: "Pool Access" },
        { icon: Dumbbell, label: "Gym" }
      ],
      features: {
        beds: 3,
        baths: 2,
        guests: 6
      }
    },
    {
      id: 4,
      type: "4BHK Executive",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "₹7,500",
      originalPrice: "₹8,500",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Snowflake, label: "AC" },
        { icon: Tv, label: "Smart TV" },
        { icon: Utensils, label: "Full Kitchen" },
        { icon: Car, label: "Valet Parking" }
      ],
      features: {
        beds: 4,
        baths: 3,
        guests: 8
      }
    },
    {
      id: 5,
      type: "5BHK Presidential",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "₹12,000",
      originalPrice: "₹15,000",
      amenities: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Snowflake, label: "AC" },
        { icon: Tv, label: "Smart TV" },
        { icon: Waves, label: "Private Pool" },
        { icon: Utensils, label: "Butler Service" }
      ],
      features: {
        beds: 5,
        baths: 4,
        guests: 10
      }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
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
            Our <span className="font-normal">Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of luxury accommodations
          </p>
        </motion.div>

        {/* Properties Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.type}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </div>
              </div>

              <div className="p-6">
                {/* Property Features */}
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{property.features.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span className="text-sm">{property.features.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{property.features.guests} Guests</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <amenity.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                      <span className="text-sm text-gray-500">per night</span>
                    </div>
                    <span className="text-sm text-gray-400 line-through">{property.originalPrice}</span>
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    {Math.round(((parseInt(property.originalPrice.replace('₹', '').replace(',', '')) - parseInt(property.price.replace('₹', '').replace(',', ''))) / parseInt(property.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesSection;