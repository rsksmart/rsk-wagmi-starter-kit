import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
