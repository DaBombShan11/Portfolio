
import { useState } from "react"
import { ChevronDown, GraduationCap } from "lucide-react"

const schools = [
  {
    id: "gatech",
    name: "Georgia Institute of Technology",
    degree: "M.S. Computer Science",
    specialization: "Artificial Intelligence",
    dates: "August 2025 – December 2026",
    gpa: "3.6",
    coursework: [
      "Machine Learning",
      "Knowledge-Based AI",
      "Graduate Algorithms",
      "Social Computing",
      "Human-Centered Data Analysis",
      "Bioinformatics Algorithms",
    ],
    highlights: [
      {
        title: "AI Security Research Lab (AISRL)",
        role: "Researcher — Project CORE",
        description:
          "Contributing to a lab-based AI security body of knowledge by developing virtual educational material on model weight exfiltration and covert channels, including hands-on exercises focused on security threats and detection.",
      },
    ],
  },
  {
    id: "bowie",
    name: "Bowie State University",
    degree: "B.S. Computer Science",
    specialization: null,
    dates: "August 2021 – December 2024",
    gpa: "3.9",
    coursework: [
      "Technical Writing",
      "Artificial Intelligence",
      "Database Management",
      "Computer Ethics: Social and Legal Issues",
      "Linear Algebra",
      "Systems Programming",
    ],
    highlights: [
      {
        title: "Women in Computer Science",
        role: "President · 2022–2024",
        description:
          "Led fundraising efforts supporting She Code Africa, organized community-building events, and hosted professional development opportunities for women pursuing careers in computing.",
      },
    ],
  },
]

function Education() {
  const [expandedSchools, setExpandedSchools] = useState(["gatech"])

  function toggleSchool(id) {
    setExpandedSchools((current) =>
      current.includes(id)
        ? current.filter((schoolId) => schoolId !== id)
        : [...current, id]
    )
  }

  return (
    <section id="education" className="py-24 bg-[#0F0A12]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-14">
          <p className="text-pink-300 font-medium mb-2">
            02 / EDUCATION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where I've learned and grown.
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl">
            My academic journey, research, and leadership experiences.
          </p>
        </div>

        {/* SCHOOL CARDS */}
        <div className="space-y-6">
          {schools.map((school) => {
            const isExpanded = expandedSchools.includes(school.id)

            return (
              <div
                key={school.id}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-[#130D16] hover:border-pink-400/40 transition"
              >
                {/* CLICKABLE SCHOOL HEADER */}
                <button
                  type="button"
                  onClick={() => toggleSchool(school.id)}
                  aria-expanded={isExpanded}
                  aria-controls={`${school.id}-details`}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-4 md:gap-6"
                >
                  <div className="p-3 rounded-xl bg-pink-400/10 text-pink-300 shrink-0">
                    <GraduationCap size={28} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {school.name}
                    </h3>

                    <p className="text-slate-300 mb-1">
                      {school.degree}
                      {school.specialization &&
                        ` · ${school.specialization}`}
                    </p>

                    <p className="text-slate-500 text-sm mb-3">
                      {school.dates}
                    </p>

                    <span className="inline-block text-pink-200 text-sm font-medium border border-pink-400/25 bg-pink-400/5 rounded-full px-3 py-1">
                      GPA: {school.gpa} / 4.0
                    </span>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`text-pink-300 shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* EXPANDED CONTENT */}
                {isExpanded && (
                  <div
                    id={`${school.id}-details`}
                    className="px-6 pb-8 md:px-8"
                  >
                    <div className="border-t border-slate-800 pt-7">

                      {/* COURSEWORK */}
                      <h4 className="text-pink-300 font-semibold mb-4">
                        Relevant Coursework
                      </h4>

                      <div className="flex flex-wrap gap-3 mb-9">
                        {school.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-4 py-2 rounded-full border border-pink-400/25 bg-pink-400/5 text-pink-100 text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>

                      {/* RESEARCH / LEADERSHIP */}
                      <h4 className="text-pink-300 font-semibold mb-5">
                        {school.id === "gatech"
                          ? "Research Experience"
                          : "Leadership Experience"}
                      </h4>

                      {school.highlights.map((highlight) => (
                        <div key={highlight.title}>
                          <h5 className="text-lg font-semibold mb-1">
                            {highlight.title}
                          </h5>

                          <p className="text-pink-200 text-sm mb-3">
                            {highlight.role}
                          </p>

                          <p className="text-slate-300 leading-relaxed max-w-3xl">
                            {highlight.description}
                          </p>
                        </div>
                      ))}

                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
