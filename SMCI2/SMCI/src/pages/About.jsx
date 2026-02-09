import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, ShieldCheck, Heart, Globe, BookOpen } from 'lucide-react';
 
const About = () => {
  return (
    <>
      <Helmet>
        <title>About SMCI - Vision, Mission & Values</title>
        <meta name="description" content="Learn about SMCI's 22-year journey, our vision to be the leading IT consultancy in Zimbabwe, and our commitment to efficiency and experience." />
      </Helmet>
 
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About SMCI</h1>
            <p className="text-2xl text-blue-200 italic font-light">
              "Efficiency Our Virtue, Experience Our Attitude!!!"
            </p>
          </motion.div>
        </div>
      </div>
 
      {/* Company Profile Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Profile</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Sandcircle Management Consultancy International (SMCI)</strong> is a premier IT solutions provider based in Bulawayo, Zimbabwe. Registered as <strong>Sandcircle Trading Private Limited</strong> (Reg No: 1033/2001) on <strong>10 October 2001</strong>, we have over 22 years of trading experience.
                </p>
                <p>
                  We are a duly tax-compliant organization (ZIMRA TIN: 2000261674, VAT: 10020676). Our journey began with a commitment to providing high-quality IT consultancy, and today we stand as a leader in educational and corporate technology solutions.
                </p>
                <p>
                  From designing state-of-the-art computer labs to providing comprehensive training programs like Pastel Accounting and E-Learning solutions, SMCI is dedicated to technological advancement in Zimbabwe.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 p-8 rounded-2xl border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Registration Date</span>
                  <span className="font-semibold text-gray-800">10 October 2001</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Registration No.</span>
                  <span className="font-semibold text-gray-800">1033/2001</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">ZIMRA TIN</span>
                  <span className="font-semibold text-gray-800">2000261674</span>
                </li>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500">VAT Number</span>
                  <span className="font-semibold text-gray-800">10020676</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="text-gray-500">Experience</span>
                  <span className="font-semibold text-gray-800">22+ Years</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* Vision, Mission, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-blue-600"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading Information Technology Consultancy in Zimbabwe, recognized for innovation, reliability, and excellence in service delivery.
              </p>
            </motion.div>
 
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-teal-500"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior, cost-effective IT solutions and training that empower individuals and organizations to achieve their full potential through technology.
              </p>
            </motion.div>
 
            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-indigo-600"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Integrity & Honesty
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Professionalism
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Innovation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Customer Centricity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Teamwork
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* Corporate Social Responsibility */}
      <section id="csr" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-pink-400" />
                <h2 className="text-3xl font-bold">Corporate Social Responsibility</h2>
              </div>
              <h3 className="text-xl text-blue-200 mb-6 italic">
                "Creating tomorrow's industrious leaders today through IT"
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At SMCI, we believe in giving back to the community that has supported us for over two decades. Our CSR initiatives focus on education and youth mentorship.
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-yellow-400" />
                    Boys to Real Man (B2RM)
                  </h4>
                  <p className="text-blue-100 text-sm">
                    A dedicated mentorship program aimed at guiding young men to become responsible, industrious, and ethical leaders in society.
                  </p>
                </div>
                
                <div className="bg-blue-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-400" />
                    Education Partnerships
                  </h4>
                  <p className="text-blue-100 text-sm">
                    We partner with schools in underprivileged areas to provide access to IT resources and training, bridging the digital divide.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Community work" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Company Policies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Equality Policy</h3>
              <p className="text-sm text-gray-600">
                We are an equal opportunity employer committed to diversity and inclusion in the workplace.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">IT Security</h3>
              <p className="text-sm text-gray-600">
                Rigorous protocols to ensure the security and integrity of all client data and systems.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-sm text-gray-600">
                Compliance with international data protection standards to safeguard privacy.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <ShieldCheck className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Environmental</h3>
              <p className="text-sm text-gray-600">
                Commitment to sustainable e-waste disposal and eco-friendly business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default About;
