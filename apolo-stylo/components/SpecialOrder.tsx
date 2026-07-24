import { FaWhatsapp } from "react-icons/fa";

export default function SpecialOrder() {
  return (
    <section className="mx-auto mt-24 max-w-5xl px-6">
      <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#161B22] p-10 text-center shadow-xl">

        <h2 className="text-3xl font-bold text-[#D4AF37]">
          ¿No encontrás el perfume que buscás?
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Trabajamos también <strong>por pedido</strong>.
          <br />
          Si el perfume que buscás no aparece en nuestro catálogo,
          escribinos por WhatsApp y lo buscamos para vos.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-gray-300">
          <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2">
            ✓ Perfumes árabes
          </span>

          <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2">
            ✓ Perfumes de diseñador
          </span>

          <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2">
            ✓ Productos originales
          </span>
        </div>

        <a
          href="https://wa.me/5491122823596?text=Hola%20Apolo%20Stylo,%20quisiera%20consultar%20por%20un%20perfume%20que%20no%20figura%20en%20el%20catálogo."
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-10 inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
        >
          <FaWhatsapp size={24} />
          Consultar por WhatsApp
        </a>

      </div>
    </section>
  );
}