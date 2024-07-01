import React from "react";
import { Tabs, TabPanel } from "rc-easyui";
import DataTable from "./DataTable";

class Tab extends React.Component {
  render() {
    return (
      <Tabs style={{ height: '100%' }} selectedIndex={1}>
        <TabPanel title="Tab1">
          <DataTable/>
        </TabPanel>
        <TabPanel title="Tab2">
          <p>Tab Panel2</p>
        </TabPanel>
        <TabPanel title="Tab3">
          <p>Tab Panel3</p>
        </TabPanel>
        <TabPanel title="Help" closable iconCls="icon-help">
          <p>This is the help content.</p>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Tab;
