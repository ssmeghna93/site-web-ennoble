import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <a
      data-ocid="whatsapp.button"
      href="https://wa.me/00907045509097"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-4 sm:left-6 z-50 w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all hover:scale-105 active:scale-95 animate-pulse-ring"
      aria-label="Chat with us on WhatsApp"
    >
      <SiWhatsapp size={22} />
    </a>
  );
}
