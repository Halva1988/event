import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36 text-center">
      <h1 className="text-4xl lg:text-6xl font-bold">Find events around you</h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">Browse more than <span className="text-accent font-bold italic underline">10,000 events</span> around you</p>

      <form className="w-full sm:w-[580px]">
        <input className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/80 duration-500 focus:ring-2 focus:bg-white/10" placeholder="Search events in any city..." />
      </form>

      <section className="mt-4 flex gap-x-4 opacity-50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/saint-petersburg">Saint-Petersburg</Link>
          <Link href="/events/moscow">Moscow</Link>
        </div>
      </section>
    </main>
  );
}
