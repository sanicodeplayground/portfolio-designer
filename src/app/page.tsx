import Image from "next/image";
import projects from "./projects";
import experiences from "./experiences";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Define an interface for the Project props
interface ProjectProps {
  title: string;
  page: string;
  img: string;
  tags: string[];
}
// Define an interface for the Experience props
interface ExperienceProps {
  role: string;
  time: string;
  tags: string[];
}

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <div className="my-grid flex flex-col lg:flex-row gap-10 lg:gap-20">
        <Projects />
        <Experiences />
      </div>
      <Footer />
    </>
  );
}

function Intro() {
  return (
    <section className="my-grid">
      <h1 className="xl:leading-tight xl:pr-20">
        Hey, I’m Rosina Pissaco
        <br /> I’m a Product Designer based in Bristol
      </h1>
      <p className="font-medium pb-12 lg:pb-24 lg:pr-16 xl:pr-40">
        Currently, I’m the only Product Designer at NestEgg, a bootstrapped
        startup building a platform that helps Credit Unions and Social Banks
        take better financial decisions. I work across the full end to end
        design process for our B2B, B2C and internal platforms.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section className="lg:w-2/3">
      <h2>Projects</h2>
      <div className="grid gap-8 lg:gap-12">
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            page={project.page}
            img={project.img}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
function Project({ title, page, img, tags }: ProjectProps) {
  return (
    <Link href={page}>
      <article className="flex gap-6 flex-col sm:flex-row">
        <div className="w-full sm:w-[230px]">
          <Image
            src={img}
            alt={title}
            className="rounded-lg"
            layout="responsive"
            width={230}
            height={200}
            priority
          />
        </div>
        <div className="flex flex-col gap-1 lg:gap-2">
          <h3>{title}</h3>
          <div>
            {tags.map((tag, i) => (
              <div
                key={i}
                className="inline-flex items-center mb-2 rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

function Experiences() {
  return (
    <aside className="lg:flex-1">
      <h2>Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((ex) => (
          <Experience
            role={ex.role}
            key={ex.role}
            time={ex.time}
            tags={ex.tags}
          />
        ))}
        <div className="inline-flex align-bottom gap-2 items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            ></path>
          </svg>
          <a
            className="font-medium"
            href="https://drive.google.com/file/d/1oUYhhfmKh6CQ7khCfM8Z0DaMl4Rid2S2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

function Experience({ role, time, tags }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h4>{role}</h4>
        <p className="text-sm">{time}</p>
      </div>
      <div>
        {tags.map((tag, i) => (
          <div
            key={i}
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 mr-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
