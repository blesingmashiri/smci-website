import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award, Handshake, Clock, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const EventsTimeline = () => {
  const events = [
    {
      id: 1,
      title: "Guest of Honour - Bulawayo District Education Music Competitions",
      location: "Bulawayo, Zimbabwe",
      type: "Guest of Honour",
      description: "SMCI was honored to be invited as Guest of Honour at the prestigious Bulawayo District Education Music Competitions, where we provided digital sound equipment and technical support for the annual event showcasing musical talent.",
      impact: "Enabled high-quality audio production for the competitions and provided technical expertise that enhanced the overall event experience for participants.",
      partnership: "Bulawayo District Education Office",
      images: ["/images/events/guest-of-honour.jpeg"]
    },
    {
      id: 2,
      title: "Computerised Library & Furniture Setup - Pumula High Library",
      location: "Pumula High Library, Bulawayo",
      type: "Partnership",
      description: "Transformed Pumula High Library into a fully computerised library with modern library customised furniture, reading desks, and digital research facilities, creating an enhanced learning environment for students.",
      impact: "Modernized the library space with ergonomic reading desks and computerised systems, significantly improving study conditions and digital access for all library users.",
      partnership: "Pumula High Library & Ministry of Education",
      images: ["/images/events/Pumula-high-library.jpeg"]
    },
    {
      id: 3,
      title: "Combined Designs & Fabrication - Robert Tredgold School Library",
      location: "Robert Tredgold School Library, Bulawayo",
      type: "Workshop",
      description: "Executed combined designs for digital literacy workshop at Robert Tredgold School Library, featuring completion of desktops setup, fabrication and carpentry interaction for creating custom learning stations, resulting in finished products that enhance the educational environment.",
      impact: "Delivered the final product with integrated digital workstations and custom-built furniture, demonstrating successful collaboration between technology implementation and traditional carpentry craftsmanship.",
      partnership: "Robert Tredgold School Library & Women in Tech Zimbabwe",
      images: ["/images/events/Robert-tredgold.jpeg"]
    },
        {
      id: 5,
      title: "Short-Throw Projects & Projector Boards - Mavuna Lodge Teaching aids",
      location: "Mavuna Lodge Teaching aids, Bulawayo",
      type: "Commissioning",
      description: "Commissioned specialized computer lab at Mavuna Lodge Teaching aids facility, executing combined short-throw projects and installing retracting projector boards fittings for enhanced teaching capabilities.",
      impact: "Delivered comprehensive teaching solutions with integrated short-throw projection systems and modern retractable board fittings, improving classroom presentation and interactive learning experiences.",
      partnership: "Mavuna Lodge Teaching aids Alumni Association",
      images: ["/images/events/Mavuna-lodge.jpeg"]
    },
    {
      id: 6,
      title: "AIO Networked Systems & Server Designs - Pumula High Staff Room",
      location: "Pumula High Staff Room, Bulawayo",
      type: "Training",
      description: "Implemented AIO Networked systems in Pumula High Staff Room, featuring all in one desktops, setting up the network infrastructure, space server designs for staff rooms, and wall lined AIOs-space Managers for efficient staff operations.",
      impact: "Delivered comprehensive networked solution with integrated AIO systems and optimized server designs, creating modern digital workspace environment for staff management and collaboration.",
      partnership: "Pumula High Staff Room & Zimbabwe Teachers Association",
      images: ["/images/events/Pumula-staff.jpeg"]
    },
          ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Guest of Honour': return 'bg-purple-500';
      case 'Partnership': return 'bg-blue-500';
      case 'Workshop': return 'bg-green-500';
      case 'Summit': return 'bg-red-500';
      case 'Commissioning': return 'bg-yellow-500';
      case 'Training': return 'bg-indigo-500';
      case 'Sponsorship': return 'bg-pink-500';
      case 'Launch': return 'bg-teal-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Events Timeline - SMCI</title>
        <meta name="description" content="SMCI Events Timeline - showcasing our partnerships, educational initiatives, and community involvement across Zimbabwe." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Events & Partnerships Timeline
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Celebrating our journey of transforming education through strategic partnerships and community engagement
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
          <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Events & Partnerships Excellence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SMCI is committed to fostering meaningful partnerships and hosting impactful events that advance educational technology across Zimbabwe. Our events and partnerships create opportunities for collaboration, knowledge sharing, and community engagement in the ICT education sector.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6">
                  <Handshake className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Strategic Partnerships</h3>
                  <p className="text-sm text-gray-600">
                    Building collaborative relationships with educational institutions, government agencies, and technology providers to drive educational innovation.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Impactful Events</h3>
                  <p className="text-sm text-gray-600">
                    Hosting workshops, competitions, and educational summits that showcase excellence and promote technology adoption in schools.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Community Engagement</h3>
                  <p className="text-sm text-gray-600">
                    Creating platforms for educators, students, and stakeholders to connect, share knowledge, and collaborate on educational initiatives.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Events Timeline */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Event Header */}
                <div className={`${getEventTypeColor(event.type)} text-white p-6`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 ${getEventTypeColor(event.type)} rounded-full`}></div>
                        <span className="text-sm font-medium opacity-90">{event.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <Handshake className="w-5 h-5" />
                        <span className="font-medium">Partnership:</span>
                      </div>
                      <p className="text-sm">{event.partnership}</p>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Description */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>
                      
                      {/* Impact */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                          <Star className="w-5 h-5" />
                          Impact & Outcomes
                        </h4>
                        <p className="text-blue-700">{event.impact}</p>
                      </div>

                      {/* Images Placeholder */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {event.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="relative group">
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                              <img 
                                src={image} 
                                alt={`${event.title} - Image ${imgIndex + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Event Details</h4>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                            <div>
                              <div className="text-sm font-medium">Location</div>
                              <div className="text-sm text-gray-600">{event.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                          <Handshake className="w-5 h-5" />
                          Partnership
                        </h4>
                        <p className="text-sm text-purple-700">{event.partnership}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Join us in transforming education through technology. Together, we can create more opportunities for students and schools across Zimbabwe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Discuss Partnership
                </a>
                <a 
                  href="mailto:admin@smci.co.zw?subject=Partnership Inquiry" 
                  className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default EventsTimeline;
