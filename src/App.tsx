import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
