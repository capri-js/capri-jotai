import { useAtomValue } from "jotai";
import { counterAtom } from "./atoms";

export default function CounterDisplay() {
  const counter = useAtomValue(counterAtom);
  return <div className="inline-block rounded bg-gray-700 px-2">{counter}</div>;
}
