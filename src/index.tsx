import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootEl = document.querySelector("#root") as HTMLElement;
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);

import "./style/style.css";

function App() {
    return <h1 className="bg-red-300">My React and TypeScript App!</h1>;
}

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
