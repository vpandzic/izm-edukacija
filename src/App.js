import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/pages/login/Login';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import History from './components/pages/history/History';
import Services from './components/pages/services/Services';
import Payment from './components/pages/payment/Payment';
import Blog from './components/utility/Blog';
import BlogSingle from './components/utility/BlogSingle';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/services/:id" element={<Services/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
