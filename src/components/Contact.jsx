import { Mail, MapPin, Briefcase, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const BASE_URL = import.meta.env.BASE_URL

function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-[#0F0A12]">
        <div className="max-w-6xl mx-auto px-6">

          {/* SECTION HEADING */}
          <div className="mb-14">
            <p className="text-pink-300 font-medium mb-2">
              04 / CONTACT
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Let's connect.
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">

            {/* LEFT SIDE */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Interested in building something{" "}
                <span className="text-pink-300">
                  meaningful?
                </span>
              </h3>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mb-8">
                I'm always excited to connect with people working on
                interesting problems across software, artificial intelligence,
                and technology that creates meaningful impact. Whether you'd
                like to talk about an opportunity, collaborate on a project,
                or simply say hello, I'd love to hear from you.
              </p>

              {/* EMAIL BUTTON */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="mailto:ashantiboone7@gmail.com"
                  className="inline-flex items-center gap-2 bg-pink-400 text-[#0F0A12] px-6 py-3 rounded-lg font-semibold hover:bg-pink-300 transition"
                >
                  <Mail size={19} />
                  Say Hello
                </a>

                <a
                  href="{BASE_URL}documents/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-pink-400/40 px-6 py-3 rounded-lg font-semibold text-slate-200 hover:border-pink-300 hover:text-pink-200 transition"
                >
                  View Resume
                  <ArrowUpRight size={17} />
                </a>
              </div>

              {/* DETAILS */}
              <div className="space-y-6 mb-10">

                <div className="flex gap-4">
                  <div className="text-pink-300 mt-1">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Email
                    </p>

                    <a
                      href="mailto:ashantiboone7@gmail.com"
                      className="text-slate-200 hover:text-pink-300 transition"
                    >
                      ashantiboone7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-pink-300 mt-1">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Location
                    </p>

                    <p className="text-slate-200">
                      Atlanta, GA · Open to relocation
                    </p>

                    <p className="text-slate-500 text-sm mt-1">
                      San Francisco · New York · Chicago · DMV · Texas
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-pink-300 mt-1">
                    <Briefcase size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Availability
                    </p>

                    <p className="text-slate-200">
                      Open to full-time opportunities beginning 2027
                    </p>
                  </div>
                </div>

              </div>

              {/* SOCIALS */}
              <div>
                <p className="text-sm text-slate-500 mb-4">
                  Find me online
                </p>

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
            </div>

            {/* RIGHT SIDE — PHOTO */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">

                {/* PINK GLOW */}
                <div className="absolute -inset-8 bg-pink-500/10 blur-3xl rounded-full"></div>

                {/* OFFSET BORDER */}
                <div className="absolute -inset-4 border border-pink-400/30 rounded-3xl -rotate-3"></div>

                <img
                  src="{BASE_URL}images/contact-ashanti.jpeg"
                  alt="Ashanti Boone"
                  className="relative w-full aspect-[4/5] object-cover rounded-3xl"
                />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F0A12] border-t border-pink-400/10">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row gap-2 justify-between items-center text-sm text-slate-500">

          <p>
            Designed & built by Ashanti Boone.
          </p>

          <p>
            © 2026 Ashanti Boone
          </p>

        </div>
      </footer>
    </>
  )
}

export default Contact