import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import About2 from './components/pages/about/About2';
import Contact from './components/pages/contact/Contact';
import Contact2 from './components/pages/contact/Contact2';
import Valute from './components/pages/valute/Valute';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Blog from './components/pages/blog/Blog';
import BlogSingle from './components/pages/blog/BlogSingle';
import Countries from './components/pages/countries/Countries';
import Country from './components/pages/countries/Country';
import Shop from './components/pages/shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductSingle from './components/pages/shop/ProductSingle';
import CartPage from './components/pages/shop/CartPage';
import CheckoutPage from './components/pages/shop/CheckoutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/valute" element={<Valute/>} />
          <Route path="/country/:name" element={<Country/>} />
          <Route path="/countries" element={<Countries/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ProductSingle/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
