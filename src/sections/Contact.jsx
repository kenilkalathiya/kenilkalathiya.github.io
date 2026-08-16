import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import SectionHeading from "../components/ui/SectionHeading";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const INFO_ITEMS = [
  { icon: FaMapMarkerAlt, label: "Address", value: "Chemnitz, Saxony, Germany" },
  { icon: BsPersonWorkspace, label: "Freelance", value: "Available Right Now" },
  { icon: FaEnvelope, label: "Email", value: "kenilkalathiya1999@gmail.com" },
  { icon: FaPhoneAlt, label: "Phone", value: "+49 15202856757" },
];

const inputClasses =
  "w-full rounded border border-strong bg-panel px-5 py-3 text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 transition-colors";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://formspree.io/f/mpwjgjed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-night py-16 md:py-24">
      <Container>
        <SectionHeading title="Contact Me" subtitle="Let's talk about ideas" />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <RevealOnScroll className="relative flex flex-col gap-8 border-l border-hairline pl-8">
            {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
              <div key={label} className="group flex items-center gap-5">
                <div className="-ml-[45px] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-panel text-accent transition-shadow group-hover:shadow-glow">
                  <Icon />
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-wide text-ink">{label}</h4>
                  <p className="text-sm text-ink-secondary">{value}</p>
                </div>
              </div>
            ))}
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClasses}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClasses} resize-y`}
              />
              <div>
                <Button type="submit">Submit</Button>
              </div>
              {status && <p className="font-mono text-sm text-accent">{status}</p>}
            </form>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
