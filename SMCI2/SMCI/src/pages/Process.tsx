import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, FileText, Rocket, Target } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Users,
      title: 'Consultation',
      description: 'We begin by understanding your specific needs and requirements through detailed consultation sessions.'
    },
    {
      icon: FileText,
      title: 'Planning',
      description: 'Our team creates a comprehensive project plan tailored to your objectives and timeline.'
    },
    {
      icon: Target,
      title: 'Implementation',
      description: 'We execute the project with precision, ensuring quality standards are met at every stage.'
    },
    {
      icon: CheckCircle,
      title: 'Testing',
      description: 'Rigorous testing procedures to ensure everything works perfectly before delivery.'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Smooth deployment of solutions with minimal disruption to your operations.'
    },
    {
      icon: Clock,
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure continued optimal performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Process - SMCI</title>
        <meta name="description" content="Learn about SMCI's systematic approach to delivering IT solutions from consultation to ongoing support." />
      </Helmet>

      {/* Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Process</h1>
          <p className="text-xl text-blue-200">A systematic approach to delivering excellence</p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-8 mb-12"
              >
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{index + 1}</div>
                    <div className="text-gray-500">of 6</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
