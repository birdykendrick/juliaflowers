import { brand } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>
            Built with ❤️ • <a className="underline underline-offset-4" href="#order">Contact</a>
          </p>
        </div>
      </div>
    </footer>
  );
}