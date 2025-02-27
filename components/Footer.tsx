export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer className="border-lime-300 border-t-4 bg-slate-900 text-white h-40 flex items-center justify-center px-4 text-center">
      <p>Jake.ac © Jake Jenkins 2001 - {year}.</p>
    </footer>
  );
}
