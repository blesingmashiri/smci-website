import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Users, Calendar, ShoppingCart, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className="w-full bg-white shadow relative z-40" 
        style={{ 
          position: 'fixed',
          top: '36px',
          left: 0,
          right: 0,
          willChange: 'transform'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-24">

            {/* Logo - Always Visible */}
            <div className="flex items-center shrink-0 min-w-[140px] cursor-pointer" onClick={() => window.location.href = '/'}>
              <img
                src="/images/logo/smci-logo.png"
                alt="SMCI Sandcircle"
                className="h-[54px] md:h-[72px] w-auto object-contain"
              />
            </div>

            {/* Full Navigation - Desktop & Large Tablets Only */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="relative">
                <Link 
                  to="/" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Home size={14} />
                  Home
                </Link>
                {isActive("/") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/about" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/about") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Info size={14} />
                  About
                </Link>
                {isActive("/about") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/services" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/services") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Briefcase size={14} />
                  Services
                </Link>
                {isActive("/services") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/portfolio" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/portfolio") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Briefcase size={14} />
                  Clientelle Portfolio
                </Link>
                {isActive("/portfolio") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/team" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/team") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Users size={14} />
                  Team
                </Link>
                {isActive("/team") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/events" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/events") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Calendar size={14} />
                  Events
                </Link>
                {isActive("/events") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/shop" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/shop") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <ShoppingCart size={14} />
                  Shop
                </Link>
                {isActive("/shop") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/careers" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/careers") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Users size={14} />
                  Careers
                </Link>
                {isActive("/careers") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
              <div className="relative">
                <Link 
                  to="/contact" 
                  className={`hover:text-blue-600 transition-colors flex items-center gap-2 ${
                    isActive("/contact") ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  <Phone size={14} />
                  Contact
                </Link>
                {isActive("/contact") && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                )}
              </div>
            </nav>

            {/* Menu Button - iPad & Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={26} className="text-gray-700" />
              ) : (
                <Menu size={26} className="text-gray-700" />
              )}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY - Full screen below TopBar */}
      {isMobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '90px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 9999,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            display: 'flex',
            flexDirection: 'column'
          }}
          className="xl:hidden"
        >
          {/* Menu Content - No Header */}
          <div style={{ 
            paddingLeft: '16px', 
            paddingRight: '16px', 
            paddingTop: '0px',
            flex: 1,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            <Link
              to="/"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/') ? '#2563eb' : 'transparent',
                color: isActive('/') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Home size={18} />
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/about') ? '#2563eb' : 'transparent',
                color: isActive('/about') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Info size={18} />
              About
            </Link>

            <Link
              to="/services"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/services') ? '#2563eb' : 'transparent',
                color: isActive('/services') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Briefcase size={18} />
              Services
            </Link>

            <Link
              to="/portfolio"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/portfolio') ? '#2563eb' : 'transparent',
                color: isActive('/portfolio') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Briefcase size={18} />
              Clientelle Portfolio
            </Link>

            <Link
              to="/team"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/team') ? '#2563eb' : 'transparent',
                color: isActive('/team') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Users size={18} />
              Team
            </Link>

            <Link
              to="/events"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/events') ? '#2563eb' : 'transparent',
                color: isActive('/events') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Calendar size={18} />
              Events
            </Link>

            <Link
              to="/shop"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/shop') ? '#2563eb' : 'transparent',
                color: isActive('/shop') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <ShoppingCart size={18} />
              Shop
            </Link>

            <Link
              to="/careers"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/careers') ? '#2563eb' : 'transparent',
                color: isActive('/careers') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Users size={18} />
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: isActive('/contact') ? '#2563eb' : 'transparent',
                color: isActive('/contact') ? '#ffffff' : '#2563eb',
                border: 'none',
                borderRadius: '8px',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              <Phone size={18} />
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
