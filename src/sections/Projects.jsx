import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "CryptoBuddy",
    description:
      "CryptoBuddy provides latest information regarding cryptocurrency to user. It's built using React, Redux Toolkit Query, Tailwind CSS, Framer Motion, React Chart JS 2",
    image: "/projects/cryptobuddy.jpg",
    tags: ["React JS", "Redux Toolkit Query", "Tailwind CSS", "Framer Motion"],
    link: "https://cryptobuddyapp.netlify.app/",
    github: "https://github.com/Meet1103/CryptoBuddy",
  },
  {
    title: "Master The Event Loop",
    description:
      "Group project: This project is based on how the Javascript event loop works under the hood. It covers topics like call stack, web APIs, callback queue, microtask queue, and event loop mechanism.",
    image: "/projects/event-loop.jpg",
    tags: ["React JS", "Redux", "Styled Components"],
    link: "https://master-the-event-loop.netlify.app/",
    github: "https://github.com/Meet1103/master-the-event-loop",
  },
  {
    title: "Todo App",
    description:
      "Todo app is built using React JS. Users can add, complete, update and delete todo. Also Todo list has functionality of drag and drop.",
    image: "/projects/react-todo-app.jpg",
    tags: ["React JS", "Bootstrap", "React Beautiful DnD"],
    link: "https://meet1103.github.io/react-todo-app/",
    github: "https://github.com/Meet1103/react-todo-app",
  },
  {
    title: "Memory Game",
    description:
      "Memory Game is built using React JS. User can select difficulty level, restart game at any given time and see result after they finish playing game.",
    image: "/projects/memory-game.jpg",
    tags: ["React JS"],
    link: "https://memorygameapplication.netlify.app/",
    github: "https://github.com/Meet1103/react-memory-game",
  },
  {
    title: "Weather App",
    description:
      "Weather App is built using React JS. User can search for any city and see current weather information.",
    image: "/projects/weather-app.jpg",
    tags: ["React JS"],
    link: "https://meet1103.github.io/weather-app/",
    github: "https://github.com/Meet1103/weather-app",
  },
  {
    title: "News App",
    description:
      "It is news app created using react and react-router , which list all news channels fetched from news api and on clicking on any news channel , it list all articles of particular news channel.",
    image: "/projects/news-app.jpg",
    tags: ["React JS"],
    link: "https://news-web-application.herokuapp.com/",
    github: "https://github.com/Meet1103/news-app",
  },
  {
    title: "Kitten World",
    description:
      "A simple react app which list cute kitties. Kitties can be filtered through searchfield.",
    image: "/projects/kitten-world.jpg",
    tags: ["React JS"],
    link: "https://meet1103.github.io/kitten-world-app/",
    github: "https://github.com/Meet1103/kitten-world-app",
  },
  {
    title: "CSS Cool Generator",
    description:
      "It is news app created using react and react-router , which list all news channels fetched from news api and on clicking on any news channel , it list all articles of particular news channel.",
    image: "/projects/css-gradient.jpg",
    tags: ["CSS3", "JavaScript"],
    link: "https://meet1103.github.io/Css-Cool-Generator/",
    github: "https://github.com/Meet1103/Css-Cool-Generator",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
