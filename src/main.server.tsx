import { RenderFunction, renderToString } from "@capri-js/react/server";
import { App } from "./App";

export const render: RenderFunction = async (url: string) => {
  return {
    "#app": await renderToString(<App />),
  };
};
