import { NavLink } from "react-router";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex shrink-0">
            <NavLink to="/" className="text-xl font-bold text-gray-900">
              <img src="/1.png" alt="CJS Logo" width="50" />
            </NavLink>
          </div>

          <nav className="flex items-center space-x-6 sm:space-x-8">
            <NavLink
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </NavLink>

            <NavLink
              to="/services"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </NavLink>

            <NavLink
              to="/certifications"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Certifications
            </NavLink>
          </nav>

          <div>
            <Button variant={"secondary"}>
              <NavLink to="/contact">Contact Me</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
