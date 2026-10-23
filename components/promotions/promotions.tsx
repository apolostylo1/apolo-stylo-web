
"use client";

import Image from "next/image";
import { perfumes } from "@/data/perfumes";
import { promociones } from "@/data/promociones";

export default function Promotions() {
  const ofertas = promociones
    .map((promo) => {
      const producto = perfumes.find(
        (perfume) => perfume.nombre === promo.nombre
      );

      if (
        !producto ||
        !producto.stock ||
        promo.precioPromo <= 0 ||
        promo.precioPromo >= producto.precio
      ) {
        return null;
      }

      return { ...producto, precioPromo: promo.precioPromo };
    })
    .filter((producto) => producto !== null);

  return (
    <section
      id="promociones"
      className="scroll-mt-24 bg-[#0D1117] px-6 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Oportunidades especiales
        </p>

        <h2 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
          Promociones <span className="text-[#D4AF37]">exclusivas</span>
        </h2>

        <p className="mx-auto mb-12 mt-4 max-w-xl text-center text-gray-400">
          Encontrá tu próxima fragancia a un precio especial.
        </p>

        {ofertas.length === 0 ? (
          <div className="rounded-2xl border border-[#D4AF37]/30 p-10 text-center">
            <p className="text-lg">
              Estamos preparando nuevas promociones.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Volvé pronto para descubrir las próximas ofertas.
            </p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ofertas.map((producto) => (
              <article
                key={producto.nombre}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#161B22] transition hover:-translate-y-1 hover:border-[#D4AF37]/50"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
  <Image
    src={producto.imagen}
    alt={producto.nombre}
    width={300}
    height={300}
    className="h-full w-full object-contain"
  />

  <span className="absolute left-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-black">
    -{Math.round(
      (1 - producto.precioPromo / producto.precio) * 100
    )}% OFF
  </span>
</div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37]">
                    {producto.marca}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {producto.nombre}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {producto.descripcion}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-gray-500 line-through">
                      ${producto.precio.toLocaleString("es-AR")}
                    </span>
                    <span className="text-2xl font-bold text-[#D4AF37]">
                      ${producto.precioPromo.toLocaleString("es-AR")}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Hola, quiero consultar por ${producto.nombre} en promoción a $${producto.precioPromo.toLocaleString("es-AR")}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block rounded-full bg-[#D4AF37] px-5 py-3 text-center font-semibold text-black transition hover:bg-[#E6C65C]"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/#catalogo"
            className="inline-block rounded-full border border-[#D4AF37] px-7 py-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Ver catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
}
