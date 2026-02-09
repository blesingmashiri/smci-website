import React from 'react';
import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - SMCI</title>
      </Helmet>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="mb-4">Welcome to Sandcircle Management Consultancy International. By using our services, you agree to these terms.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Services</h2>
            <p className="mb-4">We provide IT consultancy, hardware sales, and maintenance services as described on our website.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Payments</h2>
            <p className="mb-4">All payments for products and services are due upon receipt of invoice unless otherwise agreed in writing.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Warranties</h2>
            <p className="mb-4">Hardware products are subject to manufacturer warranties. Services are provided with professional care and skill.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Limitation of Liability</h2>
            <p className="mb-4">SMCI shall not be liable for any indirect, special, or consequential damages arising out of use of our services.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
