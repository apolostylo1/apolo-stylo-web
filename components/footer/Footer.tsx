"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-24 border-t border-[#D4AF37]/20 bg-[#0D1117]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14 md:flex-row md:justify-between">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-[#D4AF37]">
            APOLO STYLO
          </h2>

          <p className="mt-2 text-gray-400">
            Perfumes árabes y de diseñador originales.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Navegación */}
          <div>
            <h3 className="mb-3 font-semibold text-[#D4AF37]">
              Navegación
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-[#D4AF37] transition">
                  Inicio
                </a>
              </li>

              <li>
                <a href="#catalogo" className="hover:text-[#D4AF37] transition">
                  Catálogo
                </a>
              </li>

              <li>
                <a
                  href="#promociones"
                  className="hover:text-[#D4AF37] transition"
                >
                  Promociones
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-3 font-semibold text-[#D4AF37]">
              Contacto
            </h3>

            <div className="flex gap-4 text-3xl">
              <a
                href="https://wa.me/5491122823596"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-green-500 transition hover:scale-110" />
              </a>

              <a
                href="https://www.instagram.com/apolo.stylo?igsh=dm1ucm1jOW9jcjNm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 transition hover:scale-110" />
              </a>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-6 rounded-full border border-[#D4AF37] px-6 py-3 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              ↑ Volver arriba
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Apolo Stylo · Todos los derechos
        reservados.
      </div>
    </footer>
  );
}