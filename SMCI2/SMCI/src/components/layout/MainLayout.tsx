import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Analytics from "../Analytics";

export default function MainLayout() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="top-bar">
        <TopBar />
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="main-content" style={{ paddingTop: '120px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
      
      {/* Analytics Component */}
      <Analytics />
    </div>
  );
}
