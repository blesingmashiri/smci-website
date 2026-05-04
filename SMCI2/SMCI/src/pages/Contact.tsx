import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Smartphone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact SMCI - Get in Touch</title>
        <meta name="description" content="Contact SMCI in Bulawayo. Phone: +263 292 884998. Email: admin@smci.co.zw. Visit us for all your IT needs." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 italic">"Efficiency Our Virtue, Experience Our Attitude!!!"</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Physical Address</h3>
                      <p className="text-gray-600">
                        Suite No. 301, CIPF Centre, Jason Moyo Street, Between 9th & 10th Avenue, Bulawayo, Zimbabwe
                      </p>
                      <a
                        href="https://www.google.com/maps?q=Suite+No.+301+CIPF+Centre,+Jason+Moyo+Street,+Bulawayo,+Zimbabwe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                      >
                        <MapPin className="w-4 h-4" /> View on Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telephone</h3>
                      <p className="text-gray-600 font-medium">+263 292 884998</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Smartphone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Mobile / WhatsApp</h3>
                      <div className="text-gray-600 space-y-1">
                                                <p>+263 772 673 373</p>
                        <p>+263 772 673 374</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Addresses</h3>
                      <div className="text-gray-600 space-y-1">
                        <a href="mailto:admin@smci.co.zw" className="block hover:text-blue-600">admin@smci.co.zw</a>
                        <a href="mailto:sales@smci.co.zw" className="block hover:text-blue-600">sales@smci.co.zw</a>
                        <a href="mailto:support@smci.co.zw" className="block hover:text-blue-600">support@smci.co.zw</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Inquiry about Lab Design..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Email Button */}
                  <button
                    type="button"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 flex justify-center items-center gap-2 rounded-lg font-semibold transition-colors"
                    onClick={() => {
                      const subject = encodeURIComponent(formData.subject || "SMCI Inquiry");
                      const body = encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}` 
                      );
                      window.location.href = `mailto:admin@smci.co.zw?subject=${subject}&body=${body}`;
                    }}
                  >
                    <Send className="w-4 h-4" /> Send via Email
                  </button>

                  {/* WhatsApp Button */}
                  <button
                    type="button"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 flex justify-center items-center gap-2 rounded-lg font-semibold transition-colors"
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                      );
                      window.location.href = `https://wa.me/263292884998?text=${message}`;
                    }}
                  >
                    <Send className="w-4 h-4" /> Send via WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
