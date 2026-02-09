import React from 'react';
import { School, Building, Users, MapPin, Award, Briefcase } from 'lucide-react';

export default function Clients() {
  const governmentSchools = [
    "Masotsha High School", "Magwegwe High school", "Inyanda High", "Emakhandeni High",
    "St. Bernards High", "Pumula High", "Mzilikazi High", "St. Columbus High", 
    "Hamilton High", "Luveve High", "Amhlophe High", "Lobengula High", "Emganwini High",
    "Mcumbatha High", "Mandwandwe High", "Sikhulile High", "Entumbane High", "Montrose High",
    "Cowdray Park High", "Robert Tredgold Primary", "Inkanyezi Primary", "Inzwananzi Primary",
    "Fusi Primary", "Mazwi Primary", "Barham Green Primary", "Sihlengeni Primary", "Losikeyi Primary",
    "Emakhandeni Primary", "Mzilikazi Primary", "Hugh Beatle Primary", "Rangemore Primary",
    "Mbuyazwe Primary", "Emsizini Primary", "Mhali Primary", "Amaswazi Primary", "Khumalo Primary",
    "Greenfield Primary"
  ];

  const localGovernmentSchools = [
    "Dumezweni Primary", "Ngwalongwalo Primary", "Godlwayo Primary", "Mawaba Primary",
    "Josiah Chinamano Primary"
  ];

  const privateSchools = [
    "Fairview Primary", "Maranatha Primary", "Maranatha High", "Tennyson Hlabangana Primary",
    "Mguza SDA Primary", "Percy Ibboston Primary", "Thembiso Primary", "Sir Humphrey Special",
    "Simanyene Special", "St. Francis Primary", "Mtshabezi High", "SOS Primary",
    "Masiyephambili College"
  ];

  const districtEducationOffices = [
    "Bulawayo Central", "Imbizo", "Khami", "Mzilikazi", "Reigate"
  ];

  const provincialEducationOffices = [
    "Provincial Education Offices Bulawayo"
  ];

  const councils = [
    "Bulawayo City", "Gwanda Rural District"
  ];

  const privateOrganisations = [
    "Calderwood", "Bryce Hendrie and Partners - Law Firm",
    "Clothing Industry Pension Fund - Pension Fund", "Fiscal Consultancy - Accounting and Audit Firm",
    "Royal Pharmacy - Pharmacy", "Innscor - Bulawayo Head Offices - Fast Foods Administration",
    "Afdaal Investments - Money Lending Company", "Medsup and Laboratory Supplies - Weather Stations and Laboratory Supplies",
    "Michview Enterprises - Livestock Dealer", "Millenium Marketing - Medical and health Suppliers",
    "Brethren In Christ Church - Lobengula, Central - Church", "Brethren In Christ Church - Head Office Treasury - Church Administrators",
    "Safesec Security Services", "Highway Security Security Companies"
  ];

  const ngos = [
    "ZimCare Trust - Sir Humphrey Gibbs Training Centre - Sibantubanye Special School",
    "Jairos Jiri Association", "Focus Development Trust", "Young Men's Christian Association Bulawayo Branch and Head Office"
  ];

  const travelTourism = [
    "Elgiboh Travel Agency", "Zimparks - Hwange", "School of Mines"
  ];

  const others = [
    "MAGENTS (Magwegwe North Self-Sustaining Society)",
    "Graphic Designing Company Reliable Designs"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Valued Clients</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            "Efficiency Our Virtue, Experience Our Attitude!!!"
          </p>
          <p className="text-lg mt-4 opacity-80">
            Trusted by over 100+ organizations across Zimbabwe for more than 22 years
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        
        {/* Government Schools */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <School className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Government Schools</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {governmentSchools.map((school, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                <span className="text-gray-700 font-medium">{school}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Local Government Schools */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Building className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Local Government Schools</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {localGovernmentSchools.map((school, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-green-50 transition-colors">
                <span className="text-gray-700 font-medium">{school}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Private Schools */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Private Schools</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {privateSchools.map((school, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-purple-50 transition-colors">
                <span className="text-gray-700 font-medium">{school}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education Offices */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <MapPin className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Education Offices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-4">District Education Offices</h3>
              <div className="grid grid-cols-1 gap-3">
                {districtEducationOffices.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-orange-50 transition-colors">
                    <span className="text-gray-700 font-medium">{office}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Provincial Education Offices</h3>
              <div className="grid grid-cols-1 gap-3">
                {provincialEducationOffices.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-orange-50 transition-colors">
                    <span className="text-gray-700 font-medium">{office}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Councils */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Building className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Councils</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {councils.map((council, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-red-50 transition-colors">
                <span className="text-gray-700 font-medium">{council}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Private Organizations */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Private Organizations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {privateOrganisations.map((org, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-indigo-50 transition-colors">
                <span className="text-gray-700 font-medium">{org}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NGOs */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Non-Governmental Organisations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {ngos.map((ngo, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 hover:bg-teal-50 transition-colors">
                <span className="text-gray-700 font-medium">{ngo}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Travel and Tourism */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <MapPin className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Travel and Tourism Sector</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {travelTourism.map((entity, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-pink-50 transition-colors">
                <span className="text-gray-700 font-medium">{entity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Others */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-gray-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Other Sectors</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {others.map((other, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors">
                <span className="text-gray-700 font-medium">{other}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Stats */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Client Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">100+</h3>
              <p className="text-gray-700">Total Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-green-600 mb-2">45+</h3>
              <p className="text-gray-700">Educational Institutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">22+</h3>
              <p className="text-gray-700">Years of Service</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">8</h3>
              <p className="text-gray-700">Sectors Served</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
