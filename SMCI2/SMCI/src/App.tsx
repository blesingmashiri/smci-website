import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Shop from "./pages/Shop";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Events from "./pages/Events";
import Careers from "./pages/Careers.jsx";
import Process from "./pages/Process";
import Testimonials from "./pages/Testimonials";
import Timeline from "./pages/Timeline";
import Resources from "./pages/Resources";
import Support from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <>
      {/* ✅ ROUTER MUST BE INSIDE <Routes> */}
      <Routes>
        {/* ✅ MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  );
}
