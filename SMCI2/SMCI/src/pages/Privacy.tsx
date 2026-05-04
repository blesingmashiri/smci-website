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
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Cookies and Tracking Technologies</h2>
            <p className="mb-4">We use cookies and other tracking technologies to improve your experience on our website and to track website usage.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Your Rights</h2>
            <p className="mb-4">You have the right to access, correct, and delete your personal data. You can also opt-out of receiving marketing communications from us.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Changes to This Policy</h2>
            <p className="mb-4">We may update this policy from time to time. We will notify you of any changes by posting the updated policy on our website.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">Contact Us</h2>
            <p className="mb-4">If you have any questions or concerns about this policy, please contact us at [insert contact information].</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
