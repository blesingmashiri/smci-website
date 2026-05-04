import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
              <img 
                src="/images/logo/smci-logo.png" 
                alt="SMCI Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About" },
                { path: "/services", name: "Services" },
                { path: "/portfolio", name: "Clientelle Portfolio" },
                { path: "/shop", name: "Shop" },
                { path: "/team", name: "Team" },
                { path: "/training", name: "Training" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive(item.path)
                      ? "border-blue-500 text-white"
                      : "border-transparent text-gray-300 hover:border-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-1 pt-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300">
                  Events
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="py-1">
                    <Link
                      to="/events/nash-bulawayo-music-2025"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Nash Music Competition 2025
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            { path: "/", name: "Home" },
            { path: "/about", name: "About" },
            { path: "/services", name: "Services" },
            { path: "/portfolio", name: "Clientelle Portfolio" },
            { path: "/shop", name: "Shop" },
            { path: "/team", name: "Team" },
            { path: "/training", name: "Training" },
            { path: "/contact", name: "Contact" },
            { path: "/events/nash-bulawayo-music-2025", name: "Nash Music Competition 2025" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
