import { resume } from "../../data/site";

export default function Interests() {
  return <p className="text-sm leading-relaxed text-ink-secondary sm:text-base">{resume.interests}</p>;
}
