
"use client";

import { useRef } from "react";
import Image from "next/image";
import { perfumes } from "@/data/perfumes";

const nombresDestacados = [
  "9PM",
  "Hawas Ice",
  "Le beau le parfum",
  "Odyssey Sky Mandarin",
  "Arabians tonka",
  "The Kingdom",
];

export default function FeaturedCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Busca los productos respetando el orden elegido y el stock.
  const destacados = nombresDestacados
    .map((nombre) =>
      perfumes.find(
        (perfume) =>
          perfume.nombre.toLowerCase() === nombre.toLowerCase() &&
          perfume.stock === true
      )
    )
    .filter((perfume) => perfume !== undefined);

  const mover = (direccion: "izquierda" | "derecha") => {
    carouselRef.current?.scrollBy({
      left: direccion === "derecha" ? 300 : -300,
      behavior: "smooth",
    });
  };

  if (destacados.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            Selección exclusiva
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Perfumes destacados
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Descubrí tu próxima fragancia.
          </p>
        </div>

        <div className="hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => mover("izquierda")}
            aria-label="Ver perfumes anteriores"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 text-xl text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => mover("derecha")}
            aria-label="Ver perfumes siguientes"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 text-xl text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {destacados.map((perfume) => (
          <article
            key={perfume.nombre}
            className="w-[240px] min-w-[240px] snap-start overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#161B22] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 sm:w-[270px] sm:min-w-[270px]"
          >
            <div className="flex h-56 items-center justify-center bg-neutral-100 p-4">
              <Image
                src={perfume.imagen}
                alt={perfume.nombre}
                width={280}
                height={280}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {perfume.categoria}
              </p>

              <h3 className="min-h-12 text-lg font-bold leading-tight text-[#D4AF37]">
                {perfume.nombre}
              </h3>

              <p className="text-2xl font-extrabold text-white">
                ${perfume.precio.toLocaleString("es-AR")}
              </p>

              <a
                href="/#catalogo"
                className="block rounded-xl bg-[#D4AF37] py-3 text-center text-sm font-bold text-black transition hover:bg-yellow-400"
              >
                Ver en catálogo
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-1 text-center text-xs text-gray-500 sm:hidden">
        Deslizá para descubrir más perfumes →
      </p>
    </section>
  );
}
