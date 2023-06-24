import { useTheme } from "next-themes";
import React, { useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  console.log(toggleMenu);

  return (
    <>
      <nav className="navbar bg-base-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 ${
                menuOpen ? "visible" : "invisible"
              }`}
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`navbar-center ${menuOpen ? "visible" : "invisible"}`}>
          <ul
            tabIndex={0}
            className={`flex mt-3 z-[1] shadow bg-base-100 rounded-box p-2 cursor-pointer ${
              menuOpen ? "invisible" : "visible"
            }`}
          >
            <li className="mx-2">
              <a>Homepage</a>
            </li>
            <li className="mx-2">
              <a>Projects</a>
            </li>
            <li className="mx-2">
              <a>About</a>
            </li>
            <li className="mx-2">
              <a>Blogs</a>
            </li>
            <li className="mx-2 transition-colors duration-300 hover:bg-gray-500 hover:text--gray-800">
              <a>Events</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button>
            <div className="indicator">
              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i>
                <span className="ml-2">
                  <input
                    type="checkbox"
                    className="toggle"
                    defaultChecked
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  />
                </span>
              </a>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}
