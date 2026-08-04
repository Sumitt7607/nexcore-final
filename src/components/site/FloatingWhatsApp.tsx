export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917607696315"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 sm:size-16"
    >
      <svg className="size-7 sm:size-8 fill-white transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.333 4.988l-1.417 5.176 5.297-1.389c1.464.798 3.11 1.218 4.774 1.219h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.668-1.039-5.176-2.926-7.062a9.927 9.927 0 00-7.06-2.931zm5.7 14.153c-.237.667-1.373 1.272-1.9 1.335-.494.059-1.134.086-1.832-.138-.424-.136-.971-.314-1.685-.623-2.981-1.29-4.928-4.316-5.077-4.515-.149-.198-1.214-1.616-1.214-3.083 0-1.467.766-2.19 1.038-2.487.272-.297.594-.371.792-.371.198 0 .396.002.569.01.184.008.432-.07.676.515.247.594.84 2.052.914 2.2.074.148.124.321.025.519-.099.198-.149.321-.297.495-.149.173-.313.387-.446.519-.148.148-.303.31-.13.608.173.297.771 1.272 1.656 2.06 1.138 1.013 2.098 1.327 2.395 1.475.297.148.47.124.643-.074.173-.198.742-.866.94-1.163.198-.297.396-.247.668-.148.272.099 1.73.816 2.027.965.297.148.495.223.569.346.074.124.074.717-.163 1.384z"/>
      </svg>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
