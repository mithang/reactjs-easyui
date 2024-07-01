import React from "react";
import { Accordion, AccordionPanel } from "rc-easyui";

class According extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          text: "Forms",
          iconCls: "wpforms",
          submenus: ["Form Element", "Wizard", "File Upload"],
        },
        {
          text: "Mail",
          iconCls: "at",
          submenus: ["Inbox", "Sent", "Trash"],
        },
        {
          text: "Layout",
          iconCls: "table",
          submenus: ["Panel", "Accordion", "Tabs"],
        },
      ],
    };
  }
  render() {
    return (
      <Accordion style={{ height: 'auto' }}>
        <AccordionPanel title="Title1">
          <p>Content1</p>
        </AccordionPanel>
        <AccordionPanel title="Title2">
          <p>Content2</p>
        </AccordionPanel>
        <AccordionPanel title="Title3">
          <p>Content3</p>
        </AccordionPanel>
      </Accordion>
    );
  }
}

export default According;
