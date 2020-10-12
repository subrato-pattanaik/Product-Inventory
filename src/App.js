import React from "react";
import AllRoute from "./components/AllRoute/AllRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AllRoute />
    </Router>
  );
}

export default App;
