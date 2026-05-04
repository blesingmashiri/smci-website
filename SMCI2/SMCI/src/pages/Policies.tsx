import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Policies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Policies - SMCI</title>
        <meta name="description" content="SMCI Policies - Our comprehensive policies and guidelines for operations and compliance." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Policies & Guidelines</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our comprehensive policies ensure compliance, security, and excellence in all operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Policy Framework</h2>
            <p className="text-gray-600 mb-8">
              SMCI operates under a comprehensive set of policies designed to ensure the highest standards 
              of service, security, and compliance in all our operations.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy Policy</h3>
                <p className="text-gray-600">
                  How we collect, use, and protect your personal information in accordance with data protection regulations.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Terms of Service</h3>
                <p className="text-gray-600">
                  The terms and conditions governing the use of our services and products.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-gray-600">
                  Our commitment to protecting sensitive data and maintaining confidentiality.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Policy</h3>
                <p className="text-gray-600">
                  Measures we take to ensure the security of our systems and customer information.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Acceptable Use</h3>
                <p className="text-gray-600">
                  Guidelines for appropriate use of our services and platforms.
                </p>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Communication</h3>
                <p className="text-gray-600">
                  Standards for professional email communication and correspondence.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Need More Information?</h3>
              <p className="text-blue-700 mb-4">
                For detailed policy documents or specific inquiries, please contact our compliance team.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Compliance Team
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Policies;
