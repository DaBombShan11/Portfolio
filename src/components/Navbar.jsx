const BASE_URL = import.meta.env.BASE_URL
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F0A12]/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#home">
          <img
            src={`${BASE_URL}images/profile-headshot.jpg`}
            alt="Ashanti Boone"
            className="h-10 w-10 rounded-full object-cover"
          />
        </a>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          <a
            href={`${BASE_URL}documents/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar