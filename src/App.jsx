import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AmbientBackground from "./components/layout/AmbientBackground";
import Loader from "./components/layout/Loader";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <>
      <Loader />
      <AmbientBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
