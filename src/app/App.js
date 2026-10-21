// src/app/App.js
import React from "react";
import { HashRouter as Router, Route, useLocation } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { Home } from "../pages/Home";
import { ProjectDetail } from "../pages/ProjectDetail";

// Inner component to access current route location
const AppRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Home page stays mounted in memory permanently to prevent re-rendering/reloading */}
      <div style={{ display: isHomePage ? "block" : "none" }}>
        <Home />
      </div>

      {/* Dedicated Project Detail Page Route */}
      <Route path="/project/:slug" component={ProjectDetail} />
    </>
  );
};

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <HelmetMeta />
      {/* Persistent 3D canvas background across all views */}
      <DisplacementSphere />
      {/* Global theme toggle button */}
      <ThemeToggle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};