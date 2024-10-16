import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MainApplication from "./core/app";

import "@/ui/scss/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainApplication />
  </StrictMode>
);
