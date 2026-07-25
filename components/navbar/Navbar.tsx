"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#D4AF37]/20 bg-[#0D1117]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-[#D4AF37]">
          APOLO STYLO
        </h2>

        {/* Menú escritorio */}
        <ul className="hidden gap-8 text-white md:flex">
          <li>
            <a href="#inicio" className="transition hover:text-[#D4AF37]">
              Inicio
            </a>
          </li>

          <li>
            <a href="#catalogo" className="transition hover:text-[#D4AF37]">
              Catálogo
            </a>
          </li>

          <li>
            <a href="#contacto" className="transition hover:text-[#D4AF37]">
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>
      </nav>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="border-t border-[#D4AF37]/20 bg-[#0D1117] md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li>
              <a
                href="#inicio"
                onClick={() => setMenuAbierto(false)}
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#catalogo"
                onClick={() => setMenuAbierto(false)}
              >
                Catálogo
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                onClick={() => setMenuAbierto(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}