import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Briefcase, GraduationCap, MapPin, Mail, Phone, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AttachéesTimeline = () => {
  const attachées = [];

  const groupByYear = attachées.reduce((acc, attachée) => {
    if (!acc[attachée.year]) {
      acc[attachée.year] = [];
    }
    acc[attachée.year].push(attachée);
    return acc;
  }, {} as Record<string, typeof attachées>);

  const years = Object.keys(groupByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Attachées Timeline - SMCI</title>
        <meta name="description" content="SMCI Attachées Timeline - showcasing our talented interns and attachés who contribute to educational technology transformation across Zimbabwe." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Attachées & Interns Timeline
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nurturing young talent while transforming education through technology
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          {/* Program Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Attachée Program
              </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Learning & Development</h3>
                <p className="text-gray-600">Hands-on experience in educational technology and real-world project implementation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
                <p className="text-gray-600">Pathway to permanent employment and entrepreneurship in ICT sector</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community Impact</h3>
                <p className="text-gray-600">Direct contribution to improving education in schools across Zimbabwe</p>
              </div>
            </div>
            </motion.div>
          </div>

          {/* Program Overview */}
          <div className="bg-teal-50 rounded-lg p-8 mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Attachée Excellence Program</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SMCI is committed to nurturing the next generation of ICT professionals through our comprehensive attachée and internship program. We provide valuable hands-on experience, mentorship, and career development opportunities for emerging talent in Zimbabwe's technology sector.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6">
                  <Users className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Talent Development</h3>
                  <p className="text-sm text-gray-600">
                    Fostering practical skills and professional growth through real-world project experience and industry exposure.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <GraduationCap className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Academic Partnerships</h3>
                  <p className="text-sm text-gray-600">
                    Building collaborative relationships with educational institutions to bridge academic learning and industry practice.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Briefcase className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Career Pathways</h3>
                  <p className="text-sm text-gray-600">
                    Creating pathways to meaningful employment and entrepreneurship in Zimbabwe's growing ICT sector.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Attachées by Year */}
          {years.length > 0 ? (
            years.map((year, yearIndex) => (
              <div key={year} className="mb-12">
                <motion.h2 
                  className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                >
                  <Calendar className="w-6 h-6 text-green-600" />
                  {year} Attachées
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {groupByYear[year].map((attachée, index) => (
                    <motion.div
                      key={attachée.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (yearIndex * 0.1) + (index * 0.1) }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      {/* Profile Header */}
                      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={attachée.image}
                              alt={attachée.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{attachée.name}</h3>
                            <p className="text-green-100 font-medium mb-2">{attachée.position}</p>
                            <p className="text-sm opacity-90">{attachée.duration}</p>
                          </div>
                        </div>
                      </div>

                      {/* Profile Content */}
                      <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                              <GraduationCap className="w-4 h-4" />
                              <span className="font-medium">Institution:</span>
                            </div>
                            <p className="text-gray-800">{attachée.institution}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">Qualification:</span>
                            </div>
                            <p className="text-gray-800">{attachée.qualification}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Profile</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{attachée.profile}</p>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {attachée.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="border-t pt-4">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a 
                              href={`mailto:${attachée.contact.email}`}
                              className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
                            >
                              <Mail className="w-4 h-4" />
                              {attachée.contact.email}
                            </a>
                            <a 
                              href={`tel:${attachée.contact.phone}`}
                              className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700"
                            >
                              <Phone className="w-4 h-4" />
                              {attachée.contact.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Attaché Program Opportunities</h3>
                <p className="text-gray-600 mb-8">
                  SMCI offers attaché and internship opportunities for students and recent graduates 
                  in ICT, educational technology, and related fields. Join our team to gain valuable 
                  experience while contributing to educational transformation in Zimbabwe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:careers@smci.co.zw?subject=Attaché Program Inquiry&body=Hi SMCI Team,%0A%0AI'm interested in your attaché program.%0A%0ACould you please provide information about:%0A- Available positions%0A- Application requirements%0A- Program duration%0A- Application deadlines%0A%0AThank you!"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    Apply for Attaché Program
                  </a>
                  <a
                    href="tel:+263772351216"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Call for Information
                  </a>
                </div>
              </motion.div>
            </div>
          )}

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Join Our Attachée Program</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Are you a passionate student looking to make a difference in education? 
                Apply for our attachée program and gain valuable experience while transforming learning in Zimbabwe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/careers" 
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Opportunities
                </a>
                <a 
                  href="mailto:admin@smci.co.zw?subject=Attachée Program Application" 
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default AttachéesTimeline;
