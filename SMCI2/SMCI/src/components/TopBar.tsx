import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-blue-600 text-white text-sm fixed top-0 left-0 right-0 z-50" style={{ willChange: 'transform' }}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        
        {/* Left */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <Mail size={14} />
            admin@smci.co.zw
          </span>
          <span className="flex items-center gap-1">
            <Phone size={14} />
            +263 292 884988
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Phone size={14} />
            +263 772 351 216
          </span>
        </div>

        {/* Right */}
        <div className="hidden sm:block italic text-blue-100 text-center md:text-right">
          Efficiency Our Virtue, Experience Our Attitude!!!
        </div>
      </div>
    </div>
  );
}
