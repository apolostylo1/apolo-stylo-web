"use client";

import Image from "next/image";

type Product = {
  nombre: string;
  categoria: string;
  marca: string;
  stock?: boolean;
  descripcion: string;
  notas?: string[];
  precio: number;
  imagen: string;
};

type Props = {
  perfume: Product;
  onClose: () => void;
};

export default function ProductModal({ perfume, onClose }: Props) {
  const whatsapp = `https://wa.me/5491122823596?text=${encodeURIComponent(
    `Buenas, me interesa el perfume ${perfume.nombre}.`
  )}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 md:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-[#161B22] shadow-2xl"
      >
        {/* Botón cerrar */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#0D1117]/80 text-2xl text-white transition hover:bg-[#D4AF37] hover:text-black"
        >
          ✕
        </button>

        <div className="grid h-full grid-cols-1 md:grid-cols-2">

          {/* ================= IMAGEN ================= */}

          <div className="flex items-center justify-center bg-black p-6 md:p-10">

            <Image
              src={perfume.imagen}
              alt={perfume.nombre}
              width={600}
              height={600}
              className="max-h-[220px] sm:max-h-[280px] md:max-h-[420px] lg:max-h-[500px] w-auto object-contain transition duration-300 hover:scale-105"
            />

          </div>

          {/* ================= INFORMACIÓN ================= */}

          <div className="flex h-full flex-col justify-between overflow-y-auto p-6 md:p-8">

            <div>

              <span className="text-xs uppercase tracking-[5px] text-[#D4AF37] md:text-sm">
                {perfume.categoria}
              </span>

              <h2 className="mt-2 text-3xl font-bold leading-none text-white sm:text-4xl md:text-5xl">
                {perfume.nombre}
              </h2>

              <p className="mt-4 text-base text-gray-300 md:text-xl">
                <strong>Marca:</strong> {perfume.marca}
              </p>

              <div className="mt-5">
                {perfume.stock ? (
                  <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">
                    ✓ En stock
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-400">
                    ✕ Sin stock
                  </span>
                )}
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                {perfume.descripcion}
              </p>

              {perfume.notas && (
                <div className="mt-8">

                  <h3 className="mb-4 text-xl font-bold text-[#D4AF37]">
                    Notas olfativas
                  </h3>

                  <div className="flex flex-wrap gap-2 md:gap-3">

                    {perfume.notas.map((nota) => (
                      <span
                        key={nota}
                        className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37] sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {nota}
                      </span>
                    ))}

                  </div>

                </div>
              )}

            </div>

            {/* ================= FOOTER ================= */}

            <div className="mt-8 border-t border-white/10 pt-6">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[3px] text-gray-400">
                    Precio
                  </p>

                  <p className="text-3xl font-bold text-[#D4AF37] sm:text-4xl md:text-5xl">
                    ${perfume.precio.toLocaleString("es-AR")}
                  </p>

                </div>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-[#D4AF37] px-6 py-4 text-center text-base font-bold text-black transition duration-300 hover:scale-105 hover:bg-[#e3bf45] md:w-auto md:px-8 md:text-lg"
                >
                  Consultar por WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}