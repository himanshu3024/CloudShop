const { useState } = React;
const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

// Mock product data
const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics" },
  { id: 3, name: "T-Shirt", price: 29.99, category: "Clothing" },
  { id: 4, name: "Jeans", price: 59.99, category: "Clothing" },
  { id: 5, name: "Headphones", price: 149.99, category: "Electronics" },
  { id: 6, name: "Sneakers", price: 89.99, category: "Clothing" },
];

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CloudShop</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
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
          <Link to="/cart" className="block hover:text-gray-300 p-2" onClick={() => setIsMenuOpen(false)}>Cart</Link>
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
const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="h-48 bg-gray-300 rounded mb-4"></div>
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-600">${product.price.toFixed(2)}</p>
    <p className="text-sm text-gray-500">{product.category}</p>
    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Add to Cart
    </button>
  </div>
);

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
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
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

// Placeholder Pages
const Cart = () => <div className="container mx-auto py-12">Cart Page (To be implemented)</div>;
const Login = () => <div className="container mx-auto py-12">Login Page (To be implemented)</div>;

// Main App Component
const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);