import Nav from "../components/Nav";
export default function Dashboard(){
  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="mt-4">Integrations, Automations, Messages (coming soon)</p>
      </main>
    </>
  );
}
