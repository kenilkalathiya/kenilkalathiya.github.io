import TimelineList from "./TimelineList";
import { resume } from "../../data/site";

export default function Education() {
  const entries = resume.education.map((edu) => ({
    title: edu.university,
    badge: edu.duration,
    subtitle: edu.degree,
    items: edu.courses,
  }));

  return <TimelineList entries={entries} />;
}
