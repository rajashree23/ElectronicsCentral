import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./component/Navbar/Navbar";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
