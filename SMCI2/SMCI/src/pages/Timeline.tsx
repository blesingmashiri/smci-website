import React from 'react';
import { Helmet } from 'react-helmet-async';

const Timeline = () => {
  console.log('Timeline component rendering...');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Beneficiaries Timeline - SMCI</title>
        <meta name="description" content="SMCI Beneficiaries Timeline - Celebrating the achievements of students and institutions we support through our ICT programs and partnerships." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Beneficiaries Timeline
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Celebrating the success stories of students and institutions who have benefited from SMCI's educational partnerships and ICT solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            SMCI's Educational Impact
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            For over 25 years, SMCI has been transforming education in Zimbabwe through innovative ICT solutions, 
            scholarship programs, and community outreach initiatives. We've empowered countless students, 
            supported numerous schools, and created opportunities for educational excellence.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-gray-700">
              We're currently preparing inspiring success stories to share with you. 
              Check back soon to see the amazing achievements of our beneficiaries!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
