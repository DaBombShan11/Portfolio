import { useState } from "react"
const BASE_URL = import.meta.env.BASE_URL

const projects = [
  {
    title: "Ikhaya Lethu × Develop for Good",
    category: "Product",
    role: "Product Manager",
    image: "{BASE_URL}images/project-ikhaya-lethu.jpg",
    award: null,
    description:
      "Led a cross-functional team redesigning the digital presence of a South African nonprofit serving older adults. Managed product scope, client communication, platform decisions, task assignments, and delivery of a responsive WordPress website.",
    technologies: [
      "Product Management",
      "WordPress",
      "GiveWP",
      "Client Collaboration",
      "Agile",
    ],
    links: [
      {
        label: "View Website",
        url: "https://www.ikhayalethucarefortheelderly.org/",
      },
      {
        label: "View Presentation",
        url: "{BASE_URL}documents/project-ikhaya-lethu-presentation.pdf",
      },
    ],
  },

  {
    title: "YouTube Engagement & Comment Extremeness",
    category: "Research",
    role: "Researcher",
    image: "{BASE_URL}images/project-youtube-extremeness.jpg",
    award: null,
    description:
      "Analyzed more than 691,000 YouTube comments to study whether highly engaged videos attract more extreme comment sections. Used sentiment and toxicity analysis to construct an extremeness metric and found that video category was more predictive of comment extremeness than engagement itself.",
    technologies: [
      "Python",
      "NLP",
      "VADER",
      "Detoxify",
      "YouTube API",
      "Data Analysis",
    ],
    links: [
      {
        label: "Read Paper",
        url: "{BASE_URL}documents/project-youtube-extremeness-paper.pdf",
      },
      {
        label: "View Presentation",
        url: "{BASE_URL}documents/project-youtube-extremeness-presentation.pdf",
      },
    ],
  },

  {
    title: "AI Literacy Escape Room",
    category: "Research",
    secondaryCategory: "Education",
    role: "Volunteer Contributor",
    image: "{BASE_URL}images/project-ai-literacy.jpg",
    award: null,
    description:
      "Contributed to a two-player educational escape room designed to help non-expert adults better understand artificial intelligence. Volunteered on puzzle ideation and helped implement portions of the HTML, CSS, and JavaScript prototype around topics including AI bias, reliability, and responsible use.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "AI Literacy",
      "Human-AI Interaction",
      "Game Design",
    ],
    links: [
      {
        label: "Play Two-Player Game",
        url: "https://dabombshan11.github.io/ProFailer-/",
      },
      {
        label: "View Code",
        url: "https://github.com/DaBombShan11/ProFailer-",
      },
    ],
  },

  {
    title: "Dementia NLP Research",
    category: "Research",
    role: "Undergraduate Research Assistant",
    image: "{BASE_URL}images/project-dementia-nlp.jpg",
    award: "1st Place — University Research & Innovation Expo",
    description:
      "Applied natural language processing techniques, including TF-IDF, to analyze dementia community discussions and identify key terms and language patterns. Presented the research at the University Research & Innovation Expo and won first place.",
    technologies: [
      "Python",
      "NLP",
      "TF-IDF",
      "Text Analysis",
      "Research",
    ],
    links: [
      {
        label: "View Poster",
        url: "{BASE_URL}documents/project-dementia-nlp-poster.pdf",
      },
    ],
  },

  {
    title: "Hate Speech Detection",
    category: "Research",
    secondaryCategory: "Capstone",
    role: "Senior Capstone",
    image: "{BASE_URL}images/project-hate-speech.jpg",
    award: null,
    description:
      "Developed a senior capstone project focused on detecting hate speech in online text using machine learning and natural language processing techniques.",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Classification",
      "Data Analysis",
    ],
    links: [
      {
        label: "Read Paper",
        url: "{BASE_URL}documents/project-hate-speech-paper.pdf",
      },
      {
        label: "View Poster",
        url: "{BASE_URL}documents/project-hate-speech-poster.pdf",
      },
    ],
  },

  {
    title: "Bulldog Grub",
    category: "Personal",
    secondaryCategory: "Product",
    role: "Mobile App Creator",
    image: "{BASE_URL}images/project-bulldog-grub.jpg",
    award: "1st Place — Mobile App Competition",
    description:
      "Designed and built a mobile application using Adalo as part of a university mobile app competition. The project combined product design, no-code development, and rapid prototyping and earned first place.",
    technologies: [
      "Adalo",
      "No-Code Development",
      "Product Design",
      "Mobile App Development",
      "Prototyping",
    ],
    links: [
      {
        label: "Launch App",
        url: "https://previewer.adalo.com/3cd11fec-e835-45b0-8665-6df9d4d3aa8e?target=b07e30ac75744002a5d0698b1cea993e&params=%7B%7D",
      },
    ],
  },
]

const filters = ["All", "Product", "Research", "Personal", "Writing"]

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.secondaryCategory === activeFilter
        )

  return (
    <section id="projects" className="py-24 bg-[#130D16]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-12">
          <p className="text-pink-300 font-medium mb-2">
            03 / PROJECTS & RESEARCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Things I've built, researched, and helped bring to life.
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl">
            A collection of work spanning software, artificial intelligence,
            research, product development, technology education, and writing.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                  isActive
                    ? "bg-pink-400 text-[#0F0A12] border-pink-400"
                    : "border-pink-400/25 text-slate-300 hover:border-pink-400 hover:text-pink-200"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        {/* PROJECT GRID */}
        {activeFilter !== "Writing" && (
          <div className="grid md:grid-cols-2 gap-7">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-[#0F0A12] hover:border-pink-400/45 transition flex flex-col"
              >

                {/* PROJECT IMAGE */}
                <div className="h-64 bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-7 flex flex-col flex-1">

                  {/* CATEGORY + AWARD */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">

                    <span className="text-xs uppercase tracking-wider text-pink-300 font-semibold">
                      {project.category}
                    </span>

                    {project.secondaryCategory && (
                      <>
                        <span className="text-slate-700">
                          •
                        </span>

                        <span className="text-xs uppercase tracking-wider text-slate-500">
                          {project.secondaryCategory}
                        </span>
                      </>
                    )}

                    {project.award && (
                      <span className="ml-auto text-xs bg-pink-400/10 border border-pink-400/30 text-pink-200 px-3 py-1 rounded-full">
                        🏆 {project.award}
                      </span>
                    )}

                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>

                  {/* ROLE */}
                  <p className="text-pink-300 font-medium mb-5">
                    {project.role}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* TECH PILLS */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1.5 rounded-full border border-pink-400/20 bg-pink-400/5 text-pink-100 text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-wrap gap-x-5 gap-y-3 mt-auto">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-300 font-semibold hover:text-pink-200 transition"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

        {/* FEATURED WRITING */}
        {(activeFilter === "All" || activeFilter === "Writing") && (
          <div className={activeFilter === "Writing" ? "mt-4" : "mt-20"}>

            <div className="mb-8">
              <p className="text-pink-300 font-medium mb-2">
                FEATURED WRITING
              </p>

              <h3 className="text-3xl font-bold mb-3">
                Ideas beyond the code.
              </h3>

              <p className="text-slate-400 max-w-2xl">
                Exploring the ways technology intersects with people, policy,
                education, and everyday life.
              </p>
            </div>

            {/* ARTICLE CARD */}
            <article className="border border-slate-800 rounded-2xl p-7 md:p-8 bg-[#0F0A12] hover:border-pink-400/45 transition">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                {/* ARTICLE INFO */}
                <div className="max-w-3xl">

                  <div className="flex flex-wrap items-center gap-3 mb-4">

                    <span className="text-xs uppercase tracking-wider text-pink-300 font-semibold">
                      Article
                    </span>

                    <span className="text-slate-700">
                      •
                    </span>

                    <span className="text-xs uppercase tracking-wider text-slate-500">
                      AI & Society
                    </span>

                  </div>

                  <h4 className="text-2xl md:text-3xl font-bold mb-3">
                    When AI Stopped Feeling Distant
                  </h4>

                  <p className="text-pink-300 font-medium mb-5">
                    [DEFINE]: Our AI Futures
                  </p>

                  <p className="text-slate-300 leading-relaxed">
                    A reflection on the moment artificial intelligence stopped
                    feeling like a distant technical concept and became
                    something shaping everyday life. I explore algorithmic
                    bias, AI's growing influence on education and social
                    media, and why those experiences pushed me toward AI
                    literacy, responsible development, policy, and governance.
                  </p>

                </div>

                {/* ARTICLE LINK */}
                <div className="shrink-0">

                  <a
                    href="https://www.defineouraifutures.com/stories/3fe7wfk8pp8tvtocrofvolyhqo86ib-c6wxm-edxsc-mb4et-pjy78-3zg82"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-pink-400/40 text-pink-300 font-semibold hover:border-pink-300 hover:text-pink-200 transition"
                  >
                    Read Article ↗
                  </a>

                </div>

              </div>
            </article>

          </div>
        )}

      </div>
    </section>
  )
}

export default Projects