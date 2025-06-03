import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "./utils/suspense";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
