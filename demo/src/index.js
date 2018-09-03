import React from "react";
import { render } from "react-dom";

import Drift from "react-driftjs";

render(
  <div>
    <h2>React Drift Demo</h2>
    <Drift
      appId="9h3gdx9mm6ze"
      userId="1234"
      attributes={{ email: "user@example.com", company: "Acme Inc" }}
    />
  </div>,
  document.getElementById("app")
);
