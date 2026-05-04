# Set paths
$ProjectPath = "C:\Users\vmash\OneDrive\Desktop\SMCI2\SMCI"
$HomePath = "$ProjectPath\src\pages\Home.tsx"

# Backup current Home.tsx
$BackupPath = "$HomePath.bak_$(Get-Date -Format 'yyyyMMdd_HHmmss')"
Copy-Item -Path $HomePath -Destination $BackupPath
Write-Output "Backup created at $BackupPath"

# New full Home.tsx content
$NewContent = @'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-bold text-blue-900">HOME PAGE UPDATED ✅</h1>
        <p className="text-lg text-blue-900 max-w-3xl text-center mt-4 mb-8">
          SMCI delivers reliable ICT solutions for education, business, and
          institutions across Zimbabwe — from hardware and networking to
          training and digital transformation.
        </p>
        <div className="flex gap-4">
          <Link
            to="/services"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">What We Do Best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Computer Hardware & Sales", desc: "Laptops, desktops, servers, printers and accessories." },
              { title: "Networking Solutions", desc: "Structured cabling, wireless networks, routers and firewalls." },
              { title: "Software & Security", desc: "Operating systems, business software and CCTV solutions." },
              { title: "E-Learning Solutions", desc: "Smart classrooms and digital education platforms." },
              { title: "IT Training", desc: "Professional and institutional ICT training programs." },
              { title: "Maintenance & Support", desc: "Repairs, troubleshooting and annual maintenance contracts." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="text-blue-700 font-semibold hover:underline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-8 mt-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <img src="/images/logo/smci-logo.png" alt="SMCI Logo" className="h-10 w-auto mb-2" />
            <p className="text-gray-400 text-sm">
              SMCI<br/>
              Sandcircle Management Consultancy International<br/>
              "Efficiency Our Virtue, Experience Our Attitude!!!"<br/>
              Registered Name: Sandcircle Trading Private Limited<br/>
              Reg Number: 1033/2001<br/>
              ZIMRA TIN: 2000261674<br/>
              VAT: 10020676
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <p className="text-gray-400">Bulawayo, Zimbabwe</p>
            <p className="text-gray-400">+263 292 884988</p>
            <p className="text-gray-400">+263 772 351 216</p>
            <p className="text-gray-400">admin@smci.co.zw</p>
            <p className="text-gray-400">sales@smci.co.zw</p>
            <p className="text-gray-400">support@smci.co.zw</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
              <li><a href="/shop" className="hover:text-blue-400">Shop Hardware</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400">Client Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest IT solutions and offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Sandcircle Trading Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
'@

# Overwrite Home.tsx
Set-Content -Path $HomePath -Value $NewContent -Force
Write-Output "Home.tsx has been successfully updated."

# Navigate to project folder
Set-Location $ProjectPath

# Start Vite dev server
Write-Output "Starting Vite development server..."
Start-Process "cmd.exe" "/k npm run dev"
