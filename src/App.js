import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Topbar from './components/topbar';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
// import Shop from './pages/Shop';
// import Category from './pages/Category';
// import About from './pages/AboutUs';
// import Contact from './pages/ContactUs';
// import FAQ from './pages/Faq';
// import Profile from './pages/Profile';
// import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
    <Topbar/>
    <Navbar/>
    <Routes>
    <Route exact path="/" Component={Home} />
    {/* <Route exact path="/shop" Component={Shop} />
    <Route exact path="/category" Component={Category} />
    <Route exact path="/about" Component={About} />
    <Route exact path="/contact" Component={Contact} />
    <Route exact path="/faq" Component={FAQ} />
    <Route exact path="/profile" Component={Profile} />
    <Route exact path="/cart" Component={Cart} /> */}
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
