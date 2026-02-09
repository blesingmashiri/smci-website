import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed Successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">SMCI</span>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Sandcircle Management<br/>Consultancy International</p>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 italic">
              "Efficiency Our Virtue, Experience Our Attitude!!!"
            </p>

            <div className="text-xs text-gray-500 space-y-1 mb-6 border-l-2 border-gray-700 pl-3">
              <p>Registered Name: Sandcircle Trading Private Limited</p>
              <p>Reg Number: 1033/2001</p>
              <p>ZIMRA TIN: 2000261674</p>
              <p>VAT: 10020676</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">Bulawayo, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300 flex flex-col">
                  <a href="tel:+263292884988" className="hover:text-blue-400">+263 292 884988</a>
                  <a href="tel:+263772351216" className="hover:text-blue-400">+263 772 351 216</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300 flex flex-col">
                  <a href="mailto:admin@smci.co.zw" className="hover:text-blue-400">admin@smci.co.zw</a>
                  <a href="mailto:sales@smci.co.zw" className="hover:text-blue-400">sales@smci.co.zw</a>
                  <a href="mailto:support@smci.co.zw" className="hover:text-blue-400">support@smci.co.zw</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block text-white">Quick Links</span>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/shop" className="hover:text-blue-400 transition-colors">Shop Hardware</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Client Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/timeline" className="hover:text-blue-400 transition-colors">Timeline</Link></li>
              <li><Link to="/process" className="hover:text-blue-400 transition-colors">Our Process</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/resources" className="hover:text-blue-400 transition-colors">Resources & Downloads</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <span className="text-lg font-semibold mb-4 block text-white">Newsletter</span>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest IT solutions and offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
                required
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Sandcircle Trading Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Efficiency Our Virtue, Experience Our Attitude!!!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
