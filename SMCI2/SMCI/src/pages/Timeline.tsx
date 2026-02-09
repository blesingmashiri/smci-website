import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase, Award, Building, Globe, Users } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '2008',
      title: 'SMCI Founded',
      description: 'Sandcircle Management Consultancy International was established in Bulawayo, Zimbabwe.',
      icon: Building,
    },
    {
      year: '2012',
      title: 'Expansion into Education',
      description: 'Launched our specialized Computer Lab Design service for schools and universities.',
      icon: Users,
    },
    {
      year: '2015',
      title: 'Major Government Contracts',
      description: 'Secured contracts for nationwide IT infrastructure development.',
      icon: Briefcase,
    },
    {
      year: '2018',
      title: 'International Partnerships',
      description: 'Partnered with major global tech brands like Lenovo, HP, and Dell.',
      icon: Globe,
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Celebrated 15 years of excellence as a premier IT consultancy in Zimbabwe.',
      icon: Award,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Timeline - SMCI | History & Milestones</title>
        <meta name="description" content="Trace the history and growth of Sandcircle Management Consultancy International from 2008 to present." />
      </Helmet>

      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h1>
            <p className="text-lg text-gray-600">Growing together with our clients through years</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-100 hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <div className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500 relative ${
                     index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="text-3xl font-bold text-blue-600 block mb-2">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center z-10 hidden md:flex shadow-xl border-4 border-white">
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
