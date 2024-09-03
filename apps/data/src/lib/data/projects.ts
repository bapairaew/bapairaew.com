import {
  type GrayMatterFileWithPath,
  getMarkdownFrontMatter,
} from "./markdown";
import path from "path";

export type Project = {
  slug: string;
  title: string;
  subtitle: string | null;
  description: string;
  keywords: string;
  year: string | null;
  tags: {
    text: string;
    type: string;
  }[];
  content: string;
};

const parseProject = (project: GrayMatterFileWithPath): Project => {
  const frameworks = [
    ".NET",
    "Qt",
    "jQuery",
    "AngularJS",
    "Bootstrap",
    "React",
    "Node.js",
    "Socket.io",
    "Redux",
    "Next.js",
    "GraphQL",
    "Serverless",
    "React Native",
    "React Native Web",
    "Expo",
    "Serverless",
    "SWR",
    "Tailwind",
  ];

  const languages = [
    "C#",
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "CSS",
    "HTML",
    "TypeScript",
  ];

  const layers = ["Frontend", "Backend"];

  const types = ["Mobile app", "Desktop app", "Web app"];

  const platforms = ["iOS", "Android", "Symbian", "Windows Phone", "Windows"];

  const database = ["MongoDB", "MySQL", "MSSQL"];

  const companies = [
    "Chulalongkorn University",
    "Microsoft",
    "Nokia",
    "SAMART",
    "M-Active",
    "ZyLab",
    "AnnTac",
    "Staples",
    "Thomson Reuters",
    "LSE",
    "Imperial College London",
    "PwC",
    "Oddle",
    "Argile",
  ];

  const others = [
    "Software competition",
    "School project",
    "IEEE",
    "Publication",
    "Design system",
    "Chatbot",
    "Silverlight",
    "AWS",
  ];

  const [title, subtitle] = project.data.title.split(" - ");
  const jsonTime =
    typeof project.data.publishedTime === "string"
      ? project.data.publishedTime
      : project.data.publishedTime?.toJSON?.();
  return {
    slug: path.parse(project.path).name,
    title,
    subtitle,
    description: project.data.description,
    keywords: project.data.keywords,
    year: jsonTime.split("-")[0],
    tags: project.data.keywords.split(", ").map((text: string) => {
      return {
        text,
        type: frameworks.includes(text)
          ? "Framework"
          : languages.includes(text)
          ? "Language"
          : layers.includes(text)
          ? "Layer"
          : types.includes(text)
          ? "App type"
          : platforms.includes(text)
          ? "Platform"
          : companies.includes(text)
          ? "Company"
          : database.includes(text)
          ? "Database"
          : "Other",
      };
    }),
    content: project.content,
  };
};

const getProjectsPath = (slug = "*") => {
  return path.join(process.cwd(), `public/projects/${slug}.mdx`);
};

export const getProjects = async (slug?: string) => {
  const pattern = getProjectsPath(slug);
  const projects = (await getMarkdownFrontMatter(pattern))
    .map(parseProject)
    .reverse();
  return projects as Project[];
};
