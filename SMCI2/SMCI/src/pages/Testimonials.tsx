import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "School Principal",
      text: "SMCI transformed our old computer room into a modern, fully functional laboratory. The students love it!",
      rating: 5
    },
    {
      id: 2,
      name: "James T.",
      role: "IT Manager",
      text: "Reliable support and genuine products. We rely on SMCI for all our corporate hardware needs.",
      rating: 5
    },
    {
      id: 3,
      name: "Blessing K.",
      role: "Small Business Owner",
      text: "The networking solution they designed for our office has been flawless. Highly recommended.",
      rating: 4
    }
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials - SMCI | Client Reviews</title>
        <meta name="description" content="See what our clients say about our IT services and solutions." />
      </Helmet>

      <div className="bg-blue-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg relative"
              >
                <Quote className="w-10 h-10 text-blue-100 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <span className="text-sm text-blue-600">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
