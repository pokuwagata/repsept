import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.Profiler
    id="App"
    onRender={(id, phase, actualDuration) => {
      console.log(id, phase, actualDuration);
    }}
  >
    <App></App>
  </React.Profiler>,
  document.getElementById("app-root")
);
