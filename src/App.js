import "./App.css";

import Navbar from "./components/navbar/navbar";
import Toolbar from "./components/toolbar/Toolbar";
import { registerLicense } from "@syncfusion/ej2-base";
import StartNewprojectModal from "./components/modals/startNewproject";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RjUH9dcnRQRWlVUEI="
);
function App() {
  return (
    <div className="App">
      <Navbar />
      <StartNewprojectModal />
      <Toolbar />
    </div>
  );
}

export default App;
