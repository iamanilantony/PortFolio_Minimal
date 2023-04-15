import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#pablo"
            >
              <Link href="/">Home</Link>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="https://drive.google.com/file/d/1viRhQqaLC3VEV0xL9wyMaqy0hrkdEbOW/view?usp=sharing"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg opacity-75"></i>
                  <span className="ml-2">Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg opacity-75"></i>
                  <span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i>
                  <span className="ml-2">links</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
