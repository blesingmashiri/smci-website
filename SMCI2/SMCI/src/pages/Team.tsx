import React from 'react';



export default function Team() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hero Section - KEEP AS-IS */}

      <section className="text-center mb-16 pt-12">

        <h1 className="text-5xl font-bold text-gray-800 mb-6">Meet Our Team</h1>

        <p className="text-2xl text-black font-semibold mb-4">A dedicated group of professionals committed to delivering the best IT solutions.</p>

      </section>



      {/* Two-Card Team Overview - CORE SECTION */}

      <section className="container mx-auto px-4 pb-16">

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Card 1: Technical Operations Team */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="aspect-w-16 aspect-h-12">

              <img

                src="/images/team/fabrication.jpeg"

                alt="Technical Operations Team"

                className="w-full h-80 object-cover"

              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Operations Team</h3>

              <p className="text-gray-700 leading-relaxed">

                Our field technicians are the backbone of our service delivery, ensuring every installation meets our rigorous standards.

              </p>

            </div>

          </div>



          {/* Card 2: Fabrication Specialists */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="aspect-w-16 aspect-h-12">

              <img

                src="/images/team/technical-operations.jpeg"

                alt="Fabrication Specialists"

                className="w-full h-80 object-cover"

              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fabrication Specialists</h3>

              <p className="text-gray-700 leading-relaxed">

                Skilled craftsmen dedicated to creating custom, durable lab furniture and structural frames for our projects.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* What Drives Our Team - OPTIONAL */}

      <section className="bg-blue-50 py-16">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What Drives Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

            <div className="text-center">

              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">

                <span className="text-2xl font-bold">E</span>

              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficiency</h3>

              <p className="text-gray-700">Our virtue in everything we do</p>

            </div>

            <div className="text-center">

              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">

                <span className="text-2xl font-bold">E</span>

              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>

              <p className="text-gray-700">25 years of proven expertise</p>

            </div>

            <div className="text-center">

              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">

                <span className="text-2xl font-bold">A</span>

              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Attitude</h3>

              <p className="text-gray-700">Commitment to excellence</p>

            </div>

          </div>

        </div>

      </section>

      {/* Our Work Gallery - NEW SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Recent Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/Computer-lab-installation.jpeg" alt="Computer Lab Installation" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Computer Lab Installation</h4>
                <p className="text-gray-600 text-sm">Complete ICT lab setup for educational institutions</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/Networked.jpeg" alt="Network Setup" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Network Infrastructure</h4>
                <p className="text-gray-600 text-sm">Professional network design and implementation</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/Custom-fabrication.jpeg" alt="Fabrication Workshop" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Custom Fabrication</h4>
                <p className="text-gray-600 text-sm">Bespoke furniture and equipment manufacturing</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/Training.jpeg" alt="Training Session" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Training Programs</h4>
                <p className="text-gray-600 text-sm">Professional ICT training and workshops</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/Office-setup.jpeg" alt="Office Setup" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Corporate Solutions</h4>
                <p className="text-gray-600 text-sm">Complete office ICT infrastructure setup</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src="/images/team/Maintenence.jpeg" alt="Maintenance Service" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Maintenance & Support</h4>
                <p className="text-gray-600 text-sm">Ongoing technical support and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
