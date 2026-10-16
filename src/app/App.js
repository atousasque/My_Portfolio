// import React from "react";
// import { HelmetMeta } from "./HelmetMeta";
// import { ThemeProvider } from "../components/theme/ThemeProvider";
// import { CssBaseline } from "@material-ui/core";
// import { logCredits } from "../utils/logCredits";

// import { Home } from "../pages/Home";

// export const App = () => {
//   logCredits();

//   return (
//     <ThemeProvider>
//       <CssBaseline />
//       <HelmetMeta />
//       <Home />
//     </ThemeProvider>
//   );
// };

// src/app/App.js
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import DisplacementSphere from "../components/background/DisplacementSphere";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import { Home } from "../pages/Home";
import { ProjectDetail } from "../pages/ProjectDetail";

export const App = () => {
  logCredits();

  return (
    <ThemeProvider>
      <CssBaseline />
      <HelmetMeta />
      {/* Persistent 3D canvas background across all routes */}
      <DisplacementSphere />
      {/* Global theme toggle button */}
      <ThemeToggle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/:slug" component={ProjectDetail} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};