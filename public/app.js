const { useState, useContext, createContext } = React;
const { BrowserRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

// Cart Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Mock product data with descriptions
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    description: "High-performance laptop with 16GB RAM and 512GB SSD.",
    image: "https://placehold.co/300x200?text=Laptop"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    description: "Latest smartphone with 5G support and 128GB storage.",
    image: "https://placehold.co/300x200?text=Smartphone"
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 29.99,
    category: "Clothing",
    description: "Comfortable cotton T-shirt in multiple colors.",
    image: "https://placehold.co/300x200?text=T-Shirt"
  },
  {
    id: 4,
    name: "Jeans",
    price: 59.99,
    category: "Clothing",
    description: "Stylish slim-fit jeans for everyday wear.",
    image: "https://placehold.co/300x200?text=Jeans"
  },
  {
    id: 5,
    name: "Headphones",
    price: 149.99,
    category: "Electronics",
    description: "Wireless noise-canceling headphones with long battery life.",
    image: "https://placehold.co/300x200?text=Headphones"
  },
  {
    id: 6,
    name: "Sneakers",
    price: 89.99,
    category: "Clothing",
    description: "Trendy sneakers with cushioned soles for comfort.",
    image: "https://placehold.co/300x200?text=Sneakers"
  },
];

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CloudShop</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300 relative">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block hover:text-gray-300 p-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" className="block hover:text-gray-300 p-2" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/cart" className="block hover:text-gray-300 p-2" onClick={() => setIsMenuOpen(false)}>
            Cart {cart.length > 0 && `(${cart.reduce((sum, item) => sum + item.quantity, 0)})`}
          </Link>
          <Link to="/login" className="block hover:text-gray-300 p-2" onClick={() => setIsMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

// Hero Component
const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to CloudShop</h1>
      <p className="text-lg md:text-xl mb-6">Discover the best products with seamless shopping experience.</p>
      <Link
        to="/products"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Shop Now
      </Link>
    </div>
  </section>
);

// Product Card Component
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

// Featured Products Component
const FeaturedProducts = ({ products }) => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

// Products Page with Filtering
const ProductsPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = categoryFilter === "All"
    ? products
    : products.filter((p) => p.category === categoryFilter);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
        <div className="mb-6 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-full font-semibold ${
                categoryFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

// Product Detail Component
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto py-12 text-center">Product not found.</div>;
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 text-2xl mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-500 mb-4">{product.category}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Cart Page Component
const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
              <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>© 2025 CloudShop. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

// Home Page
const Home = () => (
  <div>
    <Hero />
    <FeaturedProducts products={products.slice(0, 4)} />
  </div>
);

// Placeholder Login Page
const Login = () => <div className="container mx-auto py-12">Login Page (To be implemented)</div>;

// Main App Component
const App = () => (
  <CartProvider>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </CartProvider>
);

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);