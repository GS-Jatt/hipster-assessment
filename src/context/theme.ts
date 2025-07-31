import { createContext } from "react";

interface ThemeContextType {
  currentTheme: "theme1" | "theme2" | "theme3";
  setCurrentTheme: (theme: "theme1" | "theme2" | "theme3") => void;
}

// Theme Context
export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "theme1",
  setCurrentTheme: () => {},
});

// Theme configurations
export const themeConfig = {
  theme1: {
    name: "Minimalist",
    containerClass: "bg-gray-50 min-h-screen font-sans",
    headerClass: "bg-white shadow-sm border-b",
    textClass: "text-gray-800",
    cardClass:
      "bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300",
    buttonClass:
      "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-300",
    sidebarClass: "hidden",
    contentClass: "container mx-auto px-4 py-8",
    titleClass: "text-3xl font-light text-gray-800 mb-6",
    fontFamily: "font-sans",
    btnHeader: "bg-transparent text-black",
    dropDown: "bg-grey/900 text-white",
  },
  theme2: {
    name: "Dark Pro",
    containerClass: "bg-gray-900 min-h-screen font-serif",
    headerClass: "bg-gray-800 shadow-lg border-b border-gray-700",
    textClass: "text-gray-100",
    cardClass:
      "bg-gray-800 rounded-xl shadow-xl border border-gray-700 hover:shadow-2xl hover:border-purple-500 transition-all duration-300",
    buttonClass:
      "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105",
    sidebarClass:
      "fixed left-0 top-16 w-64 h-full bg-gray-800 shadow-xl z-10 transform transition-transform duration-300",
    contentClass: "ml-0 md:ml-64 px-6 py-8",
    titleClass: "text-4xl font-bold text-purple-400 mb-8",
    fontFamily: "font-serif",
    btnHeader: "bg-transparent text-white",
    dropDown: "bg-white text-black/100",
  },
  theme3: {
    name: "Colorful Fun",
    containerClass:
      "bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 min-h-screen",
    headerClass: "bg-gradient-to-r from-yellow-400 to-orange-500 shadow-xl",
    textClass: "text-black",
    cardClass:
      "bg-white rounded-3xl shadow-2xl border-4 border-yellow-300 hover:shadow-3xl hover:transform hover:scale-105 transition-all duration-500 hover:rotate-1",
    buttonClass:
      "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 shadow-lg",
    sidebarClass: "hidden",
    contentClass: "container mx-auto px-4 py-8",
    titleClass: "text-5xl font-bold text-white mb-8 text-center drop-shadow-lg",
    fontFamily: "font-mono",
    btnHeader: "bg-transparent text-black",
    dropDown: "bg-gradient-to-br text-white",
  },
};
