import "./App.css";

import Navbar from "./components/navbar/navbar";
import Toolbar from "./components/toolbar/Toolbar";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjUH9dcnRQRWlVUEI="
);
function App() {
  return (
    <div className="App">
      <div style={{ height: "100px" }}>BUILT with React</div>
      <Navbar />
      <Toolbar />
    </div>
  );
}

export default App;
