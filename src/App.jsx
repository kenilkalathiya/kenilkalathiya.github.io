import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AmbientBackground from "./components/layout/AmbientBackground";
import Loader from "./components/layout/Loader";
import ScrollManager from "./components/layout/ScrollManager";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const location = useLocation();
  // The project detail page is a fixed, single-viewport layout (its own
  // content scrolls internally) — the global footer doesn't belong there.
  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <>
      <Loader />
      <AmbientBackground />
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      {!isProjectPage && <Footer />}
    </>
  );
}
