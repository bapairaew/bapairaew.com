import clsx from "clsx";
import styles from "./HeroSection.module.css";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/bapairaew",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ntechaval",
  },
  {
    name: "Email",
    href: "mailto:iam@bapairaew.com",
  },
];

export default function HeroSection() {
  return (
    <>
      <section className="container relative mx-auto px-2 py-32">
        <div className="text-center">
          <h1 className="font-black text-7xl lg:text-8xl">Dom.</h1>
          <h2 className="text-2xl py-6">Software Engineer</h2>
          <ul className="links flex justify-center gap-4 ">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={clsx(
            "gradient opacity-50 -z-10 absolute top-0 left-0 w-full h-full",
            styles.gradient
          )}
        />
      </section>

      <section className="container mx-auto px-4 pb-8 prose text-justify lg:prose-md dark:prose-invert">
        <p>
          👋 This is Dom, a software engineer who’s been piecing together the
          tech puzzle for a good while now. I like to think of myself as someone
          who connects the dots and turns ideas into reality.
        </p>
        <p>
          But I’m not just about coding. I’m a problem solver at heart, and I
          love figuring things out, whether it’s tech-related or not. When I’m
          not working, I’m probably out exploring new places, trying different
          foods, and collecting stories from the people I meet.
        </p>
      </section>
    </>
  );
}
