import React from 'react';
import { Monitor, Cpu, Wifi, Database, Shield, GraduationCap, Wrench, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Computer Sales and Supplies",
      description: "We are an approved supplier of Computers, Hardware and Software with the Ministry of Education, Private Organisations, NGOs and Individuals, with reference and credibility that is over twenty two years of trading. We propose and offer our expanded products clientelle portfolio.",
      features: ["Desktops and Desktop Parts", "Laptops and Laptops Parts", "Printers and Scanners", "Projectors and Electrical Projector Boards", "Learning Aids (Surround Sound, Interactive Boards)", "Hardware user training and support"],
      color: "blue"
    },
    {
      icon: Wifi,
      title: "Networking Hardware and Services",
      description: "Comprehensive networking solutions including hardware supplies and professional installation services.",
      features: ["Network Hardware Supply", "Network Installation", "Network Configuration", "Network Security Setup", "Wireless Network Setup", "Network Maintenance"],
      color: "green"
    },
    {
      icon: Wrench,
      title: "Computer Maintenance and Servicing",
      description: "Professional servicing, repairs and maintenance of all computer hardware and systems.",
      features: ["Hardware Diagnostics", "System Repairs", "Preventive Maintenance", "Emergency Repairs", "Hardware Upgrades", "Annual Maintenance Contracts"],
      color: "purple"
    },
    {
      icon: Database,
      title: "Computer Consumables and Accessories",
      description: "Complete range of computer consumables and accessories for all your IT needs.",
      features: ["Printer Cartridges and Toners", "Computer Cables and Connectors", "Storage Devices", "Mouse and Keyboards", "Computer Bags and Cases", "Cleaning Supplies"],
      color: "orange"
    },
    {
      icon: Shield,
      title: "Computer Lab Designs and Full Fitting",
      description: "Complete computer laboratory design and fitting including structural works and full installation.",
      features: ["Lab Design and Layout", "Floor Tiling", "Carpentry Works", "Metal Fabrication", "Burglar Ceilings, Windows and Doors", "Electrical Wiring and Networking", "Windows Blinds Installation"],
      color: "red"
    },
    {
      icon: GraduationCap,
      title: "Pastel Accounting Installation and Training",
      description: "Professional Pastel Accounting software installation, configuration and comprehensive training programs.",
      features: ["Pastel Software Installation", "System Configuration", "Basic Pastel Training", "Advanced Pastel Training", "Custom Training Programs", "Ongoing Support"],
      color: "indigo"
    },
    {
      icon: Monitor,
      title: "Application Software",
      description: "Wide range of application software including educational tools, business applications and custom solutions.",
      features: ["Timetable Generation Applications", "E-learning Packages", "Teacher Development Programs", "Website Designing and Hosting", "Educational Software", "Custom Software Development"],
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; hover: string; text: string; light: string } } = {
      blue: { bg: "bg-blue-600", hover: "hover:bg-blue-700", text: "text-blue-600", light: "bg-blue-50" },
      green: { bg: "bg-green-600", hover: "hover:bg-green-700", text: "text-green-600", light: "bg-green-50" },
      purple: { bg: "bg-purple-600", hover: "hover:bg-purple-700", text: "text-purple-600", light: "bg-purple-50" },
      orange: { bg: "bg-orange-600", hover: "hover:bg-orange-700", text: "text-orange-600", light: "bg-orange-50" },
      red: { bg: "bg-red-600", hover: "hover:bg-red-700", text: "text-red-600", light: "bg-red-50" },
      indigo: { bg: "bg-indigo-600", hover: "hover:bg-indigo-700", text: "text-indigo-600", light: "bg-indigo-50" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            "Efficiency Our Virtue, Experience Our Attitude!!!"
          </p>
          <p className="text-lg mt-4 opacity-80">
            Comprehensive IT solutions designed to transform your business and drive success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Service Header */}
                <div className={`${colors.bg} ${colors.hover} p-6 text-white transition-colors duration-300`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-12 h-12" />
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our comprehensive IT solutions can help your organization achieve its goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a 
                href="tel:+263772351216" 
                className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Lead Consultant Contact */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Discuss Your IT Needs?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Please do feel free to discuss any of the above mentioned with our Lead Consultant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Lead Consultant
              </a>
              <a 
                href="tel:+263772351216" 
                className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Support Information */}
        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 5:00 PM<br />
              Saturday: 9:00 AM - 1:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Support</h3>
            <p className="text-gray-600 mb-3">
              24/7 support available for maintenance contract clients
            </p>
            <a href="tel:+263772351216" className="text-blue-600 hover:text-blue-800 font-medium">
              +263-772-351-216
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Wrench className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Areas</h3>
            <p className="text-gray-600">
              Serving Bulawayo and surrounding areas with comprehensive IT solutions
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
