import { useContext } from "react";
import { themeConfig, ThemeContext } from "../context/theme";

// AboutPage Component
const AboutPage: React.FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfig[currentTheme];

  return (
    <div
      className={`${theme.containerClass} ${theme.fontFamily} transition-all duration-500`}
    >
      <div className={`${theme.contentClass} pt-20`}>
        <div className="max-w-4xl mx-auto">
          <h1 className={`${theme.titleClass} text-center animate-fade-in`}>
            About HIPSTER
          </h1>

          <div className={`${theme.cardClass} p-8 mb-8 animate-slide-up`}>
            <p className={`${theme.textClass} text-lg leading-relaxed mb-6`}>
              Welcome to HIPSTER, where shopping meets innovation! Our
              revolutionary multi-theme platform demonstrates how user
              experience can be completely transformed through thoughtful design
              choices.
            </p>

            <p className={`${theme.textClass} text-lg leading-relaxed mb-6`}>
              We believe that every user has unique preferences when it comes to
              visual design. That's why we've created three distinct themes that
              showcase different approaches to e-commerce design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              className={`${theme.cardClass} p-6 text-center animate-fade-in`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3
                className={`${
                  currentTheme === "theme2"
                    ? "text-purple-400"
                    : currentTheme === "theme3"
                      ? "text-pink-600"
                      : "text-blue-600"
                } text-xl font-bold mb-3`}
              >
                Minimalist Theme
              </h3>
              <p className={`${theme.textClass} leading-relaxed`}>
                Clean, simple, and focused on content with a light, professional
                appearance perfect for serious shoppers.
              </p>
            </div>

            <div
              className={`${theme.cardClass} p-6 text-center animate-fade-in`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-4xl mb-4">🌙</div>
              <h3
                className={`${
                  currentTheme === "theme2"
                    ? "text-purple-400"
                    : currentTheme === "theme3"
                      ? "text-pink-600"
                      : "text-blue-600"
                } text-xl font-bold mb-3`}
              >
                Dark Pro Theme
              </h3>
              <p className={`${theme.textClass} leading-relaxed`}>
                Sophisticated dark mode with sidebar navigation and elegant
                typography for power users who love efficiency.
              </p>
            </div>

            <div
              className={`${theme.cardClass} p-6 text-center animate-fade-in`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="text-4xl mb-4">🌈</div>
              <h3
                className={`${
                  currentTheme === "theme2"
                    ? "text-purple-400"
                    : currentTheme === "theme3"
                      ? "text-pink-600"
                      : "text-blue-600"
                } text-xl font-bold mb-3`}
              >
                Colorful Fun Theme
              </h3>
              <p className={`${theme.textClass} leading-relaxed`}>
                Vibrant, playful design with animations and creative layouts
                that brings joy to every shopping experience.
              </p>
            </div>
          </div>

          <div className={`${theme.cardClass} p-8 animate-slide-up`}>
            <h2
              className={`${
                currentTheme === "theme2"
                  ? "text-purple-400"
                  : currentTheme === "theme3"
                    ? "text-pink-600"
                    : "text-blue-600"
              } text-2xl font-bold mb-4`}
            >
              Our Technology Stack
            </h2>
            <p className={`${theme.textClass} text-lg leading-relaxed mb-4`}>
              Our platform integrates with real product data from FakeStore API,
              ensuring you get a realistic shopping experience while exploring
              different theme possibilities.
            </p>
            <p className={`${theme.textClass} text-lg leading-relaxed`}>
              Built with modern React, TypeScript, and Tailwind CSS to deliver
              optimal performance, security, and compatibility across all
              devices. The application uses Context API for state management and
              localStorage for theme persistence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
