import { enableRipple } from "@syncfusion/ej2-base";
import { MenuComponent } from "@syncfusion/ej2-react-navigations";
import { Component } from "react";
enableRipple(true);
class Navbar extends Component {
  constructor() {
    super(...arguments);
    // Menu items definition
    this.menuItems = [
      {
        text: "File",
        items: [
          { text: "New Project" },
          { text: "Open Project" },
          { text: "Save Project" },
          { separator: true },
          {
            text: "Export Project Models",

            items: [
              { text: "PDF Format" },
              { text: "SVG Format" },
              { text: "Other Format" },
            ],
          },
          { separator: true },
          { text: "Page Setup" },
          { text: "Print Preview" },
          { text: "Print Model" },
          { separator: true },
          { text: "Project Report" },
          { separator: true },
          { text: "Exit" },
          // { text2: 'Exit2' }
        ],
      },
      {
        text: "Insert",
        items: [
          { text: "Image" },
          { separator: true },
          { text: "Equation" },
          { separator: true },
          { text: "Function" },
          { text: "Application" },
          { text: "Application Result" },
          { separator: true },
          { text: "Collection" },
          { text: "Dictionary" },
          { separator: true },
          { text: "Main Area" },
          { separator: true },
          {
            text: "Generic Container",

            items: [{ text: "Horizontal" }, { text: "Vertical" }],
          },
        ],
      },
      {
        text: "Edit",
        items: [
          {
            text: "Project Element",

            items: [
              { text: "Operating Principle" },
              { text: "Problem Statement" },
              { text: "What We Do" },
              { text: "Project Information" },
              { separator: true },
              { text: "Group of Problems" },
              { text: "What Group Does" },
            ],
          },
          { separator: true },
          {
            text: "Function",

            items: [
              { text: "Person Information" },
              { text: "Group Information" },
              { text: "Function Description" },
              { text: "Comm Holder Info" },
              { text: "Person Communication" },
            ],
          },
          { separator: true },
          {
            text: "Application",

            items: [
              { text: "Edit Application " },
              { text: "Edit Part of Application " },
            ],
          },

          {
            text: "Application Result",

            items: [
              { text: "Edit Application Result" },
              { text: "Edit Part of Application Result" },
            ],
          },
          { separator: true },
          {
            text: "Project Status",
            items: [
              { text: "View Project Status" },

              { text: "Edit Individual Status" },

              { text: "Edit Group Status" },
              { separator: true },
              { text: "Edit Future Status" },

              { text: "Edit Future Completion Approximation" },
            ],
          },
          // SECOND TEST START HERE
          // { separator: true },
          // {
          // text :"Project Status2",
          //   items: [
          //     { text: 'Project Status2' },
          // 	{ separator: true },
          //     { text: 'Individual Status2' }               ,
          // 	{ text: 'Group Status' }               ,
          // 	{ separator: true },
          // 	{ text: 'Application Result' }               ,
          // 	{ separator: true },
          // 	{ text: 'Part Application Result' }

          // ]
          // },
          // SECOND TEST END HERE
          { separator: true },
          {
            text: "Entity and Test",
            items: [
              { text: "Test Result" },
              { text: "Entity Usage" },
              // { text: 'Entity Usage' },
            ],
          },
        ],
      },

      {
        text: "View",
        items: [
          {
            text: "Project Element",
            items: [
              { text: "Operating Principle" },
              { text: "Problem Statement" },
              { text: "What We do" },
              { text: "Project Information" },
              { separator: true },
              { text: "Group of Problems" },
              { text: "What Group Does" },
            ],
          },
          // fdfd
          { separator: true },
          { text: "List of People in Project" },

          { text: "List of Group Defined" },

          { text: "Function of Group of people" },
          // fdfd
          { separator: true },
          {
            text: "Function",
            items: [
              { text: "Employees in Project" },
              { text: "Group Defined" },
              { text: "Function of Employees" },
              { text: "Communication Holders" },
              { text: "Communication Signals" },
            ],
          },
          // fgfg
          { separator: true },
          {
            text: "Application",
            items: [
              { text: "View Application" },
              { text: "View Part of Application" },
            ],
          },

          {
            text: "Application Result",
            items: [
              { text: "View Application Result" },
              { text: "View Part of Application Result" },
            ],
          },
          // fgfg
          { separator: true },
          {
            text: "Project Status",
            items: [
              { text: "View Project Status" },

              { text: "View Individual Status" },

              { text: "View Group Status" },
              { separator: true },
              { text: "View Future Status" },

              { text: "View Future Completion Approximation" },
            ],
          },

          { separator: true },
          { text: "Project Tree" },
        ],
      },

      {
        text: "Project",
        items: [
          { text: "Start a Project" },
          { separator: true },
          { text: "Add People to Project" },
          { text: "Define a Group of People" },
          { text: "Assign Function to Group of People" },
          // add1 start
          // items: [
          //     { text: 'Add People to Project' },
          // 	{ separator: true },
          //     { text: 'Define a Group of People' },
          //     { separator: true }            ,
          // 	{ text: 'Assign Function to Group' }               ,
          // { separator: true },

          { separator: true },
          { text: "Configure Warning Message" },
          { separator: true },
          {
            text: "Project Element",
            items: [
              { text: "Identify Operating Principle" },
              { text: "Define Problem Statement" },
              { text: "Define What We Do" },
              { separator: true },
              { text: "Define a Group of Problem" },
              { text: "Define What Group Does" },
            ],
          },
          { separator: true },
          {
            text: "Manage Application",
            items: [
              { text: "Define Application" },
              { text: "Add Part to Application" },
              { separator: true },
              { text: "Add Sub Part to Application" },
              { text: "Define Group of Application" },
            ],
          },
          {
            text: "Manage Application Result",
            items: [
              { text: "Add Application Result" },
              { text: "Add Part to Application Result" },
              { separator: true },
              { text: "Add Sub Part to Application Result" },
              { text: "Define Group Application Result" },
            ],
          },
          {
            text: "Entity Usage and Test Result",
            items: [
              { text: "Add Entity Usage" },
              { text: "Define a Group of Entity Usage" },
              { text: "Identity Part of Entity Usage" },
              { separator: true },
              { text: "Add Test Result" },
              { text: "Define a Group of Test Result" },
              { text: "Add Part to Test Result" },
            ],
          },
          { separator: true },
          {
            text: "Project Status",
            items: [
              { text: "View Project Status" },

              { text: "Add Individual Status" },

              { text: "Add Group Status" },
              { separator: true },
              { text: "Add Future Status" },

              { text: "Add Future Completion Approximation" },
            ],
          },
          { separator: true },
          {
            text: "Finish",
            items: [{ text: "Complete Project" }, { text: "Close Project" }],
          },
        ],
      },

      {
        text: "Simulation",
        items: [
          { text: "Simulate" },

          { text: "Debug" },

          { text: "Step Into" },
          { separator: true },
          { text: "Abort" },
          { text: "Stop" },
          { separator: true },
          { text: "Simulation Setting" },
        ],
      },

      {
        text: "Analysis",
        items: [
          {
            text: "Communication",
            items: [
              { text: "List of Analyzed Communication" },
              { text: "List of Flagged Communication" },
            ],
          },
          { separator: true },
          {
            text: "Test Result",
            items: [
              { text: "List of Analyzed Test Result" },
              { text: "List of Flagged Result" },
            ],
          },
          {
            text: "Entity Usage",
            items: [
              { text: "List of Analyzed Entity Usage" },
              { text: "List of Flagged Entity Usage" },
            ],
          },
          { separator: true },
          {
            text: "Question & Answer",
            items: [
              { text: "List of Analysis" },
              { text: "List of Question" },
              { text: "List of Answer" },
              { text: "Flagged Entities Awaiting " },
            ],
          },
          {
            text: "Error & Problem",
            items: [
              { text: "List of Error Identified" },
              { text: "List of Problem Identified" },
              { text: "List of Compensator" },
              { text: "Identify Problem " },
            ],
          },
          {
            text: "Other Analysis",
            items: [
              { text: "Application Result" },
              { text: "Problem Statement" },
              { text: "Project Information" },
              { text: "What We Do" },
              { text: "Function of People" },
              { text: "Function of Group Defined" },
              { text: "Comm Holder Related Function" },
              { separator: true },
              { text: "List of Retained Analysis" },
              { separator: true },
              { text: "List All Flagged Entities as Communications" },
              { separator: true },
              { text: "List of Flagged Entities as Communications" },
            ],
          },
        ],
      },

      {
        text: "Feedback",
        items: [
          {
            text: "Feedback",
            items: [
              { text: "Provide Feedback" },
              { text: "Request Feedback" },
              { text: "List of Feedback" },
              { text: "List of Feedback Applied" },
            ],
          },
          {
            text: "Correction",
            items: [
              { text: "List of Error Corrected" },
              { text: "List of Problem Solved" },
              { text: "List of Compensator" },
              { text: "Solve Problem" },
            ],
          },
          {
            text: "Feedback Option",
            items: [
              { text: "List of Feedback Received" },
              { text: "List of Feedback Requested" },
              { text: "Check For Feedback" },
              { text: "List of Feedback Provided" },
            ],
          },
          {
            text: "Review",
            items: [
              { text: "Setup Review" },
              { text: "Review Entity" },
              { text: "List of Review" },
            ],
          },
        ],
      },

      {
        text: "Operation",
        items: [
          { text: "Show Relationship of Entities" },
          { text: "Identity Similarity of Entities" },
          { text: "Attach Selected Entities" },
          { separator: true },
          { text: "Compare Selected Entities" },
          { text: "Identify Difference of Entities" },
          { text: "Identify Part of Entity" },
          { text: "Identify Entities As One" },
          { separator: true },

          {
            text: "Other Operations",
            items: [
              { text: "Relate Entity with Principle" },
              { separator: true },
              { text: "Relate Entity with Principle Aspect" },
              { separator: true },
              { text: "Show Attached Entity" },
            ],
          },
          {
            text: "Additional Operations",
            items: [
              { text: "Dissassociate Relationship" },
              { text: "Remove Similarity from Entities" },
              { text: "Uncompare Compared Entities" },
              { text: "Remove Difference from Entities" },
              {
                text: "Detach Attached Entities",
              },
              { separator: true },
              { text: "UnIdentify Part of Entity" },

              { text: "UnIdentify Entities as One" },
            ],
          },
        ],
      },

      {
        text: "Domain",

        items: [
          { text: "Switch to Communication Domain" },
          { text: "Switch to Theory Domain" },
        ],
      },
      {
        text: "Help",

        items: [
          { text: "Communication Domain Help" },
          { text: "Theory Domain Help" },
        ],
      },
    ];
  }
  render() {
    return (
      <ul style={{ backgroundColor: "#0BBB56" }}>
        <MenuComponent
          items={this.menuItems}
          style={{ backgroundColor: "#0BBB56", color: "white" }}
        />
      </ul>
    );
  }
}

export default Navbar;
