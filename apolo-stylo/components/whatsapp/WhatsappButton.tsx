import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5491122823596?text=Hola%20Apolo%20Stylo,%20quiero%20consultar%20por%20un%20perfume."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}