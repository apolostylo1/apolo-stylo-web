
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.13),transparent_55%)] px-6 pb-20 pt-32 text-center md:min-h-[90vh] md:pt-36"
    >
      {/* Brillo decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-3xl md:h-[32rem] md:w-[32rem]"
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        <Image
          src="/logo.png"
          alt="Apolo Stylo"
          width={180}
          height={180}
          priority
          className="h-28 w-28 object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.16)] md:h-36 md:w-36"
        />

        <p className="mt-7 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37] md:text-sm">
          
        </p>

        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[0.08em] text-white sm:text-5xl md:text-7xl">
          APOLO <span className="text-[#D4AF37]">STYLO</span>
        </h1>

        <div className="mt-6 h-px w-20 bg-[#D4AF37]/70" />

        <h2 className="mt-6 text-2xl font-light leading-snug text-white sm:text-3xl md:text-4xl">
          Encontrá tu <span className="italic text-[#D4AF37]">aroma ideal.</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base md:text-lg">
          Fragancias árabes, diseñador y de nicho para expresar tu estilo
          y dejar una impresión inolvidable.
        </p>

        {/* Botones */}
        <div className="mt-9 flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/#catalogo"
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0D1117] transition duration-300 hover:scale-[1.03] hover:bg-[#E6C65C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
          >
            Explorar catálogo
            <span aria-hidden="true" className="ml-3 text-lg">
              →
            </span>
          </a>

          <a
            href="/promociones"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#D4AF37]/60 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
          >
            Ver promociones
          </a>
        </div>

        {/* Información destacada */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-gray-400 sm:gap-x-8 sm:text-sm">
          <span className="flex items-center gap-2">
            <span className="text-[#D4AF37]">✦</span>
            Fragancias seleccionadas
          </span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-[#D4AF37]">✦</span>
            Envíos a todo el país
          </span>
        </div>
      </div>

      {/* Detalle inferior */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"
      />
    </section>
  );
}
