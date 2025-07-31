import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { ThemeContext } from "./context/theme";

// Theme Provider Component
const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<
    "theme1" | "theme2" | "theme3"
  >(() => {
    try {
      const savedTheme = localStorage.getItem("selectedTheme") as
        | "theme1"
        | "theme2"
        | "theme3"
        | null;
      return savedTheme && ["theme1", "theme2", "theme3"].includes(savedTheme)
        ? savedTheme
        : "theme1";
    } catch {
      return "theme1";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("selectedTheme", currentTheme);
    } catch (error) {
      console.warn("Could not save theme to localStorage:", error);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <Header />
      {children}
    </ThemeContext.Provider>
  );
};

// Main App Component
const App: React.FC = () => {
  const navitage = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navitage("/home");
    }
  }, [location, navitage]);
  return (
    <ThemeContextProvider>
      <div className="transition-all duration-500 w-full">
        <main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
