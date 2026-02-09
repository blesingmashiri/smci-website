import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Laptop, Network, PenTool, Shield, Database, GraduationCap, Server, Video, Wrench, BookOpen, Users, Layout } from 'lucide-react';
 
const Services = () => {
  const services = [
    {
      icon: Layout,
      title: 'Designing and Fitting World',
      description: 'Our signature service for educational institutions. We design state-of-the-art computer laboratories, including custom furniture fabrication, secure electrical fittings, and networking infrastructure optimized for learning environments.'
    },
    {
      icon: Laptop,
      title: 'Computer Sales & Hardware',
      description: 'We supply high-quality laptops, desktops, and servers from top brands like HP, Dell, and Lenovo. Our hardware solutions are tailored to meet personal, educational, and corporate needs.'
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Complete network infrastructure design and installation. From structured cabling to wireless network setup, routers, switches, and secure firewalls.'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Comprehensive IT support including hardware repairs, software troubleshooting, preventive maintenance, and annual maintenance contracts (AMC).'
    },
    {
      icon: Database,
      title: 'Software Solutions',
      description: 'Installation and licensing of essential software including Operating Systems, Microsoft Office, Antivirus, and specialized business applications.'
    },
    {
      icon: Shield,
      title: 'Security Systems',
      description: 'Installation of CCTV surveillance systems, biometric access control, and digital security measures to protect your physical and digital assets.'
    },
    {
      icon: Video,
      title: 'E-Learning Solutions',
      description: 'Deployment of digital learning platforms and smart classroom technologies to modernize education delivery.'
    },
    {
      icon: Server,
      title: 'IT Consumables',
      description: 'Supply of genuine printer toners, ink cartridges, cables, and other essential IT office supplies.'
    }
  ];
 
  const trainingPrograms = [
    { title: 'Pastel Accounting', desc: 'Comprehensive training for financial management software.' },
    { title: 'ELPo', desc: 'E-Learning for Policy makers - Strategic implementation of digital learning.' },
    { title: 'ELEd', desc: 'E-Learning for Educators - Teaching methodologies for the digital age.' },
    { title: 'TtEM', desc: 'Tools to Enhance Management - IT tools for efficient administration.' },
    { title: 'TtT', desc: 'Tools to Teach - Interactive digital teaching aids.' },
    { title: 'TtL', desc: 'Tools to Learn - Student-focused digital literacy programs.' },
  ];
 
  return (
    <>
      <Helmet>
        <title>Services & Training - SMCI</title>
        <meta name="description" content="SMCI Services: Designing and Fitting World, IT Training (Pastel, ELPo, ELEd), Computer Sales, and Networking." />
      </Helmet>
 
      {/* Services Header */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-200 italic">"Efficiency Our Virtue, Experience Our Attitude!!!"</p>
        </div>
      </div>
 
      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
 
          {/* Training Section */}
          <div id="training" className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized IT Training</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Empowering your workforce with the skills needed for the digital future.
              </p>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((prog, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-bold text-blue-700 mb-2">{prog.title}</h3>
                  <p className="text-gray-600 text-sm">{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Services;
