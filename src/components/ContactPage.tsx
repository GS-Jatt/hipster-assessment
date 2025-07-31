import { useContext, useState } from "react";
import { themeConfig, ThemeContext } from "../context/theme";

// ContactPage Component
const ContactPage: React.FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfig[currentTheme];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "This is a demo contact form. In a real application, this would send your message!",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`${theme.containerClass} ${theme.fontFamily} transition-all duration-500`}
    >
      <div className={`${theme.contentClass} pt-20`}>
        <div className="max-w-4xl mx-auto">
          <h1 className={`${theme.titleClass} text-center animate-fade-in`}>
            Get in Touch
          </h1>

          <p
            className={`${theme.textClass} text-lg text-center mb-12 animate-slide-up`}
          >
            We'd love to hear from you! Reach out to us for any questions,
            feedback, or collaboration opportunities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className={`${theme.cardClass} p-8 animate-fade-in`}>
              <h2
                className={`${
                  currentTheme === "theme2"
                    ? "text-purple-400"
                    : currentTheme === "theme3"
                      ? "text-pink-600"
                      : "text-blue-600"
                } text-2xl font-bold mb-6`}
              >
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className={`${theme.textClass} font-semibold`}>Email</p>
                    <p
                      className={`${
                        currentTheme === "theme2"
                          ? "text-gray-400"
                          : currentTheme === "theme3"
                            ? "text-gray-600"
                            : "text-gray-600"
                      }`}
                    >
                      contact@themeshop.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className={`${theme.textClass} font-semibold`}>Phone</p>
                    <p
                      className={`${
                        currentTheme === "theme2"
                          ? "text-gray-400"
                          : currentTheme === "theme3"
                            ? "text-gray-600"
                            : "text-gray-600"
                      }`}
                    >
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className={`${theme.textClass} font-semibold`}>
                      Address
                    </p>
                    <p
                      className={`${
                        currentTheme === "theme2"
                          ? "text-gray-400"
                          : currentTheme === "theme3"
                            ? "text-gray-600"
                            : "text-gray-600"
                      }`}
                    >
                      123 Theme Street
                      <br />
                      Design City, DC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🕒</span>
                  <div>
                    <p className={`${theme.textClass} font-semibold`}>
                      Business Hours
                    </p>
                    <p
                      className={`${
                        currentTheme === "theme2"
                          ? "text-gray-400"
                          : currentTheme === "theme3"
                            ? "text-gray-600"
                            : "text-gray-600"
                      }`}
                    >
                      Monday - Friday: 9AM - 6PM EST
                      <br />
                      Weekend: 10AM - 4PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${theme.cardClass} p-8 animate-slide-up`}>
              <h2
                className={`${
                  currentTheme === "theme2"
                    ? "text-purple-400"
                    : currentTheme === "theme3"
                      ? "text-pink-600"
                      : "text-blue-600"
                } text-2xl font-bold mb-6`}
              >
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className={`${theme.textClass} block text-sm font-semibold mb-2`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      currentTheme === "theme2"
                        ? "bg-gray-700 border-gray-600 text-white focus:border-purple-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    className={`${theme.textClass} block text-sm font-semibold mb-2`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      currentTheme === "theme2"
                        ? "bg-gray-700 border-gray-600 text-white focus:border-purple-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300`}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    className={`${theme.textClass} block text-sm font-semibold mb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      currentTheme === "theme2"
                        ? "bg-gray-700 border-gray-600 text-white focus:border-purple-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 resize-none`}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className={`${theme.buttonClass} w-full text-center`}
                >
                  Send Message 📩
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
