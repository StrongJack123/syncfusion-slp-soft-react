import {
  ItemDirective,
  ItemsDirective,
  ToolbarComponent,
} from "@syncfusion/ej2-react-navigations";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { Component } from "react";
import "./Toolbar.css";
export default class Toolbar extends Component {
  constructor() {
    super(...arguments);
    this.data = [
      "Badminton",
      "Basketball",
      "Cricket",
      "Golf",
      "Hockey",
      "Rugby",
    ];

    this.templateDropdown = new DropDownList({
      dataSource: this.data,
      width: 120,
      index: 2,
    });
  }
  render() {
    return (
      <ToolbarComponent>
        <ItemsDirective>
          <ItemDirective prefixIcon="e-icons e-copy" />
          <ItemDirective prefixIcon="e-icons e-search" />
          <ItemDirective prefixIcon="e-icons e-cut" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-delete'></div>" />
          <ItemDirective prefixIcon="e-icons e-export" />
          <ItemDirective type="Separator" />

          <ItemDirective prefixIcon="e-icons e-undo" />
          <ItemDirective prefixIcon="e-icons e-redo" />
          <ItemDirective type="Separator" />
          <ItemDirective
            type="input"
            template="<select style='border: none'>
            <option value='100%'>100%</option>
            <option value='90%'>90%</option> 
            </select>"
          />
          <ItemDirective
            type="input"
            template="<select style='border: none'>
            <option value='100%'>SegoeUI</option>
            <option value='90%'>90%</option> 
            </select>"
          />
          <ItemDirective
            type="input"
            template="<select style='border: none'>
            <option value='100%'>1pt</option>
            <option value='90%'>2pt</option> 
            </select>"
          />

          <ItemDirective prefixIcon="e-icons e-bold" />
          <ItemDirective prefixIcon="e-icons e-italic" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-strikethrough'></div>" />
          <ItemDirective prefixIcon="e-icons e-align-left" />
          <ItemDirective prefixIcon="e-icons e-align-center" />
          <ItemDirective prefixIcon="e-icons e-align-right" />
          <ItemDirective type="Separator" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-bucket'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-pencil-drawing-a-line'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-text-box'></div>" />

          <ItemDirective template="<div class='template__item'><span class='flaticon-double-arrow'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-double-arrow'></div>" />
          <ItemDirective type="Separator" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-cursor'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-capital-a'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-diagonal-line'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-rectangular-shape-outline'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-ellipse-outline-shape-variant'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-curved-line'></div>" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-business-ascendant-graphic-line'></div>" />
          <ItemDirective type="Separator" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-click'></div>" />
          <ItemDirective type="Separator" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-line'></div>" />
          <ItemDirective type="Separator" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-relation'></div>" />
          <ItemDirective type="Separator" />
          <ItemDirective template="<div class='template__item'><span class='flaticon-grid'></div>" />
          <ItemDirective type="Separator" />
          <ItemDirective text="Warning Messages" />
          <ItemDirective type="Separator" />
          <ItemDirective text="Last Action" />
          <ItemDirective type="Separator" />
          <ItemDirective text="Warning Messages" />

          <ItemDirective prefixIcon="e-icons e-cut" />
        </ItemsDirective>
      </ToolbarComponent>
    );
  }
}
