import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Server,
  Wrench,
  Monitor,
  GraduationCap,
  Award,
  Briefcase,
  Send,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImg from "@/assets/hero-developer.png";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Navbar({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-sm">
            SV
          </span>
          <span className="hidden sm:inline">Setty Varaprasad</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">
              Hire me <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex h-5 w-5 flex-col justify-center gap-1">
              <span className={`h-0.5 w-full bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    active === item.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_50%_at_50%_0%,oklch(0.9_0.06_258)_0%,transparent_70%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to internships & opportunities
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.65_0.18_240)] bg-clip-text text-transparent">
              Setty Varaprasad
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/80 md:text-xl">
            Computer Science Engineering Student · Full Stack Developer
          </p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I enjoy building responsive web applications and continuously learning new
            technologies to solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-[var(--shadow-soft)]">
              <a href="#projects">
                View Projects <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/Setty_Varaprasad_Resume.pdf" download="Setty_Varaprasad_Resume.pdf">
                <Download className="mr-1.5 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail className="mr-1.5 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/prasad0876/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/varaprasadsetty/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:settyvaraprasad2005@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md md:max-w-lg"
        >
          <div className="absolute inset-6 -z-10 rounded-full bg-primary/15 blur-3xl" />
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <img
              src={heroImg}
              alt="Illustration of a software developer working on a laptop"
              width={1024}
              height={1024}
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const items = [
    "Computer Science Engineering student at Vignan University",
    "Interested in Full Stack Development",
    "Strong foundation in Java, Python, React, SQL, and Web Development",
    "Passionate about learning modern technologies and building practical projects",
  ];
  return (
    <Section id="about" eyebrow="About" title="A quick introduction" subtitle="Curious engineer building for the web.">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card className="rounded-2xl border border-border p-8 shadow-[var(--shadow-card)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-12">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Code2 className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Full Stack Developer</h3>
              <p className="mt-2 text-sm text-muted-foreground">Vignan University · 2023–2027</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> India
              </div>
            </div>
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it} className="flex gap-3 text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 82 },
      { name: "Angular", level: 70 },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 72 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      subtitle="A snapshot of the tools, languages, and frameworks I use to build software."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group h-full rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 space-y-3.5">
                  {group.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    title: "Future Fashion E-Commerce Website",
    role: "Frontend Developer",
    description:
      "A responsive e-commerce experience with Firebase Authentication, a shopping cart, and a modern UI built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    features: ["Responsive design", "Auth & cart", "Modern UI"],
    github: "https://github.com/prasad0876/futurefashion",
    demo: "https://futurefashion.netlify.app/",
  },
  {
    title: "MovieFlix — Personalized Movie Recommendation System",
    role: "Backend Developer",
    description:
      "Backend APIs and a recommendation engine backed by MongoDB, exposing REST endpoints that power a personalized movie discovery experience.",
    tags: ["Node.js", "Express", "MongoDB", "REST"],
    features: ["REST APIs", "MongoDB", "Recommendation engine"],
    github: "https://github.com/prasad0876/movieflix",
    demo: "#",
  },
  {
    title: "Local Link",
    role: "Full Stack Developer",
    description:
      "A community-focused platform connecting locals — built end-to-end with a modern web stack and deployed on Netlify.",
    tags: ["React", "JavaScript", "Netlify"],
    features: ["Responsive UI", "Deployed on Netlify", "Full stack"],
    github: "https://github.com/prasad0876/local_link",
    demo: "https://local-link-connect.netlify.app/",
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A few projects that reflect how I think about product and code."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
          >
            <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="relative h-40 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
                <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_20%_20%,oklch(0.65_0.18_258/0.25),transparent_60%)]" />
                <div className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.role}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full font-medium">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2 pt-4">
                  <Button asChild size="sm" variant="outline">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Github className="mr-1.5 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Timeline({
  items,
  icon: Icon,
}: {
  items: { title: string; sub: string; date?: string; description?: string }[];
  icon: typeof Briefcase;
}) {
  return (
    <ol className="relative ml-3 border-l-2 border-border">
      {items.map((it, i) => (
        <motion.li
          key={i}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: i * 0.06 }}
          className="mb-8 ml-6 last:mb-0"
        >
          <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow">
            <Icon className="h-3 w-3" />
          </span>
          <Card className="rounded-2xl border border-border p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">{it.title}</h3>
              {it.date && (
                <span className="text-xs font-medium text-muted-foreground">{it.date}</span>
              )}
            </div>
            <p className="text-sm text-primary">{it.sub}</p>
            {it.description && (
              <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>
            )}
          </Card>
        </motion.li>
      ))}
    </ol>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've built things">
      <Timeline
        icon={Briefcase}
        items={[
          {
            title: "Frontend Developer",
            sub: "Future Fashion E-Commerce Website",
            date: "Feb 2025 – May 2025",
            description:
              "Built a responsive e-commerce UI, integrated Firebase Auth, and shipped a functional shopping cart.",
          },
          {
            title: "Backend Developer",
            sub: "MovieFlix Recommendation System",
            date: "Jul 2025 – May 2026",
            description:
              "Designed REST APIs and a recommendation engine backed by MongoDB.",
          },
        ]}
      />
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Timeline
        icon={GraduationCap}
        items={[
          {
            title: "B.Tech, Computer Science Engineering",
            sub: "Vignan University",
            date: "2023 – 2027",
          },
          {
            title: "Intermediate",
            sub: "Sri Chaitanya Junior College",
          },
          {
            title: "SSC",
            sub: "Narayana E-Techno School",
          },
        ]}
      />
    </Section>
  );
}

const CERTS = [
  { title: "AWS Training & Certification", issuer: "Amazon Web Services" },
  { title: "React", issuer: "Infosys Springboard" },
  { title: "DB2 Certification", issuer: "IBM" },
  { title: "Hackathon Participation", issuer: "Multiple events" },
];

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials & achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="h-full rounded-2xl border border-border p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks for reaching out! I'll get back to you soon.");
    }, 700);
  };
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      subtitle="Have a project, opportunity, or just want to say hi? Drop a message."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Card className="h-full rounded-2xl border border-border p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email or socials? I usually reply within a day.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { icon: Mail, label: "Email", href: "mailto:settyvaraprasad2005@gmail.com", value: "settyvaraprasad2005@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/varaprasadsetty/", value: "linkedin.com/in/varaprasadsetty/" },
                { icon: Github, label: "GitHub", href: "https://github.com/prasad0876", value: "github.com/prasad0876" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border p-3 transition-all hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {s.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {s.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Card>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Card className="rounded-2xl border border-border p-8 shadow-[var(--shadow-card)]">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                <Input id="email" type="email" name="email" required placeholder="jane@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project…" />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={sending}>
                {sending ? "Sending…" : (<><Send className="mr-1.5 h-4 w-4" /> Send message</>)}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
        <p>© 2026 Setty Varaprasad</p>
        <p></p>
      </div>
    </footer>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Portfolio() {
  const active = useActiveSection();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}