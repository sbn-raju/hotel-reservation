import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const FooterSection = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "reservations@luxuryhotels.com", href: "mailto:reservations@luxuryhotels.com" },
    { icon: MapPin, text: "123 Luxury Avenue, Downtown District, New York, NY 10001", href: "#" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Properties", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const services = [
    { name: "Room Booking", href: "#" },
    { name: "Event Hosting", href: "#" },
    { name: "Spa & Wellness", href: "#" },
    { name: "Restaurant", href: "#" },
    { name: "Concierge", href: "#" }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 lg:py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-light tracking-wide">Luxury</h3>
                  <p className="text-sm text-gray-400 -mt-1">HOTELS</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience unparalleled luxury and comfort at our world-class hotels. 
                Your perfect stay awaits.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-medium mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href={service.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors duration-300 block"
                    >
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-medium mb-6">Contact Info</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <info.icon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
                    >
                      {info.text}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Our reservation team is available around the clock for your convenience.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-gray-800 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <p className="text-gray-400">
              Ready to book your perfect stay?
            </p>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <span>© 2024 Luxury Hotels. All rights reserved.</span>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ color: "#ffffff" }}
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#ffffff" }}
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ♥
            </motion.span>
            <span>for luxury travelers</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;