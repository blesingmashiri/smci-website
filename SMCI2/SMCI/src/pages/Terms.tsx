import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, Clock, DollarSign } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions of Trade - SMCI</title>
        <meta name="description" content="Sandcircle Management Consultancy International - Complete Terms and Conditions of Trade for all ICT products and services." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Terms and Conditions of Trade
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Sandcircle Management Consultancy International (SMCI)
              </motion.p>
            </motion.header>

            {/* Main Content */}
            <div className="prose prose-blue max-w-none">
              {/* Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Here are the Terms and Conditions of Trade for Sandcircle MCI:</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions apply to all sales of Goods and Services by Sandcircle MCI. 
                  By using our services, you agree to be bound by these terms.
                </p>
              </motion.section>

              {/* 1. Definitions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  1. Definitions
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold"><strong>"Client"</strong></p>
                      <p className="text-gray-700">means the person or organization purchasing goods and/or services from Sandcircle MCI.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold"><strong>"Goods"</strong></p>
                      <p className="text-gray-700">means computer hardware, software, and other equipment supplied by Sandcircle MCI.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold"><strong>"Services"</strong></p>
                      <p className="text-gray-700">means designing, fitting, training, servicing, and maintenance of computer labs, smart centers, and other related services.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 2. General Terms */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  2. General Terms
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">These Terms and Conditions apply to all sales of Goods and Services by Sandcircle MCI.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">Sandcircle MCI reserves the right to modify these Terms and Conditions at any time.</p>
                  </div>
                </div>
              </motion.section>

              {/* 3. Orders and Payment */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  3. Orders and Payment
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">All orders are subject to acceptance by Sandcircle MCI.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Payment terms:</p>
                      <p className="text-gray-700">50% deposit upon order, balance due upon delivery/installation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Payment methods:</p>
                      <p className="text-gray-700">Bank transfer, cash, or approved credit facilities.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 4. Goods and Services */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  4. Goods and Services
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Design and Fitting:</p>
                      <p className="text-gray-700">Sandcircle MCI will provide a detailed quotation for design and fitting services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Hardware and Software Sales:</p>
                      <p className="text-gray-700">Goods are sold as per manufacturer's warranty. Sandcircle MCI is not liable for software compatibility issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Servicing and Maintenance:</p>
                      <p className="text-gray-700">Response time: 24-48 hours, depending on service package. Client is responsible for backup data and equipment.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 5. Training and Networking */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  5. Training and Networking
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Training:</p>
                      <p className="text-gray-700">Training schedules are subject to change. Client is responsible for ensuring attendees have necessary prerequisites.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <div>
                      <p className="font-semibold mb-2">Networking:</p>
                      <p className="text-gray-700">Sandcircle MCI will provide network design and implementation services. Client is responsible for ensuring network security.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 6. Warranty and Liability */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  6. Warranty and Liability
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">Sandcircle MCI warrants Goods and Services for 12 months from delivery/installation.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">Sandcircle MCI is not liable for consequential losses or damages.</p>
                  </div>
                </div>
              </motion.section>

              {/* 7. Termination */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  7. Termination
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">Either party may terminate this agreement with 30 days' written notice.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">Client is responsible for payment of all outstanding amounts.</p>
                  </div>
                </div>
              </motion.section>

              {/* 8. Dispute Resolution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  8. Dispute Resolution
                </h3>
                
                <div className="space-y-4 ml-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                    <p className="text-gray-700">Disputes will be resolved through arbitration in accordance with Zimbabwean law.</p>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 p-8 bg-blue-50 rounded-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Clarification?</h3>
                <p className="text-gray-700 mb-6">
                  For questions about these Terms and Conditions, please contact our legal department or reach out to us through the contact information provided on our website.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <a 
                    href="/contact" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="mailto:legal@smci.co.zw" 
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Email Legal Department
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;
