import { useState } from "react"

const BASE_URL = import.meta.env.BASE_URL

const communities = [
  {
    name: "Girls Who Code",
    shortLabel: "GWC",
    image: `${BASE_URL}images/community-girls-who-code.jpg`,
    details: [
      "Alumni Advisory Council member",
      "Public speaker and panelist",
      "Narrated educational lessons for students",
      "Former College Loop President and founder at Bowie State",
    ],
  },
  {
    name: "Bowie State University",
    shortLabel: "HBCU Alum",
    image: `${BASE_URL}images/community-bowie-state.jpg`,
    details: [
      "B.S. in Computer Science",
      "Proud HBCU alumna",
      "Dean's Outstanding Alumna, 2025",
      "Built community through student leadership and mentorship",
    ],
  },
  {
    name: "GEM Fellowship",
    shortLabel: "GEM Fellow",
    image: `${BASE_URL}images/community-gem.jpg`,
    details: [
      "Employer Fellow",
      "Fully funded graduate tuition at Georgia Tech",
      "Completed an internship with Johns Hopkins University",
      "Part of a national community supporting graduate students in STEM",
    ],
  },
  {
    name: "ColorStack",
    shortLabel: "ColorStack",
    image: `${BASE_URL}images/community-colorstack.jpg`,
    details: [
      "Member of a community supporting Black and Latinx students in computing",
      "Hosted a ColorStack community meetup in Dallas",
      "Connected with students and professionals across technology",
    ],
  },
]

const awards = [
  {
    title: "NASA MITTIC Winner",
    subtitle: "Screen Sight",
    year: "2025",
    image: `${BASE_URL}images/award-nasa-mittic.jpg`,
    description:
      "Led a team developing Screen Sight, an accessibility solution that adapts digital displays based on a user's vision prescription. Through NASA MITTIC, we used NASA technology and commercialization methods, presented our concept in Houston, and won a $20,000 prize.",
    linkText: "View Presentation",
    link: `${BASE_URL}documents/screensight-presentation.pdf`,
  },
  {
    title: "NCWIT AiC Collegiate Award Finalist",
    subtitle: "Multithreading Research",
    year: "2025",
    image: `${BASE_URL}images/award-ncwit.jpg`,
    description:
      "Recognized as a collegiate award finalist for research exploring multithreading and parallel computing, with a focus on improving performance through concurrent processing.",
    linkText: "Read Paper",
    link: `${BASE_URL}documents/multithreading-paper.pdf`,
  },
  {
    title: "Dean's Outstanding Alumna",
    subtitle: "Bowie State University",
    year: "2025",
    image: `${BASE_URL}images/award-deans-outstanding-alumna.jpg`,
    description:
      "Recognized by Bowie State University for academic, technical, and community impact. My graduate spotlight highlights my path through computer science, industry internships, accessibility innovation, and my long-term interest in AI policy.",
    linkText: "Read Bowie State Feature",
    link: "https://www.bowiestate.edu/bulldog-connection/commencement/graduates-spotlight-archived/index-archive.php#:~:text=Ashanti%20Boone%20'24",
  },
]

const techCategories = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "Java", "HTML/CSS", "GraphQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face",
    ],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "npm", "Node.js"],
  },
  {
    title: "AI & Data",
    items: [
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "Data Analysis",
    ],
  },
]

function About() {
  const [flippedCommunity, setFlippedCommunity] = useState(null)
  const [flippedAward, setFlippedAward] = useState(null)
  const [activeTechCategory, setActiveTechCategory] = useState("Languages")

  function flipCommunity(index) {
    setFlippedCommunity(flippedCommunity === index ? null : index)
  }

  function flipAward(index) {
    setFlippedAward(flippedAward === index ? null : index)
  }

  return (
    <section id="about" className="py-24 bg-[#130D16]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-14">
          <p className="text-pink-300 font-medium mb-2">
            01 / ABOUT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A little more about me.
          </h2>
        </div>

        {/* BIO + CURRENTLY */}
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 mb-20">

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm a Computer Science master's student at Georgia Tech
              specializing in Artificial Intelligence, but my relationship
              with technology has always extended beyond writing code. From
              software engineering in industry to AI research and product
              development, I enjoy taking ideas from problems to working
              solutions—and thinking critically about who those solutions are
              designed to serve.
            </p>

            <p>
              A lot of that perspective comes from the communities that shaped
              me. As an HBCU graduate and longtime member of communities like
              Girls Who Code, I've seen how access, representation, and
              mentorship can change someone's relationship with technology.
              Whether I'm building software, researching AI, mentoring, or
              creating content, I want to help make technology easier to
              understand and more accessible to the people who are often left
              out of the conversation.
            </p>
          </div>

          {/* CURRENTLY */}
          <div className="border border-pink-400/20 rounded-2xl p-7 bg-pink-400/5">
            <p className="text-pink-300 text-sm font-semibold tracking-wider uppercase mb-6">
              Currently
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  Education
                </p>

                <p className="font-semibold">
                  M.S. Computer Science
                </p>

                <p className="text-slate-400">
                  Georgia Institute of Technology
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  Specialization
                </p>

                <p className="font-semibold">
                  Artificial Intelligence
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-3">
                  Interested In
                </p>

                <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-slate-400">
                  <span>Software Engineering</span>
                  <span>AI / ML</span>
                  <span>Responsible AI</span>
                  <span>AI Policy</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* COMMUNITIES */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Communities That Shaped Me
            </h3>

            <p className="text-slate-400">
              Click anywhere on a card to flip it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {communities.map((community, index) => {
              const isFlipped = flippedCommunity === index

              return (
                <button
                  key={community.name}
                  type="button"
                  onClick={() => flipCommunity(index)}
                  aria-label={`Flip ${community.name} card`}
                  className="relative min-h-[360px] w-full text-left cursor-pointer"
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className="absolute inset-0 w-full h-full transition-transform duration-500"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >

                    {/* FRONT */}
                    <div
                      className="absolute inset-0 border border-slate-800 rounded-2xl overflow-hidden bg-[#0F0A12] hover:border-pink-400/60 transition"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="h-48 overflow-hidden bg-slate-900">
                        <img
                          src={community.image}
                          alt={community.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="p-5">
                        <p className="text-pink-300 text-xs uppercase tracking-wider mb-1">
                          {community.shortLabel}
                        </p>

                        <h4 className="font-semibold text-lg">
                          {community.name}
                        </h4>

                        <div className="flex justify-between items-center mt-5">
                          <span className="text-slate-600 text-sm">
                            Learn more
                          </span>

                          <span className="text-pink-300 text-sm">
                            Flip ↻
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 border border-pink-400/35 rounded-2xl bg-[#0F0A12] p-6 flex flex-col"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-pink-300 text-xs uppercase tracking-wider mb-2">
                        {community.shortLabel}
                      </p>

                      <h4 className="text-xl font-semibold mb-6">
                        {community.name}
                      </h4>

                      <ul className="space-y-4">
                        {community.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-sm text-slate-300 flex gap-3"
                          >
                            <span className="text-pink-300">
                              ✦
                            </span>

                            <span>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex justify-between items-center mt-auto pt-5">
                        <span className="text-slate-600 text-sm">
                          Back to image
                        </span>

                        <span className="text-pink-300 text-sm">
                          Flip ↻
                        </span>
                      </div>
                    </div>

                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* RECOGNITION */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Selected Recognition
            </h3>

            <p className="text-slate-400">
              Flip each card to see the story behind the recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {awards.map((award, index) => {
              const isFlipped = flippedAward === index

              return (
                <div
                  key={award.title}
                  className="relative min-h-[440px]"
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-500"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >

                    {/* FRONT */}
                    <button
                      type="button"
                      onClick={() => flipAward(index)}
                      className="absolute inset-0 w-full h-full text-left border border-slate-800 rounded-2xl overflow-hidden bg-[#0F0A12] hover:border-pink-400/50 transition"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="h-56 overflow-hidden bg-slate-900">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="p-6">
                        <span className="text-pink-300 text-xl">
                          ✦
                        </span>

                        <h4 className="text-lg font-semibold mt-4 mb-2">
                          {award.title}
                        </h4>

                        <p className="text-slate-400">
                          {award.subtitle}
                        </p>

                        <div className="flex justify-between items-center mt-5">
                          <p className="text-slate-600 text-sm">
                            {award.year}
                          </p>

                          <p className="text-pink-300 text-sm">
                            Flip ↻
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 border border-pink-400/35 rounded-2xl bg-[#0F0A12] p-7 flex flex-col"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-pink-300 text-sm font-medium mb-2">
                        {award.year}
                      </p>

                      <h4 className="text-2xl font-bold mb-2">
                        {award.title}
                      </h4>

                      <p className="text-slate-400 mb-6">
                        {award.subtitle}
                      </p>

                      <p className="text-slate-300 leading-relaxed mb-7">
                        {award.description}
                      </p>

                      <a
                        href={award.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="text-pink-300 font-semibold hover:text-pink-200 transition mb-6"
                      >
                        {award.linkText} ↗
                      </a>

                      <button
                        type="button"
                        onClick={() => flipAward(index)}
                        className="text-left text-pink-300 text-sm mt-auto hover:text-pink-200 transition"
                      >
                        Flip ↻
                      </button>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* TOOLS & TECHNOLOGIES */}
        <div>
          <h3 className="text-2xl font-bold mb-8">
            Tools & Technologies
          </h3>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-8">
            {techCategories.map((category) => {
              const isActive = activeTechCategory === category.title

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveTechCategory(category.title)}
                  aria-pressed={isActive}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
                    isActive
                      ? "bg-pink-400 text-[#0F0A12] border-pink-400"
                      : "border-pink-400/25 text-slate-300 hover:border-pink-400 hover:text-pink-200"
                  }`}
                >
                  {category.title}
                </button>
              )
            })}
          </div>

          {/* SELECTED CATEGORY CONTENT */}
          <div className="border border-pink-400/20 rounded-2xl bg-pink-400/5 p-6 md:p-8 min-h-[160px]">
            {techCategories
              .filter((category) => category.title === activeTechCategory)
              .map((category) => (
                <div key={category.title}>
                  <p className="text-pink-300 text-sm font-semibold uppercase tracking-wider mb-5">
                    {category.title}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full border border-pink-400/25 bg-[#130D16] text-pink-100 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About