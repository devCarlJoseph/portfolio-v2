import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import ProjectsPage from "@/pages/Projects";
import ServicesPage from "@/pages/Services";
import CertificationsPage from "@/pages/Certifications";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
      </Route>
    </Routes>
  );
}
