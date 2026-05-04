import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  ChevronLeft, 
  ChevronRight, 
  Laptop, 
  Network, 
  Wrench, 
  GraduationCap, 
  Headphones, 
  ShoppingCart 
} from "lucide-react";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Sandcircle Management Consultancy International",
    subtitle: "Efficiency Our Virtue, Experience Our Attitude!!!",
    description: "Suite No. 301 CIPF Centre, Between 9th & 10th Avenues, Along Jason Moyo Street, Bulawayo, Zimbabwe",
    imageUrl: "/images/hero/hero-2.jpg",
  },
  {
    id: 2,
    title: "ICT Solutions That Empower",
    subtitle: "25 Years of Excellence",
    description: "We provide reliable ICT hardware, software, networking, and training solutions across Zimbabwe.",
    imageUrl: "/images/hero/hero-2.jpg",
  },
  {
    id: 3,
    title: "Your Trusted Technology Partner",
    subtitle: "Professional. Reliable. Local.",
    description: "Supporting schools, businesses, and institutions with tailored IT solutions.",
    imageUrl: "/images/hero/hero-2.jpg",
  },
];

const coreExpertise = [
  { title: "Computer Sales", description: "Premium laptops, desktops, and hardware from leading brands like HP, Dell, Lenovo.", icon: Laptop, link: "/shop" },
  { title: "Networking Solutions", description: "Enterprise network design, installation, and management.", icon: Network, link: "/services" },
  { title: "Designing and Fitting World", description: "Specialized lab design, furniture fabrication, and electrical fittings.", icon: Wrench, link: "/services" },
  { title: "IT Training & E-Learning", description: "Pastel Accounting, ELPo, ELEd, TtEM, TtT, TtL programs.", icon: GraduationCap, link: "/services" },
  { title: "Maintenance & Support", description: "Reliable technical support and annual maintenance contracts.", icon: Headphones, link: "/services" },
  { title: "IT Consumables", description: "Toners, cartridges, cables, and accessories.", icon: ShoppingCart, link: "/shop" }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [hoveredExpertiseIndex, setHoveredExpertiseIndex] = useState<number | null>(null);

  const prevSlide = () => setCurrent(prev => prev === 0 ? slides.length - 1 : prev - 1);
  const nextSlide = () => setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sandcircle Management Consultancy International (SMCI) - IT Solutions Zimbabwe</title>
        <meta name="description" content="SMCI - Premier IT solutions provider in Zimbabwe. 22+ years experience in computer sales, networking, lab design, IT training & support. Ministry of Education approved supplier." />
        <meta name="keywords" content="IT solutions Zimbabwe, computer sales, networking, IT training, Pastel accounting, lab design, SMCI, Bulawayo, Ministry of Education supplier" />
        <meta name="author" content="Sandcircle Management Consultancy International" />
        <meta property="og:title" content="Sandcircle Management Consultancy International - IT Solutions Zimbabwe" />
        <meta property="og:description" content="Premier IT solutions provider in Zimbabwe with 22+ years experience. Computer sales, networking, lab design, IT training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smci.co.zw" />
        <meta property="og:image" content="/images/logo/smci-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMCI - IT Solutions Zimbabwe" />
        <meta name="twitter:description" content="Premier IT solutions provider in Zimbabwe with 22+ years experience." />
        <meta name="twitter:image" content="/images/logo/smci-logo.png" />
        <link rel="canonical" href="https://smci.co.zw" />
      </Helmet>

      <div className="flex flex-col gap-20 overflow-x-hidden">

        {/* HERO SLIDER */}
        <section className="relative min-h-[90vh] mt-0">
          <AnimatePresence>
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slides[current].imageUrl}
                alt={slides[current].title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {(e.target as HTMLImageElement).style.display='none'}}
              />
              <div className="absolute inset-0 bg-[rgba(10,37,64,0.95)]" />
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">{slides[current].title}</h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-blue-600 mb-4">{slides[current].subtitle}</p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">{slides[current].description}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                    <a href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-center">Get Started</a>
                    <a href="/services" className="px-6 py-3 bg-white/90 text-gray-900 font-semibold rounded-lg hover:bg-white transition duration-300 text-center">Our Services</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition duration-300">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition duration-300">
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${index === current ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </section>

        {/* STATS */}
        <motion.section className="py-12 sm:py-16 bg-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2001", label: "Established" },
              { value: "25", label: "Years Experience" },
              { value: "100+", label: "Schools Served" },
              { value: "24/7", label: "Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * (i+1) }}
              >
                <h2 className="text-3xl font-bold text-blue-600 mb-2">{item.value}</h2>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WHO WE ARE */}
        <motion.section className="bg-white py-12 sm:py-16 md:py-20 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2 className="text-4xl font-bold mb-6" initial={{ opacity: 0, y:30 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>Who We Are</motion.h2>
            <motion.p className="text-lg text-gray-700 mb-4" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}} transition={{duration:0.5}}>
              Sandcircle Management Consultancy International (SMCI) is a wholly Zimbabwean and indigenously owned business providing spot-on ICT hardware and software solutions.
            </motion.p>
            <motion.p className="text-lg text-gray-700" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}} transition={{duration:0.5, delay:0.2}}>
              With 25 years of experience, we aim to be the preferred one-stop choice for ICT solutions built on honesty, efficiency, and expertise.
            </motion.p>
          </div>
        </motion.section>

        {/* CORE EXPERTISE */}
        <motion.section className="py-12 sm:py-16 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-4xl font-bold mb-4" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>Our Core Expertise</motion.h2>
            <motion.p className="text-lg text-gray-600 mb-10" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}}>Delivering comprehensive technology solutions with virtue and experience.</motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coreExpertise.map((item, index) => (
                <motion.div key={index} className="group cursor-pointer" 
                  onHoverStart={()=>setHoveredExpertiseIndex(index)}
                  onHoverEnd={()=>setHoveredExpertiseIndex(null)}
                  whileHover={{ y:-12, transition:{duration:0.4, ease:[0.4,0,0.2,1]}}}
                  initial={{opacity:0, y:50}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:0.6, delay:0.4+(index*0.1)}}
                >
                  <div className={`mb-4 p-3 rounded-lg flex items-center justify-center text-blue-600 bg-white transition-all duration-300 group-hover:text-white group-hover:bg-blue-600 ${hoveredExpertiseIndex === index ? "bg-blue-600 text-white scale-110 shadow-lg" : ""}`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link to={item.link} className="text-blue-600 font-medium hover:underline">Learn More →</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CSR */}
        <motion.section className="relative bg-cover bg-center py-20 text-white text-center" style={{backgroundImage: "url('/images/csr/csr-bg.jpeg')"}} initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}>
          <div className="absolute inset-0 bg-[rgba(10,37,64,0.95)]" />
          <div className="relative z-10 container mx-auto px-4 max-w-3xl">
            <motion.h2 className="text-4xl font-bold mb-4" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}}>Corporate Social Responsibility</motion.h2>
            <motion.p className="text-xl italic mb-8" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.4}}>"Creating tomorrow's industrious leaders today through IT"</motion.p>
            <motion.p className="text-lg mb-8" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.5}}>
              We are committed to giving back to the community through education partnerships and our flagship "Boys to Real Man" (B2RM) program, mentoring young men to become responsible leaders.
            </motion.p>
            <motion.a href="/about" className="border border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-block" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.6}}>Read More About Our Impact</motion.a>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className="bg-blue-700 py-16 text-white text-center" initial={{opacity:0, y:80}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2 className="text-3xl font-bold mb-6" initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}}>Ready to Transform Your Business?</motion.h2>
            <motion.p className="text-lg mb-8" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.6, delay:0.3}}>
              Partner with SMCI for reliable, expert IT solutions. Experience our attitude of excellence today.
            </motion.p>
            <motion.a href="/contact" className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block" initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}} transition={{duration:0.6, delay:0.4}}>Contact Us Today</motion.a>
          </div>
        </motion.section>

      </div>
    </>
  );
}
