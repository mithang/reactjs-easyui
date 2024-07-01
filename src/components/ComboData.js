import React from "react";
import { ComboBox, Label } from "rc-easyui";

class ComboData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 11,
      data: this.getData(),
    };
  }
  getData() {
    return [
      { value: 11, text: "Vietnamese" },
      { value: 12, text: "English" },
    ];
  }
  render() {
    return (
      <ComboBox
        inputId="c1"
        data={this.state.data}
        value={this.state.value}
        onChange={(value) => this.setState({ value: value })}
      />
    );
  }
}

export default ComboData;
