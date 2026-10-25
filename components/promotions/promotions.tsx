
"use client";

import Image from "next/image";
import { promociones } from "@/data/promociones";

export default function Promotions() {
  const ofertas = promociones.filter(
    (promo) =>
      promo.disponible &&
      promo.precio > 0 &&
      promo.precioPromo > 0 &&
      promo.precioPromo < promo.precio
  );

  const formatoPrecio = (precio: number) =>
    `$${precio.toLocaleString("es-AR")}`;

  const crearLinkWhatsApp = (
    nombre: string,
    precioPromo: number,
    numero?: string
  ) => {
    const mensaje = `Hola, quiero consultar por la promocion de ${nombre} a ${formatoPrecio(precioPromo)}.`;

    const base = numero
      ? `https://wa.me/${numero.replace(/\D/g, "")}`
      : "https://wa.me/5491122823596";

    return `${base}?text=${encodeURIComponent(mensaje)}`;
  };

  return (
    <section
      id="promociones"
      className="scroll-mt-24 overflow-hidden bg-[#0D1117] px-4 py-16 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Oportunidades especiales
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Promociones <span className="text-[#D4AF37]">exclusivas</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            Descubrí ofertas especiales en perfumes, fragancias y productos
            seleccionados de Apolo Stylo.
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-[#D4AF37]/70" />
        </div>

        {ofertas.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-2xl border border-[#D4AF37]/20 bg-[#161B22] px-6 py-12 text-center">
            <p className="text-lg font-semibold">
              Estamos preparando nuevas promociones.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Volvé pronto para descubrir las próximas ofertas.
            </p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ofertas.map((producto) => {
              const descuento = Math.round(
                ((producto.precio - producto.precioPromo) /
                  producto.precio) *
                  100
              );

              return (
                <article
                  key={producto.nombre}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#12171F] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-xl"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F5F3EF] p-6 sm:h-72">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      width={320}
                      height={320}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1.5 text-xs font-bold text-black">
                      -{descuento}% OFF
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
                      {producto.marca}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {producto.nombre}
                    </h3>

                    <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                      {producto.descripcion}
                    </p>

                    <div className="mt-5 border-t border-white/10 pt-5">
                      <p className="text-sm text-gray-500">
                        Antes{" "}
                        <span className="line-through">
                          {formatoPrecio(producto.precio)}
                        </span>
                      </p>

                      <p className="mt-1 text-3xl font-bold text-[#D4AF37]">
                        {formatoPrecio(producto.precioPromo)}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        Ahorrás{" "}
                        {formatoPrecio(
                          producto.precio - producto.precioPromo
                        )}
                      </p>
                    </div>

                    <a
                      href={crearLinkWhatsApp(
                        producto.nombre,
                        producto.precioPromo,
                        producto.whatsapp
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block rounded-xl bg-[#D4AF37] px-5 py-3.5 text-center text-sm font-bold text-black transition hover:bg-[#E6C65C]"
                    >
                      Consultar por WhatsApp →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/#catalogo"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/60 px-7 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Explorar catálogo completo →
          </a>
        </div>
      </div>
    </section>
  );
}
