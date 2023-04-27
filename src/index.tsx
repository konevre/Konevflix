import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App/App";
import store from "./store/index";
import "./style/style.css";
import "./firebase";

const rootEl = document.querySelector("#root") as HTMLElement;
if (!rootEl) throw new Error("Cannot find root element with that id");
const root = createRoot(rootEl);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);
