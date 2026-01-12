import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Docs from "./pages/Docs";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/docs" element={<Docs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
