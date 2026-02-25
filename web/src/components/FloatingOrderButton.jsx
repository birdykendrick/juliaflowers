import { brand } from "./data";

export default function FloatingOrderButton() {
  const waLink = `https://wa.me/${brand.whatsapp}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-soft hover:opacity-90"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}