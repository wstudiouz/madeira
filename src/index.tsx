import {ThemeProvider} from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {ParallaxProvider} from "react-scroll-parallax";
import App from "./App";
import {theme} from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <ParallaxProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ParallaxProvider>
  </ThemeProvider>
);
