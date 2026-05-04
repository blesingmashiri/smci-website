import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Wrench, CheckCircle, Clock, AlertCircle, TrendingUp, School } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ProjectsTimeline = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Classroom Implementation - Mzilikazi High School",
      school: "Mzilikazi High School",
      location: "Bulawayo, Zimbabwe",
      startDate: "2024-09-01",
      expectedCompletion: "2024-12-15",
      status: "In Progress",
      progress: 75,
      description: "Complete transformation of traditional classrooms into smart learning environments with interactive whiteboards, student tablets, and cloud-based learning management system.",
      scope: [
        "Installation of 5 interactive smart boards",
        "Deployment of 150 student tablets",
        "Teacher training on digital pedagogy",
        "Network infrastructure upgrade",
        "Cloud-based LMS implementation"
      ],
      impact: {
        students: "1,200+",
        teachers: "45",
        classrooms: "5"
      },
      milestones: [
        { title: "Infrastructure Assessment", completed: true },
        { title: "Network Installation", completed: true },
        { title: "Smart Board Installation", completed: true },
        { title: "Tablet Deployment", completed: true },
        { title: "Teacher Training", completed: true },
        { title: "Project Handover", completed: true }
      ],
      images: ["/images/projects/mzilikazi-smart-classroom-2024.jpg"],
      partners: ["Mzilikazi High School", "Ministry of Education", "TechEdu Solutions"]
    },
    {
      id: 2,
      title: "Computer Lab Modernization - Girls College",
      school: "Girls College",
      location: "Bulawayo, Zimbabwe",
      startDate: "2024-08-15",
      expectedCompletion: "2024-11-30",
      status: "In Progress",
      progress: 60,
      description: "Complete overhaul of existing computer lab with modern hardware, updated software, and enhanced security measures to support STEM education.",
      scope: [
        "Installation of 30 new desktop computers",
        "Server setup and configuration",
        "Educational software deployment",
        "Security system implementation",
        "Backup and disaster recovery setup"
      ],
      impact: {
        students: "800+",
        teachers: "25",
        computers: "30"
      },
      milestones: [
        { title: "Hardware Procurement", completed: true },
        { title: "Lab Preparation", completed: true },
        { title: "Computer Installation", completed: true },
        { title: "Software Configuration", completed: true },
        { title: "Security Setup", completed: true },
        { title: "Final Testing", completed: true }
      ],
      images: ["/images/projects/girls-college-lab-2024.jpg"],
      partners: ["Girls College", "Women in Tech Zimbabwe", "Global ICT Partners"]
    },
    {
      id: 3,
      title: "Digital Library Platform - St. Christopher's School",
      school: "St. Christopher's School",
      location: "Bulawayo, Zimbabwe",
      startDate: "2024-10-01",
      expectedCompletion: "2025-01-31",
      status: "Planning",
      progress: 25,
      description: "Development and implementation of a comprehensive digital library platform with e-books, educational resources, and research databases.",
      scope: [
        "Digital library software development",
        "E-book procurement and licensing",
        "Research database integration",
        "Mobile app development",
        "Staff training and support"
      ],
      impact: {
        students: "600+",
        teachers: "30",
        e_books: "10,000+"
      },
      milestones: [
        { title: "Requirements Gathering", completed: true },
        { title: "Platform Design", completed: true },
        { title: "Development Phase", completed: true },
        { title: "Content Upload", completed: true },
        { title: "Testing & QA", completed: true },
        { title: "Launch", completed: true }
      ],
      images: ["/images/projects/st-christopher-library-2024.jpg"],
      partners: ["St. Christopher's School", "Digital Library Foundation", "Education Ministry"]
    },
    {
      id: 4,
      title: "STEM Innovation Hub - Petra High School",
      school: "Petra High School",
      location: "Bulawayo, Zimbabwe",
      startDate: "2024-07-01",
      expectedCompletion: "2024-10-31",
      status: "In Progress",
      progress: 85,
      description: "Establishment of a state-of-the-art STEM innovation hub featuring robotics lab, 3D printing facilities, and coding workstations.",
      scope: [
        "Robotics lab setup",
        "3D printing installation",
        "Coding workstations",
        "IoT experimentation area",
        "Project showcase space"
      ],
      impact: {
        students: "400+",
        teachers: "15",
        projects: "50+"
      },
      milestones: [
        { title: "Space Preparation", completed: true },
        { title: "Equipment Installation", completed: true },
        { title: "Software Setup", completed: true },
        { title: "Teacher Training", completed: true },
        { title: "Student Orientation", completed: true },
        { title: "Hub Launch", completed: true }
      ],
      images: ["/images/projects/petra-stem-hub-2024.jpg"],
      partners: ["Petra High School", "STEM Zimbabwe", "Innovation Foundation"]
    },
    {
      id: 5,
      title: "Network Infrastructure Upgrade - WhiteStone School",
      school: "WhiteStone School",
      location: "Bulawayo, Zimbabwe",
      startDate: "2024-09-15",
      expectedCompletion: "2024-12-20",
      status: "In Progress",
      progress: 45,
      description: "Comprehensive network infrastructure upgrade including fiber optic backbone, campus-wide Wi-Fi, and enhanced security systems.",
      scope: [
        "Fiber optic cable installation",
        "Campus-wide Wi-Fi deployment",
        "Network security implementation",
        "Server room upgrade",
        "Monitoring system setup"
      ],
      impact: {
        students: "900+",
        staff: "60",
        coverage: "100%"
      },
      milestones: [
        { title: "Site Survey", completed: true },
        { title: "Fiber Installation", completed: true },
        { title: "Wi-Fi Setup", completed: true },
        { title: "Security Configuration", completed: true },
        { title: "Testing Phase", completed: true },
        { title: "Go Live", completed: true }
      ],
      images: ["/images/projects/whitestone-network-2024.jpg"],
      partners: ["WhiteStone School", "NetCom Solutions", "Security Systems Ltd"]
    },
    {
      id: 6,
      title: "Mobile Learning Initiative - Christian Brothers College",
      school: "Christian Brothers College",
      location: "Bulawayo, Zimbabwe",
      startDate: "2024-11-01",
      expectedCompletion: "2025-02-28",
      status: "Planning",
      progress: 15,
      description: "Implementation of mobile learning initiative providing tablets and educational apps to students for enhanced digital learning experience.",
      scope: [
        "Tablet procurement and configuration",
        "Educational app selection",
        "Mobile device management setup",
        "Teacher training program",
        "Parent engagement platform"
      ],
      impact: {
        students: "700+",
        teachers: "35",
        tablets: "350"
      },
      milestones: [
        { title: "Pilot Program Design", completed: true },
        { title: "Device Procurement", completed: true },
        { title: "App Configuration", completed: true },
        { title: "Teacher Training", completed: true },
        { title: "Student Deployment", completed: true },
        { title: "Full Implementation", completed: true }
      ],
      images: ["/images/projects/cbc-mobile-learning-2024.jpg"],
      partners: ["Christian Brothers College", "Mobile Education Initiative", "Parent Association"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Planning': return 'bg-yellow-500';
      case 'On Hold': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      case 'In Progress': return <Clock className="w-4 h-4" />;
      case 'Planning': return <AlertCircle className="w-4 h-4" />;
      case 'On Hold': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Projects Timeline - SMCI</title>
        <meta name="description" content="SMCI Projects Timeline - showcasing ongoing educational technology projects and infrastructure development at schools across Zimbabwe." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects Timeline
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tracking our ongoing educational technology projects and infrastructure development across partner schools
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
          {/* Project Overview */}
          <div className="bg-orange-50 rounded-lg p-8 mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Project Excellence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SMCI is committed to delivering exceptional educational technology projects that transform learning environments and empower students across Zimbabwe. Our projects focus on creating sustainable, innovative solutions that meet the evolving needs of modern education.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6">
                  <Wrench className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Quality Implementation</h3>
                  <p className="text-sm text-gray-600">
                    Delivering high-quality ICT infrastructure and educational technology solutions with attention to detail and best practices.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Student-Centered Approach</h3>
                  <p className="text-sm text-gray-600">
                    Every project is designed with student success at the forefront, creating environments that enhance learning outcomes.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <School className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Partnership Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Building strong collaborative relationships with educational institutions to ensure project success and sustainability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Project Header */}
                <div className={`${getStatusColor(project.status)} text-white p-6`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm opacity-90">
                        <div className="flex items-center gap-2">
                          <School className="w-4 h-4" />
                          {project.school}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                      
                      {/* Project Scope */}
                      <div className="bg-orange-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-orange-800 mb-3">Project Scope</h4>
                        <ul className="space-y-2">
                          {project.scope.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-orange-700 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Milestones */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Project Milestones</h4>
                        <div className="space-y-2">
                          {project.milestones.map((milestone, milestoneIndex) => (
                            <div key={milestoneIndex} className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                              <div className="flex-1">
                                <span className={`text-sm ${milestone.completed ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>
                                  {milestone.title}
                                </span>
                              </div>
                              {milestone.completed && (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Image */}
                      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder-project.jpg';
                          }}
                        />
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-4">
                      
                      
                      {/* Partners */}
                      <div className="bg-purple-50 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-3">Project Partners</h4>
                        <div className="space-y-1">
                          {project.partners.map((partner, partnerIndex) => (
                            <div key={partnerIndex} className="text-sm text-purple-700">
                              {partner}
                            </div>
                          ))}
                        </div>
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
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Partner With Us on Future Projects</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Join us in transforming education through innovative technology projects. 
                Your school could be our next success story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Discuss Your Project
                </a>
                <a 
                  href="mailto:admin@smci.co.zw?subject=Project Partnership Inquiry" 
                  className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors"
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

export default ProjectsTimeline;
