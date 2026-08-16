import TimelineList from "./TimelineList";
import { resume } from "../../data/site";

export default function Interests() {
  const entries = resume.interests.map((interest) => ({
    title: interest.title,
    items: interest.details,
  }));

  return <TimelineList entries={entries} />;
}
