import React from "react";
import { Layout, LayoutPanel } from "rc-easyui";
import According from "./components/According";
import Tab from "./components/Tab";
import MenuData from "./components/MenuData";
import ComboData from "./components/ComboData";

//  import './App.css'
class App extends React.Component {
  render() {
    const titleStyle = {
      textAlign: "center",
    };
    return (
      <Layout style={{ width: "100%", height: "100vh" }}>
        <LayoutPanel region="north" style={{ height: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>LOGO</div>
            <ComboData />
          </div>
        </LayoutPanel>
        <LayoutPanel region="south" style={{ height: "auto" }}>
          <div style={titleStyle}>Copyright@HD</div>
        </LayoutPanel>
        <LayoutPanel
          region="west"
          title="Menu"
          style={{ width: 200 }}
          collapsible
          collapsed
          expander
        >
          <According />
        </LayoutPanel>
        <LayoutPanel
          region="east"
          title="Support"
          style={{ width: 200 }}
          collapsible
          collapsed
          expander
        >
          <div style={titleStyle}>Support</div>
        </LayoutPanel>
        <LayoutPanel region="center" style={{ height: "100%" }}>
          <MenuData />
          <Tab />
        </LayoutPanel>
      </Layout>
    );
  }
}

export default App;
