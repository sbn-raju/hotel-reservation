import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is your cancellation policy?",
      answer: "We offer flexible cancellation policies that vary by booking type. Standard bookings can be cancelled up to 24 hours before check-in for a full refund. Premium and luxury bookings may have different terms. Please check your booking confirmation for specific details or contact our customer service team for assistance."
    },
    {
      id: 2,
      question: "Do you offer airport transportation services?",
      answer: "Yes, we provide complimentary airport shuttle services for all our guests. The shuttle operates every 30 minutes during peak hours and hourly during off-peak times. For premium bookings, we also offer private car services and luxury vehicle transfers. Please inform us of your arrival time during booking to ensure smooth transportation."
    },
    {
      id: 3,
      question: "What amenities are included in the room price?",
      answer: "All our rooms include complimentary high-speed WiFi, air conditioning, flat-screen TV with premium channels, coffee/tea making facilities, and daily housekeeping. Premium rooms also include access to our fitness center, pool, and spa facilities. Luxury suites come with additional perks like butler service, premium toiletries, and exclusive lounge access."
    },
    {
      id: 4,
      question: "Can I modify my booking after confirmation?",
      answer: "Yes, you can modify your booking up to 48 hours before your check-in date, subject to availability. Changes can be made through our website, mobile app, or by contacting our reservations team. Please note that rate differences may apply when upgrading room types or extending your stay. Some promotional rates may have restrictions on modifications."
    },
    {
      id: 5,
      question: "Do you accommodate special dietary requirements?",
      answer: "Absolutely! Our culinary team is experienced in preparing meals for various dietary needs including vegetarian, vegan, gluten-free, kosher, and halal options. We also accommodate specific food allergies and medical dietary requirements. Please inform us of your needs during booking or at least 24 hours before your arrival to ensure we can properly prepare for your stay."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Frequently Asked <span className="font-normal">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and booking process
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-gray-100"
            >
              {/* Question Header */}
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-inset"
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </div>
              </motion.button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;