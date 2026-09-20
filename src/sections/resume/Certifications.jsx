import TimelineList from "./TimelineList";
import { resume } from "../../data/site";

export default function Certifications() {
  const entries = resume.certifications.map((cert) => ({
    title: cert.title,
    badge: cert.date,
    subtitle: cert.issuer,
  }));

  return <TimelineList entries={entries} />;
}
