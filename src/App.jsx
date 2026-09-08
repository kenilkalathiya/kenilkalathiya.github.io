import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
        {/* "/" is a bare redirect — visitors land directly on a track rather
            than the unfiltered combined view. Autonomous Systems is the
            chosen default, matching the site's overall branding. */}
        <Route path="/" element={<Navigate to="/autonomous-systems" replace />} />
        <Route path="/all" element={<Home />} />
        <Route path="/software" element={<Home track="software" />} />
        <Route path="/autonomous-systems" element={<Home track="automotive" />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      {!isProjectPage && <Footer />}
    </>
  );
}
