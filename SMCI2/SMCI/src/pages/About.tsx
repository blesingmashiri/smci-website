import React from 'react';



export default function About() {

  return (

    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">

        <div className="container mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SMCI</h1>

          <p className="text-xl md:text-2xl opacity-90">

            "Efficiency Our Virtue, Experience Our Attitude!!!"

          </p>

        </div>

      </section>



      {/* Main Content */}

      <main className="container mx-auto px-4 py-12">

        {/* Introductory Letter Context */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Sandcircle Management Consultancy International</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We have included herewith our profile, reference list, and comprehensive information about our services and capabilities. 
              Kindly go through our company profile to understand our expertise and the value we bring to our clients.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-xl font-semibold text-blue-600 mb-4">
                We would like to partner with you for all your ICT needs
              </p>
              <p className="text-gray-600">
                With over 25 years of experience and a proven track record, SMCI is ready to provide world-class ICT solutions 
                that meet your specific requirements and exceed your expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Who We Are</h2>

          

          <div className="bg-blue-50 rounded-lg p-6 mb-8">

            <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">Our Vision</h3>

            <p className="text-lg text-gray-700 text-center leading-relaxed">

              To be the preferred one stop choice in the provision of ICT hardware and software based solutions packages.

            </p>

          </div>



          <div className="bg-green-50 rounded-lg p-6 mb-8">

            <h3 className="text-2xl font-semibold text-green-600 mb-4 text-center">How We Achieve This</h3>

            <p className="text-lg text-gray-700 text-center leading-relaxed">

              Design, acquire, and produce world-class standards in ICT based packages that will satisfy our wide ranging Clientele needs using optimal resources to ensure maximum returns on the clients' investments and our organisation.

            </p>

          </div>



          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">About Us</h3>

              <p className="text-gray-700 mb-4 leading-relaxed">

                Sandcircle Management Consultancy International (SMCI) is a wholly Zimbabwean and Indigenously owned business undertaking which is providing spot-on solutions to wide ranging industries and clientele as stated in the Clientele list.

              </p>

              <p className="text-gray-700 leading-relaxed">

                The far-reaching Consultancy product Clientelle Portfolio incorporates the below detailed worlds.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <img src="/images/about/smci-office.jpeg" alt="SMCI Office" className="rounded-lg shadow-md w-full h-48 object-cover" />

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>IT Solutions</span>

              </div>

            </div>

          </div>

        </section>



        {/* Company Profile */}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Company Profile</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>

              <p className="text-gray-700 mb-4 leading-relaxed">

                Sandcircle Management Consultancy International (SMCI) is a premier IT solutions provider based in Bulawayo, Zimbabwe. Registered as Sandcircle Trading Private Limited (Reg No: 1033/2001) on 10 October 2001, we have over 25 years of trading experience.

              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">

                We are a duly tax-compliant organization (ZIMRA TIN: 2000261674, VAT: 10020676). Our journey began with a commitment to providing high-quality IT consultancy, and today we stand as a leader in educational and corporate technology solutions.

              </p>

              <p className="text-gray-700 leading-relaxed">

                From designing state-of-the-art computer labs to providing comprehensive training programs like Pastel Accounting and E-Learning solutions, SMCI is dedicated to technological advancement in Zimbabwe.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <img src="/images/about/smci-office.jpeg" alt="SMCI Office" className="rounded-lg shadow-md w-full h-48 object-cover" />

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>IT Solutions</span>

              </div>

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>Training Center</span>

              </div>

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>Client Support</span>

              </div>

            </div>

          </div>

        </section>



        {/* Quick Facts */}

        <section className="bg-blue-50 rounded-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Quick Facts</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl font-semibold text-blue-600 mb-2">Registration Date</h3>

              <p className="text-gray-700">10 October 2001</p>

            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl font-semibold text-blue-600 mb-2">Registration No.</h3>

              <p className="text-gray-700">1033/2001</p>

            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl font-semibold text-blue-600 mb-2">ZIMRA TIN</h3>

              <p className="text-gray-700">2000261674</p>

            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">

              <h3 className="text-xl font-semibold text-blue-600 mb-2">VAT Number</h3>

              <p className="text-gray-700">10020676</p>

            </div>

          </div>

          <div className="text-center mt-8">

            <div className="bg-white p-6 rounded-lg shadow-md inline-block">

              <h3 className="text-xl font-semibold text-blue-600 mb-2">Experience</h3>

              <p className="text-2xl font-bold text-gray-800">22+ Years</p>

            </div>

          </div>

        </section>



        {/* Vision & Mission */}

        <section className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-white rounded-lg shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>

            <p className="text-gray-700 leading-relaxed">

              To be the leading Information Technology Consultancy in Zimbabwe, recognized for innovation, reliability, and excellence in service delivery.

            </p>

          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>

            <p className="text-gray-700 leading-relaxed">

              To provide superior, cost-effective IT solutions and training that empower individuals and organizations to achieve their full potential through technology.

            </p>

          </div>

        </section>



        {/* Values */}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">

            <div className="p-4">

              <h3 className="font-semibold text-blue-600 mb-2">Honesty</h3>

              <p className="text-sm text-gray-600">Transparent and truthful in all our dealings</p>

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-blue-600 mb-2">Transparency</h3>

              <p className="text-sm text-gray-600">Open communication and clear processes</p>

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-blue-600 mb-2">Courtesy</h3>

              <p className="text-sm text-gray-600">Respectful and professional interactions</p>

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-blue-600 mb-2">Efficiency</h3>

              <p className="text-sm text-gray-600">Optimal resource use and timely delivery</p>

            </div>

            <div className="p-4">

              <h3 className="font-semibold text-blue-600 mb-2">Proficiency</h3>

              <p className="text-sm text-gray-600">Expert knowledge and skilled execution</p>

            </div>

          </div>

        </section>



        {/* Our Specialized Worlds */}

        <section className="bg-gray-50 rounded-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Specialized Worlds</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-blue-600 mb-3">Designing and Fitting World</h3>

              <ul className="text-gray-600 space-y-1 text-sm">

                <li>• Computer Lab Designing</li>

                <li>• Floor Tiling</li>

                <li>• Carpentry</li>

                <li>• Metal Fabrication</li>

                <li>• Burglar ceiling, windows and doors</li>

                <li>• Electrical Wiring Networking</li>

                <li>• Windows Blinds</li>

              </ul>

            </div>

            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-blue-600 mb-3">Computer Hardware World</h3>

              <ul className="text-gray-600 space-y-1 text-sm">

                <li>• Desktops and Desktop Parts</li>

                <li>• Laptops and Laptops Parts</li>

                <li>• Printers, Scanners, Projectors</li>

                <li>• Electrical Projector Boards</li>

                <li>• Networking Hardware</li>

                <li>• Learning aids and accessories</li>

                <li>• Servicing, repairs and maintenance</li>

              </ul>

            </div>

            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-blue-600 mb-3">Computer Software World</h3>

              <ul className="text-gray-600 space-y-1 text-sm">

                <li>• Operating Systems (All versions)</li>

                <li>• Microsoft Office (All versions)</li>

                <li>• Antivirus Solutions</li>

                <li>• Educational Software</li>

                <li>• Research Encyclopaedia</li>

                <li>• Brain games and Educational games</li>

                <li>• Template programs and LMS</li>

              </ul>

            </div>

            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-blue-600 mb-3">Customised Training World</h3>

              <ul className="text-gray-600 space-y-1 text-sm">

                <li>• Sandcircle MCI certified programs</li>

                <li>• Customised organization programs</li>

                <li>• Introduction Hardware/Software courses</li>

                <li>• Intermediate Hardware/Software courses</li>

                <li>• Advanced Hardware/Software courses</li>

                <li>• Computerised Accounting Training</li>

                <li>• Need-based training programs</li>

              </ul>

            </div>

            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-blue-600 mb-3">Management Processes World</h3>

              <ul className="text-gray-600 space-y-1 text-sm">

                <li>• Business Registration Services</li>

                <li>• Business Management Counselling</li>

                <li>• Strategic Planning</li>

                <li>• Management Consultancy</li>

                <li>• Human Capital Policies</li>

                <li>• Accounting Packages</li>

                <li>• Statutory Returns Management</li>

              </ul>

            </div>

            <div className="bg-white rounded-lg shadow-md p-6">

              <h3 className="text-xl font-semibold text-blue-600 mb-3">Security Systems World</h3>

              <ul className="text-gray-600 space-y-1 text-sm">

                <li>• IT Based Security Hardware</li>

                <li>• IT Security Software</li>

                <li>• Access Control Systems</li>

                <li>• Clocking in Systems</li>

                <li>• Security training and backup</li>

                <li>• Security systems maintenance</li>

                <li>• Ethical hacking and testing</li>

              </ul>

            </div>

          </div>

        </section>



        {/* E-Learning World */}

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our E-Learning World</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <h3 className="text-xl font-semibold text-blue-600 mb-4">E-Learning Portals & Platforms</h3>

              <ul className="text-gray-600 space-y-2">

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Online learning portals design, hosting and publishing</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Website designing and E-learning development platforms</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>E-Library for Private Organisations (ELPo)</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>E-Library for Education (ELEd)</span>

                </li>

              </ul>



              <h3 className="text-xl font-semibold text-blue-600 mb-4 mt-6">Computer Based Learning Programs</h3>

              <ul className="text-gray-600 space-y-2">

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Training the Education Managers (TtEM)</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Training the Trainer (TtT)</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Training the Learner (TtL)</span>

                </li>

              </ul>

            </div>

            <div>

              <h3 className="text-xl font-semibold text-blue-600 mb-4">E-Classes Features</h3>

              <ul className="text-gray-600 space-y-2">

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Static and Interactive E-Classes</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Multilateral interactive education relationship</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Teacher-Learner-Parent communication</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Lecture presentations, videos, audios</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span>Real-time learning resources</span>

                </li>

              </ul>



              <h3 className="text-xl font-semibold text-blue-600 mb-4 mt-6">E-Library Books</h3>

              <p className="text-gray-600">

                All approved Publishers from Zimbabwe Zimsec list, Cambridge material and links, 

                covering all subjects from Primary through Secondary to Higher Education levels.

              </p>

            </div>

          </div>

        </section>



        {/* CSR Section */}

        <section className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-8 mb-12">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Corporate Social Responsibility</h2>

          <p className="text-xl text-blue-600 font-semibold text-center mb-4">"Creating tomorrow's industrious leaders today through IT"</p>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>

              <p className="text-gray-700 mb-4 leading-relaxed">

                At SMCI, we believe in giving back to the community that has supported us for over two decades. Our CSR initiatives focus on education and youth development, making meaningful impacts in the communities we serve.

              </p>

              

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Education Partnership and Sponsorship</h3>

              <ul className="text-gray-700 mb-4 space-y-2">

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span><strong>Provincial High Schools Quiz and Public Speaking Competitions:</strong> We have partnered with the Bulawayo Provincial Education Department sponsoring Provincial High Schools Quiz and Public Speaking Competitions.</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span><strong>Five Education Districts Merit Awards Events:</strong> We have also partnered the Five Education Districts under the Bulawayo Province in the Merit Awards Events.</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span><strong>School Events Participation:</strong> We participate in the Schools Speech and Prize Giving days and other various events organised at Districts and at School levels.</span>

                </li>

                <li className="flex items-start gap-2">

                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>

                  <span><strong>Scholars Adoption Program:</strong> We adopt two disadvantaged but with potential scholars in schools in a one year service contract with us. We ensure that their fees, stationery and uniform needs are met termly.</span>

                </li>

              </ul>



              <h3 className="text-xl font-semibold text-gray-800 mb-3">Boys to Real Man (B2RM) Program</h3>

              <p className="text-gray-700 mb-4 leading-relaxed">

                We run a program, "Boys to real man" (B2RM), which targets male to prepare them to be responsible adults. This program is recognized at Provincial level.

              </p>



              <h3 className="text-xl font-semibold text-gray-800 mb-3">Career Guidance and IT Awareness</h3>

              <p className="text-gray-700 leading-relaxed">

                We are heavily involved in High Schools consultation and career Guidance events and are called upon regularly to motivate students towards I.T. Awareness especially where it comes to self-employment and or employment creation. Our aim is to create an IT interest in individuals in order to position them for IT business ownership.

              </p>



              <h3 className="text-xl font-semibold text-gray-800 mb-3">Long-term Vision</h3>

              <p className="text-gray-700 leading-relaxed">

                We endeavor to make a follow-through of these scholars with an aim to catering for their needs up to higher and or tertiary levels. The ultimate aim is to bring up computer literate citizens who will be assets in their communities.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <img src="/images/csr/csr-activity.jpeg" alt="CSR Activity" className="rounded-lg shadow-md w-full h-48 object-cover" />

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>Educational Partnership</span>

              </div>

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>Prize Giving Ceremony</span>

              </div>

              <div className="bg-gray-200 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">

                <span>B2RM Mentorship Program</span>

              </div>

            </div>

          </div>

        </section>



        {/* Policies */}

        <section className="bg-white rounded-lg shadow-lg p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Policies and Standard Operating Procedures</h2>

          <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">

            Our vast and comprehensive Policies and Procedural Guidelines formulated by experts and practitioners have positioned us as a thorough organization that markets products that are tested and consumed in-house before they are escalated to Clients.

          </p>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">

            <p className="text-center text-lg font-semibold text-blue-700">

              All our products undergo rigorous in-house testing and validation before being offered to clients, ensuring quality and reliability.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Equality Policy</h3>

              <p className="text-sm text-gray-700">We are an equal opportunity employer committed to diversity and inclusion in all our operations.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Standards of Business Conduct Policy</h3>

              <p className="text-sm text-gray-700">Ethical business practices and professional conduct in all our dealings with clients and stakeholders.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">IT Security Policy</h3>

              <p className="text-sm text-gray-700">Rigorous protocols to ensure data security and integrity for our clients and organization.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Social Media Policy</h3>

              <p className="text-sm text-gray-700">Guidelines for appropriate social media use and online presence representation.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Drug and Alcohol Policy</h3>

              <p className="text-sm text-gray-700">Maintaining a safe and productive work environment through clear substance abuse policies.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Data Protection Policy</h3>

              <p className="text-sm text-gray-700">Compliance with international data protection standards and client confidentiality.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Harassment and Bullying Policy</h3>

              <p className="text-sm text-gray-700">Zero tolerance for harassment and bullying in any form within our organization.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Human Capital Policy</h3>

              <p className="text-sm text-gray-700">Comprehensive human resource management and employee development policies.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Induction Checklists</h3>

              <p className="text-sm text-gray-700">Structured employee handbook and induction processes for smooth onboarding.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Grievance Procedures</h3>

              <p className="text-sm text-gray-700">Clear and fair procedures for addressing employee grievances and conflicts.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Environmental Policy</h3>

              <p className="text-sm text-gray-700">Commitment to sustainable e-waste disposal and eco-friendly practices.</p>

            </div>

            <div className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">

              <h3 className="font-semibold text-blue-600 mb-2">Quality Assurance Policy</h3>

              <p className="text-sm text-gray-700">Continuous improvement and quality standards in all products and services delivered.</p>

            </div>

          </div>

        </section>

      </main>

    </div>

  );

}

