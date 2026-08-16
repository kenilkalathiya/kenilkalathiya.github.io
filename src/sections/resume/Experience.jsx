import TimelineList from "./TimelineList";
import { resume } from "../../data/site";

export default function Experience() {
  const entries = resume.experience.map((exp) => ({
    title: exp.company,
    badge: exp.duration,
    subtitle: exp.role,
    items: exp.tasks,
  }));

  return <TimelineList entries={entries} />;
}
