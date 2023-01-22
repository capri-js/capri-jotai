import { styled } from "classname-variants/react";
import { counterAtom } from "./atoms";
import { useAtom } from "jotai";

export default function Counter() {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <div className="inline-flex gap-1">
      <Button onClick={() => setCounter((c) => c - 1)}>-</Button>
      <span>{counter}</span>
      <Button onClick={() => setCounter((c) => c + 1)}>+</Button>
    </div>
  );
}

const Button = styled(
  "button",
  "rounded bg-teal-700 hover:bg-teal-500 text-white px-2"
);
