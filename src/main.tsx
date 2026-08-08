import "@/styles/styles.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import GuestLayout from "@/pages/guest/layout";
import { Preloader } from "@/components/common/preloader";

import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import ContactPage from "@/pages/guest/contact";
import ProjectsPage from "@/pages/guest/projects";
import ServicesPage from "@/pages/guest/services";
import CertificationsPage from "@/pages/guest/certifications";

function App() {
  return (
    <Preloader>
      <BrowserRouter>
        <Routes>
          {/* Guest Pages */}
          <Route element={<GuestLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Dashboard Pages */}
        </Routes>
      </BrowserRouter>
    </Preloader>
  );
}

createRoot(document.getElementById("root")!).render(<App />);