import React from 'react';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - SMCI</title>
      </Helmet>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="mb-4">At SMCI, we respect your privacy and are committed to protecting your personal data.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Information We Collect</h2>
            <p className="mb-4">We may collect name, email address, phone number, and other relevant information when you contact us or use our services.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">How We Use Your Information</h2>
            <p className="mb-4">We use your information to provide services, respond to inquiries, and improve our offerings. We do not sell your data to third parties.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
