import React from "react";
import { withRouter } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>You can see the Home page</p>
      <p style={{ color: "red" }}> dd </p>
    </div>
  );
}

export default withRouter(About);
