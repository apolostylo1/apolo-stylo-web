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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 md:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#161B22] shadow-2xl"
      >
        {/* Botón cerrar */}

        <button
          onClick={onClose}
          className="sticky top-4 float-right z-20 mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#0D1117]/80 text-2xl text-white transition hover:bg-[#D4AF37] hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Imagen */}

          <div className="flex items-center justify-center bg-black p-6 md:p-10">

            <Image
              src={perfume.imagen}
              alt={perfume.nombre}
              width={500}
              height={500}
              className="max-h-[300px] w-auto object-contain md:max-h-[500px]"
            />

          </div>

          {/* Información */}

          <div className="flex flex-col p-6 md:p-10">

            <span className="text-xs uppercase tracking-[4px] text-[#D4AF37] md:text-sm">
              {perfume.categoria}
            </span>

            <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
              {perfume.nombre}
            </h2>

            <p className="mt-4 text-base text-gray-300 md:text-lg">
              <strong>Marca:</strong> {perfume.marca}
            </p>
            <div className="mt-5">
  {perfume.stock ? (
    <span className="inline-flex w-fit items-center rounded-full border border-green-500/30 bg-green-500/15 px-4 py-2 text-sm font-semibold text-green-400">
      ✓ En stock
    </span>
  ) : (
    <span className="inline-flex w-fit items-center rounded-full border border-red-500/30 bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-400">
      ✕ Sin stock
    </span>
  )}
</div>

            <p className="mt-6 text-sm leading-7 text-gray-400 md:text-base md:leading-8">
              {perfume.descripcion}
            </p>

            {perfume.notas && (
              <div className="mt-8">

                <h3 className="mb-4 text-lg font-bold text-[#D4AF37] md:text-xl">
                  Notas olfativas
                </h3>

                <div className="flex flex-wrap gap-2">

                  {perfume.notas.map((nota) => (
                    <span
                      key={nota}
                      className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#D4AF37] md:text-sm"
                    >
                      {nota}
                    </span>
                  ))}

                </div>

              </div>
            )}

            <p className="mt-8 text-3xl font-bold text-[#D4AF37] md:text-4xl">
              ${perfume.precio.toLocaleString("es-AR")}
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 mb-4 rounded-xl bg-[#D4AF37] px-6 py-4 text-center text-base font-bold text-black transition hover:scale-105 md:mt-10 md:text-xl"
            >
              Consultar por WhatsApp
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}