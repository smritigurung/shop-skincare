import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        {/* <Route exact path="/shop" element={<ShopAllPage />}></Route>
        <Route exact path="/bestsellers" element={<BestSellersPage />}></Route>
        <Route exact path="/brands" element={<BrandsPage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/account/login" element={<LoginPage />}></Route>
        <Route
          exact
          path="/account/register"
          element={<RegisterPage />}
        ></Route>
        <Route
          exact
          path="/shop/collections/product"
          element={<ProductPage />}
        ></Route>
        <Route exact path="/cart" element={<ShoppingCartPage />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
