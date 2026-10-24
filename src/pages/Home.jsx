import Hero from "../sections/Hero";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Projects from "../sections/Projects";
import FieldNotes from "../sections/FieldNotes";
import Contact from "../sections/Contact";

export default function Home({ track }) {
  return (
    <>
      <Hero track={track} />
      <About track={track} />
      <Resume track={track} />
      <Projects track={track} />
      <FieldNotes track={track} />
      <Contact />
    </>
  );
}
