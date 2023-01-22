# Capri + Jotai 👻

This is an example of how to share state across Capri islands with [Jotai](https://jotai.org/).

## In a nutshell

Imagine we have a simple counter:

```tsx

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>➖<button>
      <span>{counter}<span>
      <button onClick={() => setCounter(counter + 1)}>➕<button>
    </div>
  );
}
```

Now all we have to do, is to replace React's `useState()` hook with Jotai's `useAtom()`:

```tsx
const [counter, setCounter] = useAtom(counterAtom);
```

The full example would look like this:

```
import { atom, useAtom } from "jotai";

const counterAtom = atom(0);

export default function Counter() {
  const [counter, setCounter] = useAtom(counterAtom);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>➖<button>
      <span>{counter}<span>
      <button onClick={() => setCounter(counter + 1)}>➕<button>
    </div>
  );
}
```

Now all Counter islands on the page would show exactly the same value and update in sync, even though they are separate React roots.

You could also move the atom definition itself to a different file and import it from completely different islands. That's exactly what this demo does in `/src/atoms.ts`.
