"use client";

import Image from "next/image";

type Props = {
  nombre: string;
  categoria: string;
  marca: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock?: boolean;
  onClick: () => void;
};

export default function ProductCard({
  nombre,
  categoria,
  precio,
  imagen,
  stock,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#161B22] shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
    >
      {/* Imagen */}
      <div className="flex h-56 items-center justify-center bg-neutral-100 p-4 sm:h-64 md:h-72">
        <Image
          src={imagen}
          alt={nombre}
          width={320}
          height={320}
          className="max-h-52 w-auto object-contain sm:max-h-60 md:max-h-64"
        />
      </div>
      <div className="mt-2">
  {stock ? (
    <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
      En stock
    </span>
  ) : (
    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
      Sin stock
    </span>
  )}
</div>
      {/* Información */}
      <div className="space-y-3 p-5 md:p-6">
        <h3 className="min-h-[60px] text-xl font-bold leading-tight text-[#D4AF37] md:min-h-[70px] md:text-2xl">
          {nombre}
        </h3>

        <p className="text-xs uppercase tracking-widest text-gray-400 md:text-sm">
          {categoria}
        </p>

        <p className="text-3xl font-extrabold text-white md:text-4xl">
          ${precio.toLocaleString("es-AR")}
        </p>

        <button className="w-full rounded-xl bg-[#D4AF37] py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400 md:text-base">
          Ver detalles
        </button>
      </div>
    </div>
  );
}