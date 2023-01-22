import CounterIsland from "./Counter.island.jsx";
import "./App.css";
import { Footer } from "./Footer.jsx";

export function App() {
  return (
    <main className="max-w-prose mx-auto my-10 p-4 space-y-8">
      <h1 className="font-bold text-4xl text-white">
        Share state across Capri islands with{" "}
        <a href="https://jotai.org">Jotai</a> 👻
      </h1>
      <p>
        Here is an island with a counter: <CounterIsland />
      </p>
      <p>
        And here a second island, that shares the same state: <CounterIsland />
      </p>
      <Footer />
    </main>
  );
}
