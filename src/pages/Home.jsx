import Hero from "../sections/Hero";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Projects from "../sections/Projects";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";

export default function Home({ track }) {
  return (
    <>
      <Hero track={track} />
      <About track={track} />
      <Resume />
      <Projects track={track} />
      <Blog track={track} />
      <Contact />
    </>
  );
}
