import { useContext, useEffect, useState } from "react";
import { themeConfig, ThemeContext } from "../context/theme";

// Types
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// HomePage Component
const HomePage: React.FC = () => {
  const { currentTheme } = useContext(ThemeContext);
  const theme = themeConfig[currentTheme];
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=20",
          { method: "get" },
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div
        className={`${theme.containerClass} ${theme.fontFamily} transition-all duration-500`}
      >
        <div className={`${theme.contentClass} pt-20`}>
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-current mx-auto mb-4"></div>
              <p className={`${theme.textClass} text-xl`}>
                Loading amazing products...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`${theme.containerClass} ${theme.fontFamily} transition-all duration-500`}
      >
        <div className={`${theme.contentClass} pt-20`}>
          <div className="text-center">
            <p className={`${theme.textClass} text-xl mb-4`}>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className={theme.buttonClass}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${theme.containerClass} ${theme.fontFamily} transition-all duration-500`}
    >
      <div className={`${theme.contentClass} pt-20`}>
        <div className="text-center mb-12">
          <h1 className={`${theme.titleClass} animate-fade-in`}>
            Welcome to HIPSTER
          </h1>
          <p
            className={`${theme.textClass} text-lg mb-8 max-w-2xl mx-auto leading-relaxed`}
          >
            Discover our amazing collection of products with three unique
            shopping experiences. Switch between themes to see how the same
            content can feel completely different!
          </p>
          <button className={`${theme.buttonClass} animate-bounce-in`}>
            🛒 Start Shopping
          </button>
        </div>

        {/* Products Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            currentTheme === "theme3" ? "lg:grid-cols-3" : "lg:grid-cols-3"
          } gap-8 animate-slide-up`}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`${theme.cardClass} p-6 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full bg-white h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="space-y-3">
                <h3
                  className={`${
                    currentTheme === "theme2"
                      ? "text-purple-300"
                      : currentTheme === "theme3"
                        ? "text-gray-800"
                        : "text-gray-800"
                  } font-bold text-lg leading-tight`}
                >
                  {product.title.length > 50
                    ? `${product.title.substring(0, 50)}...`
                    : product.title}
                </h3>

                <div className="flex items-center space-x-2">
                  <span
                    className={`${
                      currentTheme === "theme3"
                        ? "bg-yellow-400 text-yellow-900"
                        : currentTheme === "theme2"
                          ? "bg-purple-600 text-white"
                          : "bg-blue-100 text-blue-800"
                    } px-2 py-1 rounded-full text-xs font-medium capitalize`}
                  >
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">⭐</span>
                    <span
                      className={`${
                        currentTheme === "theme2"
                          ? "text-gray-300"
                          : currentTheme === "theme3"
                            ? "text-gray-700"
                            : "text-gray-600"
                      } text-sm`}
                    >
                      {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                </div>

                <p
                  className={`${
                    currentTheme === "theme2"
                      ? "text-gray-400"
                      : currentTheme === "theme3"
                        ? "text-gray-600"
                        : "text-gray-600"
                  } text-sm leading-relaxed`}
                >
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span
                    className={`${
                      currentTheme === "theme2"
                        ? "text-purple-400"
                        : currentTheme === "theme3"
                          ? "text-green-600"
                          : "text-blue-600"
                    } text-2xl font-bold`}
                  >
                    ${product.price}
                  </span>
                  <button
                    className={`${
                      currentTheme === "theme3"
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-4 py-2 rounded-full"
                        : currentTheme === "theme2"
                          ? "bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                          : "bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                    } text-white transition-all duration-300 transform hover:scale-105`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
