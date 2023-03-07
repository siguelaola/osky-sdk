import React from "react";
import CheckboxInput from "./CheckboxInput";
import { ComponentProps } from "./ScreenComponent";
import { CheckboxBlockData, ChecklistBlockData } from "../interfaces/types";

class CheckboxComponent extends React.Component<ComponentProps> {
  onClick = (id: string, checked: boolean) => {
    this.props.onChange(id, checked, true);
  };

  renderCheckbox = (index: number, item: CheckboxBlockData) => {
    return <CheckboxInput key={item.id} onClick={this.onClick} {...item} />;
  };

  render() {
    const data = this.props.data as ChecklistBlockData;
    return (
      <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
        {data.items.map((item, index) => {
          return this.renderCheckbox(index, item);
        })}
      </div>
    );
  }
}

export default CheckboxComponent;
