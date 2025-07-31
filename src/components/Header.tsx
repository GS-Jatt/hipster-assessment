import { useContext, useState } from "react";
import { themeConfig, ThemeContext } from "../context/theme";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.png";

// Header Component
const Header: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = themeConfig[currentTheme];
  const navigate = useNavigate();
  const location = useLocation();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentTheme(event.target.value as "theme1" | "theme2" | "theme3");
  };

  const navigationItems = [
    { key: "/home" as const, label: "Home", icon: "🏠" },
    { key: "/about" as const, label: "About", icon: "ℹ️" },
    { key: "/contact" as const, label: "Contact", icon: "📧" },
  ];

  return (
    <>
      <header
        className={`${theme.headerClass} fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              onClick={() => navigate("/home")}
              className={`${theme.textClass} cursor-pointer flex items-center space-x-2 ${theme.fontFamily}`}
            >
              <span className="text-2xl">
                <img
                  className="w-32"
                  src={currentTheme === "theme2" ? logo : logo1}
                />
              </span>
              {/* <span className="text-sm font-bold sm:text-xl">HIPSTER</span> */}
            </div>

            {/* Desktop Navigation */}
            <nav
              className={`hidden md:${theme.name == "Dark Pro" ? "hidden" : "flex"} items-center space-x-6 `}
            >
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className={`${
                    theme.textClass + " " + theme.btnHeader
                  } hover:opacity-75 transition-opacity duration-300 flex items-center space-x-1 ${
                    location.pathname === item.key
                      ? "font-bold border-b-2 border-current"
                      : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Theme Selector */}
            <div className="flex items-center space-x-4">
              <select
                value={currentTheme}
                onChange={handleThemeChange}
                className={`${theme.dropDown} backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300`}
              >
                <option value="theme1">Minimalist</option>
                <option value="theme2">Dark Pro</option>
                <option value="theme3">Colorful Fun</option>
              </select>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${theme.textClass} md:hidden focus:outline-none text-white `}
              >
                <svg
                  className="w-6 h-6"
                  fill="#00000"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    navigate(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`${
                    theme.textClass
                  } block w-full text-white text-left py-2 px-4 hover:bg-white/10 hover:text-black transition-colors duration-300 flex items-center space-x-2 mb-2 ${
                    location.pathname === item.key
                      ? "font-bold bg-[#00b1ac]"
                      : ""
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Sidebar for Theme 2 */}
      {currentTheme === "theme2" && (
        <aside className={`${theme.sidebarClass} hidden md:block`}>
          <div className="p-6">
            <h3 className="text-purple-400 font-bold text-lg mb-4">
              Navigation
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.key)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    location.pathname === item.key
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};
export default Header;
