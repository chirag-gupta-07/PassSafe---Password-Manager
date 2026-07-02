import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center cursor-pointer select-none">
            <span className="text-xl font-extrabold tracking-tight text-slate-100 flex items-center">
              <span className="text-emerald-500 font-mono">&lt;</span>
              <span>Pass</span>
              <span className="text-emerald-400">Safe</span>
              <span className="text-emerald-500 font-mono">/&gt;</span>
            </span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>

            {/* GitHub Button */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.867 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
