import { useState } from "react"
const BASE_URL = import.meta.env.BASE_URL

const experiences = [
  {
    company: "Goldman Sachs",
    role: "Summer Engineering Analyst",
    location: "Dallas, TX",
    dates: "May 2026 – Aug 2026",
    year: "2026",
    image: "`${BASE_URL}images/experience-goldman.jpg",
    summary:
      "Built production features for an internal liquidity platform supporting audit and reporting workflows.",
    bullets: [
      "Developed and deployed React and JavaScript features for an internal liquidity application, translating product requirements into production-ready interfaces.",
      "Built maker-checker audit report tables with advanced search, filtering, and sorting, and integrated frontend components with existing REST APIs and databases.",
      "Collaborated with product managers and backend engineers across implementation, testing, code review, debugging, and deployment.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "Databases",
      "Jest",
      "Git",
    ],
  },

  {
    company: "Johns Hopkins University Applied Physics Laboratory",
    role: "Software Engineer Intern",
    location: "Laurel, MD",
    dates: "May 2025 – Aug 2025",
    year: "2025",
    image: "`${BASE_URL}images/experience-jhu-apl.jpg",
    summary:
      "Developed engineering tools and investigated performance tradeoffs across multithreaded data-processing implementations.",
    bullets: [
      "Designed an intuitive MATLAB GUI for senior engineers, helping reduce user errors and accelerate test execution.",
      "Researched and implemented a C#/.NET and Python data pipeline with a focus on multithreading, runtime performance, and memory usage.",
      "Used Benchmark.NET to evaluate implementation approaches and compare performance tradeoffs.",
    ],
    technologies: [
      "Python",
      "C#",
      ".NET",
      "MATLAB",
      "Benchmark.NET",
      "Multithreading",
    ],
  },

  {
    company: "Apple",
    role: "Hardware Technology Intern",
    location: "Austin, TX",
    dates: "May 2024 – Aug 2024",
    year: "2024",
    image: "`${BASE_URL}images/experience-apple-2024.jpg",
    summary:
      "Improved internal engineering workflows by maintaining automation tools and adding pre-commit code validation.",
    bullets: [
      "Maintained and improved testing automation developed during my previous Apple internship.",
      "Built a tool that automatically checked code for compile errors and formatting issues before changes were committed to Perforce.",
      "Focused on improving reliability and efficiency within existing hardware testing workflows.",
    ],
    technologies: [
      "Python",
      "Perforce",
      "Automation",
      "Testing",
    ],
  },

  {
    company: "Apple",
    role: "Hardware Technology Intern",
    location: "Austin, TX",
    dates: "May 2023 – Aug 2023",
    year: "2023",
    image: "`${BASE_URL}images/experience-apple-2023.jpg",
    summary:
      "Automated hardware-test data processing and visualization to make engineering workflows significantly faster.",
    bullets: [
      "Developed three Python testing scripts that automated data analysis for hardware engineers.",
      "Reduced post-processing time by more than 90% while improving the clarity of data visualization.",
      "Integrated results into a graphical user interface to create a faster and more intuitive testing workflow.",
    ],
    technologies: [
      "Python",
      "Automation",
      "Data Analysis",
      "Data Visualization",
      "GUI Development",
    ],
  },

  {
    company: "Northrop Grumman",
    role: "Cyber Software Engineer Intern",
    location: "Baltimore, MD",
    dates: "May 2022 – Aug 2022",
    year: "2022",
    image: "`${BASE_URL}images/experience-northrop.jpg",
    summary:
      "Built a prototype testing framework while working with engineers in a cybersecurity-focused Agile environment.",
    bullets: [
      "Developed a Python-based testing framework prototype using YAML-configured dynamic imports.",
      "Worked with fellow interns and full-time engineers to explore flexible approaches to software testing.",
      "Collaborated within an Agile engineering environment.",
    ],
    technologies: [
      "Python",
      "YAML",
      "Software Testing",
      "Agile",
    ],
  },
]

function Experience() {
  const [openExperience, setOpenExperience] = useState(null)

  function toggleExperience(index) {
    setOpenExperience(openExperience === index ? null : index)
  }

  return (
    <section id="experience" className="py-24 bg-[#0F0A12]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-16">
          <p className="text-pink-300 font-medium mb-2">
            02 / EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I've worked.
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl">
            A look at the teams, technologies, and problems that have shaped my
            experience as a software engineer.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* vertical timeline line */}
          <div className="absolute left-[26px] md:left-[78px] top-0 bottom-0 w-px bg-pink-400/20"></div>

          <div className="space-y-14">
            {experiences.map((experience, index) => {
              const isOpen = openExperience === index

              return (
                <div
                  key={`${experience.company}-${experience.dates}`}
                  className="relative grid md:grid-cols-[120px_1fr] gap-6"
                >

                  {/* YEAR + TIMELINE DOT */}
                  <div className="relative">
                    <p className="hidden md:block text-slate-500 font-medium pt-2">
                      {experience.year}
                    </p>

                    <div className="absolute left-[20px] md:left-[72px] top-2 w-3.5 h-3.5 rounded-full bg-pink-300 border-4 border-[#0F0A12] box-content"></div>
                  </div>

                  {/* EXPERIENCE CARD */}
                  <div className="ml-12 md:ml-0 border border-slate-800 rounded-2xl overflow-hidden bg-[#130D16] hover:border-pink-400/40 transition">

                    <div className="grid lg:grid-cols-[1.4fr_0.8fr]">

                      {/* TEXT */}
                      <div className="p-7 md:p-8">

                        <div className="mb-6">
                          <p className="text-pink-300 text-sm font-medium mb-2">
                            {experience.company}
                          </p>

                          <h3 className="text-2xl font-bold mb-2">
                            {experience.role}
                          </h3>

                          <p className="text-slate-500">
                            {experience.location} · {experience.dates}
                          </p>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                          {experience.summary}
                        </p>

                        {/* TECH PILLS */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1.5 rounded-full border border-pink-400/20 bg-pink-400/5 text-pink-100 text-xs"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleExperience(index)}
                          className="text-pink-300 font-semibold hover:text-pink-200 transition"
                        >
                          {isOpen
                            ? "Hide Experience ↑"
                            : "View Experience ↓"}
                        </button>

                        {/* EXPANDED BULLETS */}
                        {isOpen && (
                          <div className="mt-7 pt-6 border-t border-slate-800">
                            <ul className="space-y-4">
                              {experience.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex gap-3 text-slate-300 leading-relaxed"
                                >
                                  <span className="text-pink-300 mt-1">
                                    ✦
                                  </span>

                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>

                      {/* PHOTO */}
                      <div className="min-h-[260px] lg:min-h-full bg-slate-900 overflow-hidden">
                        <img
                          src={experience.image}
                          alt={`${experience.company} internship`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience