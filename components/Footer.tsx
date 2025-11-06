export default function Footer() {
  return (
    <footer className="border-t border-[--ring] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[--muted]">
        <p>? {new Date().getFullYear()} MM Digital Garage</p>
        <p>Built with care and craft.</p>
      </div>
    </footer>
  );
}
