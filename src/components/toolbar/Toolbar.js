import "./Toolbar.css";
import {
  ItemDirective,
  ItemsDirective,
  ToolbarComponent,
} from "@syncfusion/ej2-react-navigations";

const Toolbar = () => {
  return (
    <div className="toolbar__container">
      <ToolbarComponent style={{ width: "10%", height: "100%" }}>
        <div style={{ height: "25%", backgroundColor: "black" }}></div>
      </ToolbarComponent>
    </div>
  );
};

export default Toolbar;
