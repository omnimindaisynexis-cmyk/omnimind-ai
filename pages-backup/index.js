import Nav from "../components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">OmniMind — Your business, but smarter</h1>
        <p className="mt-4">Connect Gmail & Sheets. Automate tasks. Get weekly insights.</p>
        <Link href="/dashboard"><a className="mt-6 inline-block bg-[var(--omni-cyan)] text-black px-4 py-2 rounded">Open Dashboard</a></Link>
      </main>
    </>
  );
}
