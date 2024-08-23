import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/LoginPopup/loginPopup";
import { useState } from "react";

const App = () => {
  const [showLogin, SetshowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Loginpopup SetshowLogin={SetshowLogin} /> : <> </>}
      <div className="app">
        <Navbar SetshowLogin={SetshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
