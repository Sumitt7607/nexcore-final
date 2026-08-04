import { Linkedin, Instagram, Facebook, Phone } from "lucide-react";

export function FloatingSocials() {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/nexcore-technologies-india/",
      color: "bg-[#0A66C2] text-white hover:shadow-[#0A66C2]/40",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/nexcore.marketing?igsh=MXUzeWx3N3NidnBpMA==",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:shadow-[#ee2a7b]/40",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/1DaCrvDXK4/",
      color: "bg-[#1877F2] text-white hover:shadow-[#1877F2]/40",
    },
    {
      name: "Call Now",
      icon: Phone,
      href: "tel:7607696315",
      color: "bg-[#00C853] text-white hover:shadow-[#00C853]/40",
    },
  ];

  return (
    <div className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-4 sm:gap-3.5">
      {socials.map((s) => {
        const Icon = s.icon;
        const isExternal = s.href.startsWith("http");

        return (
          <a
            key={s.name}
            href={s.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={s.name}
            className={`group relative grid size-11 place-items-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 sm:size-12 ${s.color}`}
          >
            <Icon className="size-5 sm:size-6 transition-transform duration-200 group-hover:scale-110" />
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {s.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
