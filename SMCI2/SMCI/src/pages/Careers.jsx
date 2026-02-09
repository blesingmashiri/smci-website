import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
 
const Careers = () => {
 
  const jobs = [
    {
      id: 1,
      title: 'Senior Network Engineer',
      type: 'Full-time',
      location: 'Bulawayo',
      description: 'We are looking for an experienced Network Engineer to design and implement complex network solutions for our enterprise clients.',
    },
    {
      id: 2,
      title: 'IT Support Technician',
      type: 'Full-time',
      location: 'Bulawayo',
      description: 'Provide technical assistance and support for incoming queries and issues related to computer systems, software, and hardware.',
    },
    {
      id: 3,
      title: 'Sales Executive',
      type: 'Commission Based',
      location: 'Remote / Hybrid',
      description: 'Drive sales for our diverse range of IT products and services. Proven track record in B2B sales preferred.',
    },
  ];
 
  const handleApply = () => {
    window.location.href = 'mailto:careers@smci.co.zw?subject=Job Application - SMCI Careers';
  };
 
  return (
    <>
      <Helmet>
        <title>Careers - SMCI | Join Our Team</title>
        <meta name="description" content="Explore career opportunities at SMCI. We are always looking for talented individuals to join our growing team." />
      </Helmet>
 
      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At SMCI, we believe in empowering our employees to innovate and grow. Check out our current openings below.
            </p>
          </motion.div>
 
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> Posted 2 days ago
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={handleApply}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-teal-50 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Don't see a perfect fit?</h3>
            <p className="text-gray-600 mb-4">
              We are always on the lookout for great talent. Send your resume for future consideration.
            </p>
            <a href="mailto:careers@smci.co.zw" className="text-teal-600 font-semibold hover:underline flex items-center justify-center gap-2">
              Email us your CV <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Careers;
