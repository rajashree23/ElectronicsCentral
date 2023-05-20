import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

import { Navbar } from "./component/Navbar/Navbar";

import { Landing } from "./pages/Landing/Landing";
import { ProductListing } from "./pages/Product/ProductListing";
import { ProductDetailCard } from "./pages/Product/ProductDetailCard";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetailCard />} />
      </Routes>
    </div>
  );
}

export default App;
