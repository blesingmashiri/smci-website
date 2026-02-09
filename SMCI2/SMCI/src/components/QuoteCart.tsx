import React, { useState } from 'react';
import { X, ShoppingCart, Mail, Phone, User, MessageSquare } from 'lucide-react';

interface QuoteItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface QuoteCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export default function QuoteCart({ isOpen, onClose, items, onRemoveItem, onClearCart }: QuoteCartProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const quoteData = {
      customerInfo: formData,
      items: items,
      total: items.length,
      timestamp: new Date().toISOString()
    };

    // Create email content
    const emailSubject = `Quote Request from ${formData.name} - ${items.length} items`;
    const emailBody = `
Quote Request Details:

Customer Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Message: ${formData.message || 'No additional message'}

Requested Items (${items.length}):
${items.map((item, index) => 
  `${index + 1}. ${item.name} - ${item.category} - ${item.price}`
).join('\n')}

Total Items: ${items.length}
Request Date: ${new Date().toLocaleString()}

Please contact the customer to provide a detailed quote.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:admin@smci.co.zw?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Alternative: Send to sales as well
    const mailtoLinkSales = `mailto:sales@smci.co.zw?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Try to open email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    alert(`Quote request prepared!\n\nYour email client should open with the quote details.\n\nItems: ${items.length}\nWe'll contact you soon.`);
    
    // Reset form and clear cart
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    onClearCart();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <ShoppingCart size={24} />
              <h2 className="text-xl font-bold">Request a Quote</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-blue-700 rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
              title="Close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)] overflow-y-auto">
            {/* Cart Items */}
            <div className="lg:w-1/2 p-6 border-r border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Selected Items ({items.length})</h3>
              
              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No items in your quote</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="text-blue-600 font-semibold">{item.price}</p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {items.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="mt-4 w-full text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors"
                >
                  Clear All Items
                </button>
              )}
            </div>

            {/* Quote Form */}
            <div className="lg:w-1/2 p-6">
              <h3 className="font-semibold text-lg mb-4">Your Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <User size={16} className="inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail size={16} className="inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone size={16} className="inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+263 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MessageSquare size={16} className="inline mr-1" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={items.length === 0}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Mail size={16} className="inline mr-2" />
                    Send via Email
                  </button>
                </div>
                
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      // Create WhatsApp message
                      const whatsappMessage = `
*SMCI Quote Request*

*Customer Information:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}

*Requested Items (${items.length}):*
${items.map((item, index) => 
  `${index + 1}. ${item.name} - ${item.category} - ${item.price}`
).join('\n')}

*Message:* ${formData.message || 'No additional message'}

Total Items: ${items.length}
Date: ${new Date().toLocaleString()}

Please contact me for a detailed quote.
                      `.trim();

                      const whatsappLink = `https://wa.me/263772351216?text=${encodeURIComponent(whatsappMessage)}`;
                      window.open(whatsappLink, '_blank');
                      
                      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                      onClearCart();
                      onClose();
                    }}
                    disabled={items.length === 0}
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3 font-semibold text-base min-h-[48px]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 2.44 4.022c1.634 1.475 3.603 2.088 4.423 2.286.198.05.394.074.57.074.697 0 1.635-.446 1.865-1.04.23-.594.23-1.104.161-1.21-.069-.107-.267-.173-.57-.34z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
