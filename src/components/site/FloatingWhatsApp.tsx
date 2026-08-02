export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917607696315"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] p-2.5 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 sm:size-16 sm:p-3"
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/398/617/original/whatsapp-logo-icon-isolated-on-transparent-background-free-png.png"
        alt="WhatsApp"
        className="size-full object-contain transition-transform duration-200 group-hover:scale-110"
      />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
