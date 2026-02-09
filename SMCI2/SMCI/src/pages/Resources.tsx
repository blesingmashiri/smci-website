import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resources = [
    { 
      title: 'SMCI Company Profile', 
      size: '2.4 MB', 
      type: 'PDF',
      filename: 'smci-company-profile.pdf',
      path: '/documents/smci-company-profile.pdf',
      description: 'Complete company information and services overview'
    },
    { 
      title: 'Product Catalogue 2024', 
      size: '5.1 MB', 
      type: 'PDF',
      filename: 'product-catalogue-2024.pdf',
      path: '/documents/product-catalogue-2024.pdf',
      description: 'Latest product catalogue with specifications and pricing'
    },
    { 
      title: 'Service Agreement Template', 
      size: '1.2 MB', 
      type: 'DOCX',
      filename: 'service-agreement-template.docx',
      path: '/documents/service-agreement-template.docx',
      description: 'Customizable service agreement template'
    },
    { 
      title: 'Lab Design Specifications', 
      size: '3.8 MB', 
      type: 'PDF',
      filename: 'lab-design-specifications.pdf',
      path: '/documents/lab-design-specifications.pdf',
      description: 'Technical specifications for laboratory design projects'
    },
  ];

  const handleDownload = (resource) => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = resource.path;
    link.download = resource.filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Resources - SMCI | Downloads</title>
        <meta name="description" content="Download company profiles, product catalogues, and technical resources." />
      </Helmet>

      <div className="bg-white min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Downloads</h1>
            <p className="text-lg text-gray-600">Access helpful documents and company information</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {resources.map((res, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all hover:bg-blue-50"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{res.title}</h3>
                    <p className="text-sm text-gray-500">{res.type} • {res.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(res)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
