import { FaGithub, FaLinkedin } from "react-icons/fa"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 bg-[#0F0A12]"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-pink-200 mb-4 text-lg">
              Hi, I'm Ashanti Boone 👋🏾
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Software Engineer making technology more{" "}
              <span className="text-pink-300">
                accessible, understandable, and inclusive.
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              I'm a Computer Science master's student at Georgia Tech
              specializing in Artificial Intelligence, with experience
              building software across industry and research. Beyond building
              technology, I enjoy breaking it down through content and
              community—helping more people understand, access, and see
              themselves in tech.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-7">
              <a
                href="#projects"
                className="bg-pink-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-pink-300 transition"
              >
                Explore My Work
              </a>

              <a
                href="/documents/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-pink-400/50 px-6 py-3 rounded-lg font-semibold hover:border-pink-300 hover:text-pink-200 transition"
              >
                View Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              <a
                href="https://github.com/DaBombShan11"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 border border-slate-700 rounded-full text-slate-400 hover:text-pink-300 hover:border-pink-400 hover:-translate-y-1 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/ashanti-boone-15b526221/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 border border-slate-700 rounded-full text-slate-400 hover:text-pink-300 hover:border-pink-400 hover:-translate-y-1 transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              <div className="absolute -inset-8 bg-pink-500/10 blur-3xl rounded-full"></div>

              <div className="absolute -inset-5 border border-pink-400/40 rounded-3xl rotate-3"></div>

              <img
                src="/images/profile-headshot.jpg"
                alt="Ashanti Boone"
                className="relative w-72 md:w-80 lg:w-96 aspect-[4/5] object-cover rounded-3xl"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero