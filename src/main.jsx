import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CityProvider from "./context/CityProvider.jsx";

// !! Step-3
// !! Publishing mode / part
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CityProvider>
      <App />
    </CityProvider>
  </StrictMode>
);
