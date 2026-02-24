import React from "react";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <HelmetMeta />
      <Home />
    </ThemeProvider>
  );
};
