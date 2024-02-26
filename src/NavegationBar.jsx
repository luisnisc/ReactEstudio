import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function NavegationBar() {
  
  const { loc } = useParams();
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
            className="w-full md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-blue-800  rounded md:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/conceptosClave/conceptosClave"
                    className= {loc == "conceptosClave"?  "block py-2 pl-3 pr-4 text-blue-800 rounded md:bg-transparent": "block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent hover:text-blue-800"}
                      
                  
                >
                  Conceptos Clave
                </Link>
              </li>
              <li>
                <Link
                  to="/tecnicasAvanzadas/tecnicasAvanzadas"
                  className= {loc == "tecnicasAvanzadas"?  "block py-2 pl-3 pr-4 text-blue-800 rounded md:bg-transparent": "block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent hover:text-blue-800"}
                      
                >
                  Técnicas Avanzadas
                </Link>
              </li>
              <li>
                <Link
                  to="/recienAñadido/recienAñadido"
                  className= {loc == "recienAñadido" ? "block py-2 pl-3 pr-4 text-blue-800 rounded md:bg-transparent": "block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent hover:text-blue-800"}
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
