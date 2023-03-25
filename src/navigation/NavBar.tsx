import Link from "next/link";
import React from "react";

const NavBar = () => (
  <div className="navbar bg-base-800">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Home</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
        <li tabIndex={0}>
          <a>
            Social
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul className="p-2 bg-base-100">
            <li>
              <Link href="https://github.com/AnilAntony3134">
                <a>Github</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/iamanilantony/">
                <a>LinkedIn</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a>
            <input type="checkbox" className="toggle" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
