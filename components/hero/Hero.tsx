import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen flex-col items-center justify-center bg-[#0D1117] px-6 pt-24 pb-16 text-center"
    >
      <Image
        src="/logo.png"
        alt="Apolo Stylo"
        width={180}
        height={180}
        priority
        className="h-32 w-32 md:h-44 md:w-44"
      />

      <h1 className="mt-8 text-4xl font-bold tracking-widest text-[#D4AF37] md:text-6xl">
        APOLO STYLO
      </h1>

      <p className="mt-4 text-lg italic text-gray-300 md:text-2xl">
        Encontrá tu aroma ideal
      </p>

      <p className="mt-6 max-w-2xl px-4 text-base leading-7 text-gray-400 md:text-lg">
        Perfumes árabes y de diseñador originales.
        <br />
        Envíos a todo el país.
      </p>

      <a
        href="#catalogo"
        className="mt-10 rounded-full bg-[#D4AF37] px-8 py-4 text-base font-semibold text-black transition hover:scale-105 md:px-10 md:py-5 md:text-lg"
      >
        Ver Catálogo
      </a>
    </section>
  );
}