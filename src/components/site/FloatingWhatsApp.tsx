import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917607696315"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-brand text-navy shadow-elegant transition hover:scale-105"
    >
      <MessageCircle className="size-6" strokeWidth={2.5} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand/50" />
    </a>
  );
}
