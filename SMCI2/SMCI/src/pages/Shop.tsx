import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Filter, Mail, Phone } from 'lucide-react';
import QuoteCart from '../components/QuoteCart';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);
  const [isQuoteCartOpen, setIsQuoteCartOpen] = useState(false);

  const categories = ['All', 'Laptops', 'Desktops', 'Printers', 'Accessories'];

  // SMCI products
  const products: Product[] = [
    { id: 1, name: 'HP ProBook 450', category: 'Laptops', price: '$850', image: '/images/shop/hp-probook-450.jpg' },
    { id: 2, name: 'Dell Vostro Tower', category: 'Desktops', price: '$720', image: '/images/shop/dell-vostro-tower.jpeg' },
    { id: 3, name: 'Epson EcoTank L3150', category: 'Printers', price: '$250', image: '/images/shop/epson-ecotank.jpeg' },
    { id: 4, name: 'Logitech Wireless Mouse', category: 'Accessories', price: '$25', image: '/images/shop/logitech-mouse.jpeg' },
    { id: 5, name: 'Lenovo ThinkPad E14', category: 'Laptops', price: '$950', image: '/images/shop/lenovo-thinkpad.jpeg' },
    { id: 6, name: 'Canon ImageRUNNER', category: 'Printers', price: '$1200', image: '/images/shop/canon-imagerunner.jpeg' },
    { id: 7, name: 'Samsung 24" Monitor', category: 'Accessories', price: '$180', image: '/images/shop/samsung-monitor.jpeg' },
    { id: 8, name: 'HP EliteDesk 800', category: 'Desktops', price: '$890', image: '/images/shop/hp-elitedesk.jpeg' },
  ];

  // Filter products by category & search
  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToQuote = (product: Product) => {
    const existingItem = quoteItems.find(item => item.id === product.id);
    
    if (existingItem) {
      alert(`${product.name} is already in your quote!`);
      return;
    }
    
    setQuoteItems([...quoteItems, product]);
    
    // Create a more prominent notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-[9999] flex items-center gap-3 transform transition-all duration-300 translate-x-full';
    notification.innerHTML = `
      <svg class="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <div class="font-semibold text-lg">Added to Quote!</div>
        <div class="text-sm opacity-90">${product.name} - ${product.price}</div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
      notification.classList.add('translate-x-0');
    }, 100);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  };

  const handleRemoveFromQuote = (productId: number) => {
    setQuoteItems(quoteItems.filter(item => item.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  // Pagination logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      // Scroll to top of products
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Floating Quote Cart Button */}
      <button
        onClick={() => setIsQuoteCartOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 z-[9998] flex items-center gap-2 hover:scale-110"
      >
        <ShoppingCart size={20} />
        {quoteItems.length > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 font-bold animate-pulse">
            {quoteItems.length}
          </span>
        )}
      </button>

      {/* Banner */}
      <div className="h-64 bg-gray-900 relative overflow-hidden">
        <img 
          src="/images/shop/hero-2.jpg" 
          alt="Product Showcase" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0" style={{backgroundColor: 'rgba(10, 37, 64, 0.85)'}} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Product Catalogue</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === cat
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Top bar with results count and search */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  {filteredProducts.length} results found
                  {searchTerm && ` for "${searchTerm}"`}
                  {activeCategory !== 'All' && ` in ${activeCategory}`}
                </p>
                {(searchTerm || activeCategory !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('All');
                      setPage(1);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-700 underline"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* No results message */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('All');
                      setPage(1);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                  <a
                    href="mailto:admin@smci.co.zw?subject=Product Inquiry - SMCI Shop&body=Hi SMCI Team,%0A%0AI'm interested in your products but couldn't find what I'm looking for.%0A%0ACould you help me with:%0A- [Describe what you're looking for]%0A- Your budget range%0A- Any specific requirements%0A%0AThank you!"
                    className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Email Us for Help
                  </a>
                </div>
              </div>
            )}

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden group"
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
                    <h3 className="font-semibold text-gray-900 mt-2 mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">Starting from <span className="text-gray-900 font-bold">{product.price}</span></p>
                    <button
                      onClick={() => handleAddToQuote(product)}
                      className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Quote
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              <button 
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    pageNum === page 
                      ? 'bg-blue-600 text-white' 
                      : 'border hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              
              <button 
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Cart Modal */}
      <QuoteCart
        isOpen={isQuoteCartOpen}
        onClose={() => setIsQuoteCartOpen(false)}
        items={quoteItems}
        onRemoveItem={handleRemoveFromQuote}
        onClearCart={handleClearQuote}
      />

      {/* Contact Section */}
      <section className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Order?</h2>
            <p className="text-gray-600">Contact us for product inquiries, bulk orders, or technical support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Email Contact */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-4">Get a response within 24 hours</p>
              <a 
                href="mailto:admin@smci.co.zw?subject=SMCI Shop Inquiry&body=Hi SMCI Team,%0A%0AI would like to inquire about:"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                admin@smci.co.zw
              </a>
              <br />
              <a 
                href="mailto:sales@smci.co.zw?subject=SMCI Sales Inquiry&body=Hi SMCI Sales Team,%0A%0AI'm interested in:"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                sales@smci.co.zw
              </a>
              <br />
              <a 
                href="mailto:support@smci.co.zw?subject=SMCI Support Request&body=Hi SMCI Support Team,%0A%0AI need help with:"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                support@smci.co.zw
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-4">Mon-Fri, 8AM-5PM</p>
              <a 
                href="tel:+263292884988"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm block mb-1"
              >
                +263 292 884 988
              </a>
              <a 
                href="tel:+263772351216"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                +263 772 351 216
              </a>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 2.44 4.022c1.634 1.475 3.603 2.088 4.423 2.286.198.05.394.074.57.074.697 0 1.635-.446 1.865-1.04.23-.594.23-1.104.161-1.21-.069-.107-.267-.173-.57-.34z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-4">Quick responses</p>
              <a 
                href="https://wa.me/263772351216?text=Hi SMCI Team! I'm interested in your products."
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
