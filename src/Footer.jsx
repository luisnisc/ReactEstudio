import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <p>
          <a
            className="hover:text-blue-800"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/luisnisc"
          >
            LuisNisc
          </a>
        </p>
        <a
          href="https://github.com/luisnisc/ReactEstudio.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-blue-800 text-2xl" />
        </a>
      </div>
    </footer>
  );
}
