import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="bg-whote border-b border-gray-200 sticky top-0 z-50">
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
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Certifications
            </NavLink>
          </nav>

          <div>
            <button className="text-sm bg-black text-white px-4 py-2 rounded-md">Contact Me</button>
          </div>
        </div>
      </div>
    </header>
  );
}
