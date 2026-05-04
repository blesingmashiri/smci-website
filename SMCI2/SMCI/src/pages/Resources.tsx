import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, AlertCircle, CheckCircle, ExternalLink, Calendar, User } from 'lucide-react';

interface Resource {
  title: string;
  size: string;
  type: string;
  filename: string;
  path: string;
  description: string;
  lastUpdated: string;
  category: string;
  downloads?: number;
}

const Resources = () => {
  const [downloadStatus, setDownloadStatus] = useState<{[key: string]: 'loading' | 'success' | 'error' | undefined}>({});
  
  const resources: Resource[] = [
    { 
      title: 'SMCI Company Profile', 
      size: '2.4 MB', 
      type: 'PDF',
      filename: 'smci-company-profile.pdf',
      path: '/documents/smci-company-profile.pdf',
      description: 'Complete company information, services overview, and corporate details',
      lastUpdated: '2024-11-01',
      category: 'Company',
      downloads: 1250
    },
    { 
      title: 'Product Catalogue 2024', 
      size: '5.1 MB', 
      type: 'PDF',
      filename: 'product-catalogue-2024.pdf',
      path: '/documents/product-catalogue-2024.pdf',
      description: 'Comprehensive product catalogue with specifications, pricing, and technical details',
      lastUpdated: '2024-10-15',
      category: 'Products',
      downloads: 890
    },
    { 
      title: 'Service Agreement Template', 
      size: '1.2 MB', 
      type: 'DOCX',
      filename: 'service-agreement-template.docx',
      path: '/documents/service-agreement-template.docx',
      description: 'Customizable service agreement template for ICT solutions and maintenance contracts',
      lastUpdated: '2024-09-30',
      category: 'Legal',
      downloads: 456
    },
    { 
      title: 'Lab Design Specifications', 
      size: '3.8 MB', 
      type: 'PDF',
      filename: 'lab-design-specifications.pdf',
      path: '/documents/lab-design-specifications.pdf',
      description: 'Technical specifications and requirements for computer laboratory design projects',
      lastUpdated: '2024-11-10',
      category: 'Technical',
      downloads: 678
    },
    { 
      title: 'ICT Maintenance Checklist', 
      size: '890 KB', 
      type: 'PDF',
      filename: 'ict-maintenance-checklist.pdf',
      path: '/documents/ict-maintenance-checklist.pdf',
      description: 'Comprehensive maintenance checklist for ICT infrastructure and equipment',
      lastUpdated: '2024-10-20',
      category: 'Technical',
      downloads: 342
    },
    { 
      title: 'School ICT Policy Template', 
      size: '1.5 MB', 
      type: 'DOCX',
      filename: 'school-ict-policy-template.docx',
      path: '/documents/school-ict-policy-template.docx',
      description: 'Customizable ICT policy template for educational institutions',
      lastUpdated: '2024-11-05',
      category: 'Education',
      downloads: 523
    }
  ];

  const handleDownload = async (resource: Resource) => {
    setDownloadStatus(prev => ({ ...prev, [resource.filename]: 'loading' }));
    
    try {
      // Check if file exists by fetching headers
      const response = await fetch(resource.path, { method: 'HEAD' });
      
      if (!response.ok) {
        throw new Error('File not found');
      }
      
      // Create a temporary link to trigger download
      const link = document.createElement('a');
      link.href = resource.path;
      link.download = resource.filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus(prev => ({ ...prev, [resource.filename]: 'success' }));
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [resource.filename]: undefined }));
      }, 3000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus(prev => ({ ...prev, [resource.filename]: 'error' }));
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus(prev => ({ ...prev, [resource.filename]: undefined }));
      }, 3000);
    }
  };

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-600" />;
      case 'docx':
      case 'doc':
        return <FileText className="w-6 h-6 text-blue-600" />;
      case 'xlsx':
      case 'xls':
        return <FileText className="w-6 h-6 text-green-600" />;
      default:
        return <FileText className="w-6 h-6 text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Company': return 'bg-purple-100 text-purple-800';
      case 'Products': return 'bg-blue-100 text-blue-800';
      case 'Legal': return 'bg-red-100 text-red-800';
      case 'Technical': return 'bg-green-100 text-green-800';
      case 'Education': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Resources - SMCI | Downloads</title>
        <meta name="description" content="Download company profiles, product catalogues, and technical resources." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resources & Downloads</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive collection of documents, templates, and technical resources to support your ICT needs
            </p>
          </motion.div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { number: "6", label: "Documents Available", icon: FileText },
              { number: "4K+", label: "Total Downloads", icon: Download },
              { number: "5", label: "Categories", icon: User },
              { number: "24/7", label: "Availability", icon: Calendar }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Resource Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          {getFileIcon(resource.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg mb-1">{resource.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                              {resource.category}
                            </span>
                            <span>{resource.type}</span>
                            <span>·</span>
                            <span>{resource.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resource Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
                    
                    {/* Resource Metadata */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Updated: {resource.lastUpdated}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Download className="w-4 h-4" />
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleDownload(resource)}
                        disabled={downloadStatus[resource.filename] === 'loading'}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {downloadStatus[resource.filename] === 'loading' && (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        )}
                        {downloadStatus[resource.filename] === 'success' && (
                          <CheckCircle className="w-4 h-4" />
                        )}
                        {downloadStatus[resource.filename] === 'error' && (
                          <AlertCircle className="w-4 h-4" />
                        )}
                        {downloadStatus[resource.filename] !== 'loading' && (
                          <Download className="w-4 h-4" />
                        )}
                        {downloadStatus[resource.filename] === 'loading' && 'Downloading...'}
                        {downloadStatus[resource.filename] === 'success' && 'Downloaded!'}
                        {downloadStatus[resource.filename] === 'error' && 'Error - Try Again'}
                        {!downloadStatus[resource.filename] && 'Download'}
                      </button>
                      
                      <a
                        href={resource.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                        title="Preview in new tab"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Status Message */}
                    {downloadStatus[resource.filename] === 'error' && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-700 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Download failed. Please try again or contact support.
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-blue-50 rounded-lg p-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for or having trouble with downloads? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@smci.co.zw?subject=Resource Download Help&body=Hi SMCI Team,%0A%0AI'm having trouble with downloading resources from your website.%0A%0ACould you please help me with:"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4" />
                  Email Support
                </a>
                <a
                  href="tel:+263772351216"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resources;
