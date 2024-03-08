import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavegationBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
      />
      <nav
        style={{ position: "fixed", top: "0", width: "100%", zIndex: 2 , userSelect: "none"}}
        className= "flex items-center justify-between p-2 bg-blue-500 text-white"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 m">
          <a
            href=""
            className="flex items-center"
          ></a>
          
          <div
            className="w-full"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-row space-x-8 border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-3 text-white bg-blue-600 rounded-full "
                  aria-current="page"
                >
                 Home
                </Link>
              </li>
              <li>
                <Link
                  to="/conceptosClave"
                  className= {currentPath === "/conceptosClave"?  "block py-2 pl-3 pr-3 text-white bg-blue-600 rounded-full": "block py-2 pl-3 pr-3 text-black  rounded-full hover:text-blue-900 hover:bg-blue-600 bg-blue-400"}
                >
                  Conceptos Clave
                </Link>
              </li>
              <li>
                <Link
                  to="/tecnicasAvanzadas"
                  className= {currentPath === "/tecnicasAvanzadas"?  "block py-2 pl-3 pr-3 text-white rounded-full bg-blue-600": "block py-2 pl-3 pr-3 text-black rounded-full hover:text-blue-900 hover:bg-blue-600 bg-blue-400"}
                >
                  Técnicas Avanzadas
                </Link>
              </li>
              <li>
                <Link
                  to="/recienAnadido"
                  className= {currentPath === "/recienAnadido"? "block py-2 pl-3 pr-3 text-white rounded-full bg-blue-600": "block py-2 pl-3 pr-3 text-black  rounded-full hover:text-blue-900 hover:bg-blue-600 bg-blue-400"}
                >
                  Recien Añadido
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}