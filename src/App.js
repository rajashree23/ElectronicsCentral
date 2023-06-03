import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar } from "./component/Navbar/Navbar";

import { Landing } from "./pages/Landing/Landing";
import { ProductListing } from "./pages/Product/ProductListing";
import { ProductDetailCard } from "./pages/Product/ProductDetailCard";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Signup } from "./pages/Auth/Signup";
import { Login } from "./pages/Auth/Login";
import { RequiresAuth } from "./component/RequiresAuth/RequiresAuth";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { Checkout } from "./pages/Checkout/Checkout";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose="500"
        limit="1"
        style={{ top: "5.5rem", right: "0.5rem" }}
      />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetailCard />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/user-profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequiresAuth>
              <Checkout />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
